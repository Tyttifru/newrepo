const loginScreen = document.querySelector('#login-screen');
const chatListScreen = document.querySelector('#chat-list-screen');
const chatScreen = document.querySelector('#chat-screen');
const authFlip = document.querySelector('#auth-flip');
const logoutBtn = document.querySelector('.logoutbtn');

export const loginForm = document.querySelector('#login-form');
export const toRegistrationBtn = document.querySelector('#to-register-btn');
export const loginName = document.querySelector('#login-name');
export const loginPass = document.querySelector('#login-password');

export function showLogin() {
    chatListScreen.classList.remove('active');
    chatScreen.classList.remove('active');
    loginScreen.classList.add('active');
    logoutBtn.style.display = 'none';
    authFlip.classList.remove('flipped');
}