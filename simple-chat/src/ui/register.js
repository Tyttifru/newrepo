const loginScreen = document.querySelector('#login-screen');
const chatListScreen = document.querySelector('#chat-list-screen');
const chatScreen = document.querySelector('#chat-screen');
const authFlip = document.querySelector('#auth-flip');
const logoutBtn = document.querySelector('.logoutbtn');

export const registerForm = document.querySelector('#register-form');
export const backBtn = document.querySelector('#back-to-login-btn');
export const regName = document.querySelector('#reg-name');
export const regPass = document.querySelector('#reg-password');

export function showRegister() {
    chatListScreen.classList.remove('active');
    chatScreen.classList.remove('active');
    loginScreen.classList.add('active');
    logoutBtn.style.display = 'none';
    authFlip.classList.add('flipped');
}
