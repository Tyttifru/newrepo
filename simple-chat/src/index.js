import './index.css';

import { getMessages, saveMessages, clearMessagesStorage, getCurrentUser, 
        saveCurrentUser, removeCurrentUser, getRegisteredUsers, saveRegisteredUsers,
        saveCurrentScreen, getCurrentScreen, removeCurrentScreen 
        } from './services/storage.js';

import { renderMessages, addMessage, showChat, showChatList, showLogin, showRegister, renderChatList } from './ui/view.js';

import { mockChats } from './services/mocks.js';

const logoutBtn = document.querySelector('.logoutbtn');

const loginScreen = document.querySelector('#login-screen');
const loginName = document.querySelector('#login-name');
const loginPass = document.querySelector('#login-password')
const loginForm = document.querySelector('#login-form')
const toRegistrationBtn = document.querySelector('#to-register-btn')

const regName = document.querySelector('#reg-name')
const regPass = document.querySelector('#reg-password')
const registerForm = document.querySelector('#register-form')
const backBtn = document.querySelector('#back-to-login-btn')

const chatListScreen = document.querySelector('#chat-list-screen')
const chatListContainer = document.querySelector('.chat-list-container')
const burgerBtn = document.querySelector('.burger-btn');
const dropdownMenu = document.querySelector('#burger-dropdown')
const listSearchContainer = document.querySelector('#search-container');
const listSearchBtn = document.querySelector('#search-btn');
const listSearchInput = document.querySelector('.search-input');

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const messageContainer = document.querySelector('.message');
const chatScreen = document.querySelector('#chat-screen');
const backToChatListBtn = document.querySelector('.back-to-list-btn')
const chatBurgerBtn = document.querySelector('.chat-burger-btn');
const chatDropdown = document.querySelector('#chat-dropdown');
const clearChatBtn = document.querySelector('#clear-chat-btn')
const chatSearchContainer = document.querySelector('#chat-search-container');
const chatSearchBtn = document.querySelector('#chat-search-btn');
const chatSearchInput = document.querySelector('#chat-search-input')


let listmessages = []

function initState() {

    listmessages = getMessages();
    const authorSave = getCurrentUser();

    renderChatList(mockChats, chatListContainer)

    if (authorSave) {
        loginName.value = authorSave;

        const savedScreen = getCurrentScreen()

        if (savedScreen === 'chat') {
            showChat(loginScreen, chatListScreen, chatScreen);
            renderMessages(listmessages, messageContainer);
        } else {
            showChatList(loginScreen, chatListScreen, chatScreen)
        }
    
    } else {
        showLogin(loginScreen, chatListScreen, chatScreen);
    }
}

loginForm.addEventListener('submit', function(event) {
    event.preventDefault()

    const name = loginName.value.trim();
    const password = loginPass.value.trim()

    if (!name || !password) {
        alert("Введите имя и пароль!");
        return;
    }

    const users = getRegisteredUsers()

    if (users[name] === password) {
        saveCurrentUser(name);
        showChatList(loginScreen, chatListScreen, chatScreen)
        renderMessages(listmessages, messageContainer);
        loginPass.value = ''
    } else {
        alert("Неверное имя или пароль!") 
    }
});

toRegistrationBtn.addEventListener('click', function () {
    showRegister(loginScreen, chatListScreen, chatScreen)
})

registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

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

    showLogin(loginScreen, chatListScreen, chatScreen)
})

backBtn.addEventListener('click', function () {
    loginName.value = '';
    loginPass.value = ''
    showLogin(loginScreen, chatListScreen, chatScreen);
})

chatListContainer.addEventListener('click', function(event) {
    const chatItem = event.target.closest('.chat-item')

    if (!chatItem) return

    saveCurrentScreen('chat')
    showChat(loginScreen, chatListScreen, chatScreen)
    renderMessages(listmessages, messageContainer)
})

burgerBtn.addEventListener('click', function(event) {
    event.stopPropagation()
    dropdownMenu.classList.toggle('active')
})

listSearchBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    listSearchContainer.classList.toggle('active');
    if (listSearchContainer.classList.contains('active')) {
        listSearchInput.focus();
    }
});

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

backToChatListBtn.addEventListener('click', function() {
    saveCurrentScreen('list')
    showChatList(loginScreen, chatListScreen, chatScreen);
});

chatBurgerBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    chatDropdown.classList.toggle('active');
});

chatSearchBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    chatSearchContainer.classList.toggle('active');
    if (chatSearchContainer.classList.contains('active')) {
        chatSearchInput.focus();
    }
});

clearChatBtn.addEventListener('click', function() {
    clearMessagesStorage();
    listmessages = [];
    renderMessages(listmessages, messageContainer);
    chatDropdown.classList.remove('active'); // Закрываем меню
});

logoutBtn.addEventListener('click', function() {
    removeCurrentUser();
    removeCurrentScreen()
    loginName.value = '';
    loginPass.value = ''
    showLogin(loginScreen, chatListScreen, chatScreen);
});

document.addEventListener('click', function(event) {
    if (!listSearchContainer.contains(event.target)) {
        listSearchContainer.classList.remove('active');
    }
    if (!chatSearchContainer.contains(event.target)) {
        chatSearchContainer.classList.remove('active');
    }
    if (!chatDropdown.contains(event.target) && !chatBurgerBtn.contains(event.target)) {
        chatDropdown.classList.remove('active');
    }
    if (!dropdownMenu.contains(event.target) && !burgerBtn.contains(event.target)) {
        dropdownMenu.classList.remove('active')
    }
});

initState()