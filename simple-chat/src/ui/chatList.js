const loginScreen = document.querySelector('#login-screen');
const chatListScreen = document.querySelector('#chat-list-screen');
const chatScreen = document.querySelector('#chat-screen');
const logoutBtn = document.querySelector('.logoutbtn');

export const chatListContainer = document.querySelector('.chat-list-container');
export const chatListBox = document.querySelector('.chat-list-box');
export const burgerBtn = document.querySelector('.burger-btn');
export const dropdownMenu = document.querySelector('#burger-dropdown');
export const listSearchContainer = document.querySelector('#search-container');
export const listSearchBtn = document.querySelector('#search-btn');
export const listSearchInput = document.querySelector('.search-input');

export function showChatList() {
    loginScreen.classList.remove('active');
    chatScreen.classList.remove('active');
    chatListScreen.classList.add('active');
    logoutBtn.style.display = 'flex';
}

export function renderChatList(chats) {
    const getChatItem = (item) => {
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
    };

    chatListContainer.innerHTML = chats.map(getChatItem).join('');
}