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

export function showChat(loginScreen, chatListScreen, chatScreen) {
    loginScreen.classList.remove('active');
    chatListScreen.classList.remove('active')
    chatScreen.classList.add('active')
    document.querySelector('.logoutbtn').style.display = 'flex';
}

export function showChatList(loginScreen, chatListScreen, chatScreen) {
    loginScreen.classList.remove('active');
    chatScreen.classList.remove('active');
    chatListScreen.classList.add('active');
    document.querySelector('.logoutbtn').style.display = 'flex';
}

export function showLogin(loginScreen, chatListScreen, chatScreen) {
    chatListScreen.classList.remove('active')
    chatScreen.classList.remove('active');
    loginScreen.classList.add('active');
    document.querySelector('.logoutbtn').style.display = 'none';
    document.querySelector('#auth-flip').classList.remove('flipped')
}

export function showRegister (loginScreen, chatListScreen, chatScreen) {
    chatListScreen.classList.remove('active');
    chatScreen.classList.remove('active');
    loginScreen.classList.add('active')
    document.querySelector('.logoutbtn').style.display = 'none';
    document.querySelector('#auth-flip').classList.add('flipped')
}

export function getChatItem(item) {
    const statusHTML = item.status === 'unread' 
        ? `<span class="chat-badge">${item.unreadCount || 1}</span>` 
        : `<span class="chat-status" style="color: #05b30d;">✓✓</span>`;

    return `
        <div class="chat-item" data-id="${item.id}">
            <div class="chat-avatar" style="background: #FFC107;">${item.avatar}</div>
            <div class="chat-info">
                <div class="chat-top">
                    <span class="chat-name">${item.name}</span>
                    <span class="chat-time">${item.time}</span>
                </div>
                <div class="chat-bottom">
                    <span class="chat-last-message">${item.lastMessage}</span>
                    ${statusHTML}
                </div>
            </div>
        </div>
    `;
}

export function renderChatList(chats, container) {
    container.innerHTML = chats.map(item => getChatItem(item)).join('');
}