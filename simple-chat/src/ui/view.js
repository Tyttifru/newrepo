import { formatDate } from '../utils/formatDate.js';

export function getMessage(item) {
        return `
            <div class="message-item">
                <span class="message-meta">${item.author} | ${formatDate(item.time)}</span>
                <span class="message-text">${item.text}</span>
            </div>
        `;
}

export function addMessage(message, container) {
    container.insertAdjacentHTML('beforeend', getMessage(message))
}

export function renderMessages (messages, container) {
    container.innerHTML = messages.map(item => getMessage(item)).join('')
}

export function showChat(loginScreen, registerScreen, chatScreen) {
    loginScreen.classList.remove('active');
    registerScreen.classList.remove('active')
    chatScreen.classList.add('active');
}

export function showLogin(loginScreen, registerScreen, chatScreen) {
    chatScreen.classList.remove('active');
    registerScreen.classList.remove('active')
    loginScreen.classList.add('active');
}

export function showRegister (loginScreen, registerScreen, chatScreen) {
    loginScreen.classList.remove('active')
    chatScreen.classList.remove('active');
    registerScreen.classList.add('active')
}