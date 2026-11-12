import './index.css';

import { getMessages, saveMessages, clearMessagesStorage, getCurrentUser, saveCurrentUser, removeCurrentUser, getRegisteredUsers, saveRegisteredUsers, saveCurrentScreen, getCurrentScreen, removeCurrentScreen } from './services/storage.js';

import { mockChats } from './services/mocks.js';

import { showLogin, loginForm, toRegistrationBtn, loginName, loginPass } from './ui/login.js';
import { showRegister, registerForm, backBtn, regName, regPass } from './ui/register.js';
import { showChatList, renderChatList, chatListContainer, chatListBox, burgerBtn, dropdownMenu, listSearchContainer, listSearchBtn, listSearchInput } from './ui/chatList.js';
import { showChat, renderMessages, addMessage, form, input, messageContainer, backToChatListBtn, chatBurgerBtn, chatDropdown, clearChatBtn, chatSearchContainer, chatSearchBtn, chatSearchInput } from './ui/chat.js';

const logoutBtn = document.querySelector('.logoutbtn');

let listmessages = [];

function isValidInput(name, password) {
    if (!name || !password) {
        alert("Введите имя и пароль!");
        return false;
    }
    return true;
}

function toggleSearch(container, input) {
    container.classList.toggle('active');
    if (container.classList.contains('active')) {
        input.focus();
    }
}

function toggleMenu(menu) {
    menu.classList.toggle('active');
}

function initState() {
    listmessages = getMessages();
    const authorSave = getCurrentUser();
    renderChatList(mockChats);

    if (authorSave) {
        loginName.value = authorSave;
        const savedScreen = getCurrentScreen();
        if (savedScreen === 'chat') {
            showChat();
            renderMessages(listmessages);
        } else {
            showChatList();
        }
    } else {
        showLogin();
    }
}

function handleLoginSubmit(event) {
    event.preventDefault();
    const name = loginName.value.trim();
    const password = loginPass.value.trim();

    if (!isValidInput(name, password)) return;

    const users = getRegisteredUsers();
    if (users[name] === password) {
        saveCurrentUser(name);
        showChatList();
        renderMessages(listmessages);
        loginPass.value = '';
    } else {
        alert("Неверное имя или пароль!");
    }
}

function handleToRegisterClick() {
    showRegister();
}

function handleRegisterSubmit(event) {
    event.preventDefault();
    const name = regName.value.trim();
    const password = regPass.value.trim();

    if (!isValidInput(name, password)) return;

    const users = getRegisteredUsers();
    if (users[name]) {
        alert("Пользователь с таким именем уже есть! Введите другое!");
        return;
    }

    users[name] = password;
    saveRegisteredUsers(users);
    saveCurrentUser(name);
    alert("Регистрация прошла успешно!");
    regName.value = '';
    regPass.value = '';
    
    showChatList();
}

function handleBackToLoginClick() {
    loginName.value = '';
    loginPass.value = '';
    showLogin();
}

function handleChatListClick(event) {
    const chatItem = event.target.closest('.chat-item');
    if (!chatItem) return;
    saveCurrentScreen('chat');
    showChat();
    renderMessages(listmessages);
}

function handleBurgerClick(event) {
    event.stopPropagation();
    toggleMenu(dropdownMenu);
}

function handleListSearchClick(event) {
    event.stopPropagation();
    toggleSearch(listSearchContainer, listSearchInput);
}

function handleSendMessage(event) {
    event.preventDefault();
    const text = input.value.trim();
    const name = getCurrentUser();
    if (!text) return;

    const newMessage = {
        text: text,
        author: name,
        time: new Date().toISOString()
    };

    listmessages.push(newMessage);
    saveMessages(listmessages);
    addMessage(newMessage);
    input.value = '';
}

function handleBackToChatListClick() {
    saveCurrentScreen('list');
    showChatList();
}

function handleChatBurgerClick(event) {
    event.stopPropagation();
    toggleMenu(chatDropdown);
}

function handleChatSearchClick(event) {
    event.stopPropagation();
    toggleSearch(chatSearchContainer, chatSearchInput);
}

function handleClearChatClick() {
    clearMessagesStorage();
    listmessages = [];
    renderMessages(listmessages);
    chatDropdown.classList.remove('active');
}

function handleLogoutClick() {
    removeCurrentUser();
    removeCurrentScreen();
    loginName.value = '';
    loginPass.value = '';
    showLogin();
}

function handleListClickOutside(event) {
    if (!dropdownMenu.contains(event.target) && !burgerBtn.contains(event.target)) {
        dropdownMenu.classList.remove('active');
    }
    if (!listSearchContainer.contains(event.target)) {
        listSearchContainer.classList.remove('active');
    }
}

function handleChatClickOutside(event) {
    if (!chatDropdown.contains(event.target) && !chatBurgerBtn.contains(event.target)) {
        chatDropdown.classList.remove('active');
    }
    if (!chatSearchContainer.contains(event.target)) {
        chatSearchContainer.classList.remove('active');
    }
}

loginForm.addEventListener('submit', handleLoginSubmit);
toRegistrationBtn.addEventListener('click', handleToRegisterClick);
registerForm.addEventListener('submit', handleRegisterSubmit);
backBtn.addEventListener('click', handleBackToLoginClick);

chatListContainer.addEventListener('click', handleChatListClick);
burgerBtn.addEventListener('click', handleBurgerClick);
listSearchBtn.addEventListener('click', handleListSearchClick);

form.addEventListener('submit', handleSendMessage);
backToChatListBtn.addEventListener('click', handleBackToChatListClick);
chatBurgerBtn.addEventListener('click', handleChatBurgerClick);
chatSearchBtn.addEventListener('click', handleChatSearchClick);
clearChatBtn.addEventListener('click', handleClearChatClick);

logoutBtn.addEventListener('click', handleLogoutClick);

chatListBox.addEventListener('click', handleListClickOutside);
form.addEventListener('click', handleChatClickOutside);

initState();