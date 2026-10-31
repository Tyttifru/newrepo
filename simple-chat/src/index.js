import './index.css';

import { getMessages, saveMessages, clearMessagesStorage, getCurrentUser, 
        saveCurrentUser, removeCurrentUser, getRegisteredUsers, saveRegisteredUsers 
        } from './services/storage.js';

import { renderMessages, addMessage, showChat, showLogin, showRegister } from './ui/view.js';

const form = document.querySelector('form');
const chatScreen = document.querySelector('#chat-screen');
const input = document.querySelector('.form-input');
const messageContainer = document.querySelector('.message');
const clearbtn = document.querySelector('.clearbtn');
const logoutBtn = document.querySelector('.logoutbtn');

const loginScreen = document.querySelector('#login-screen');
const loginBtn = document.querySelector('.login-btn');
const loginName = document.querySelector('#login-name');
const loginPass = document.querySelector('#login-password')
const toRegistrationBtn = document.querySelector('.registration-btn')

const registerScreen = document.querySelector('#register-screen')
const regName = document.querySelector('#reg-name')
const regPass = document.querySelector('#reg-password')
const newRegisterBtn = document.querySelector('.addnewuser-btn')

const backBtn = document.querySelector('.backtologin-btn')

let listmessages = []

function initState() {

    listmessages = getMessages();
    const authorSave = getCurrentUser();

    if (authorSave) {
    loginName.value = authorSave;
    showChat(loginScreen, registerScreen, chatScreen);
    renderMessages(listmessages, messageContainer);
    }
     else {
    showLogin(loginScreen, registerScreen, chatScreen);
    }
}

initState()

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const text = input.value.trim();
    const name = getCurrentUser();

    if (!text) return;

    const newMessage = {
        text: text,
        author: name,
        time: new Date().toISOString()
    }

    listmessages.push(newMessage)
    saveMessages(listmessages);
    addMessage(newMessage, messageContainer);
    input.value = '';
});

toRegistrationBtn.addEventListener('click', function () {
    showRegister(loginScreen, registerScreen, chatScreen)
})

newRegisterBtn.addEventListener('click', function () {
    const name = regName.value.trim()
    const password = regPass.value.trim()

    if (!name || !password) {
        alert("Введите имя и пароль!")
        return
    }

    const users = getRegisteredUsers()

    if (users[name]) {
        alert("Пользователь с таким именем уже есть! Введите другое!")
        return;
    }

    users[name] = password
    saveRegisteredUsers(users);

    alert("Регистрация прошла успешно, можете войти!")
    regName.value = ''
    regPass.value = ''

    showLogin(loginScreen, registerScreen, chatScreen)
})

clearbtn.addEventListener('click', function() {
    clearMessagesStorage();
    listmessages = [];
    renderMessages(listmessages, messageContainer);
});

loginBtn.addEventListener('click', function() {
    const name = loginName.value;
    const password = loginPass.value

    if (!name || !password) {
        alert("Введите имя и пароль!");
        return;
    }

    const users = getRegisteredUsers()

    if (users[name] === password) {
        saveCurrentUser(name);
        showChat(loginScreen, registerScreen, chatScreen);
        renderMessages(listmessages, messageContainer);
        loginPass.value = ''
    }
        else { alert("Неверное имя или пароль!") }
});

logoutBtn.addEventListener('click', function() {
    removeCurrentUser();
    loginName.value = '';
    loginPass.value = ''
    showLogin(loginScreen, registerScreen, chatScreen);
});

backBtn.addEventListener('click', function () {
    loginName.value = '';
    loginPass.value = ''
    showLogin(loginScreen, registerScreen, chatScreen);
})

