import { formatDate } from '../utils/formatDate.js';

const loginScreen = document.querySelector('#login-screen');
const chatListScreen = document.querySelector('#chat-list-screen');
const chatScreen = document.querySelector('#chat-screen');
const logoutBtn = document.querySelector('.logoutbtn');

export const form = document.querySelector('.form');
export const input = document.querySelector('.form-input');
export const messageContainer = document.querySelector('.message');
export const backToChatListBtn = document.querySelector('.back-to-list-btn');
export const chatBurgerBtn = document.querySelector('.chat-burger-btn');
export const chatDropdown = document.querySelector('#chat-dropdown');
export const clearChatBtn = document.querySelector('#clear-chat-btn');
export const chatSearchContainer = document.querySelector('#chat-search-container');
export const chatSearchBtn = document.querySelector('#chat-search-btn');
export const chatSearchInput = document.querySelector('#chat-search-input');

export function showChat() {
    loginScreen.classList.remove('active');
    chatListScreen.classList.remove('active');
    chatScreen.classList.add('active');
    logoutBtn.style.display = 'flex';
}

export function getMessage(item) {
    return `
        <div class="message-item">
            <span class="message-meta">${item.author} | ${formatDate(item.time)}</span>
            <span class="message-text">${item.text}</span>
        </div>
    `;
}

export function addMessage(message) {
    messageContainer.insertAdjacentHTML('beforeend', getMessage(message));
}

export function renderMessages(messages) {
    messageContainer.innerHTML = messages.map(item => getMessage(item)).join('');
}