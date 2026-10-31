export function getMessages() {
    return JSON.parse(localStorage.getItem('chat') || '[]');
}

export function saveMessages(messages) {
    localStorage.setItem('chat', JSON.stringify(messages));
}

export function clearMessagesStorage() {
    localStorage.removeItem('chat');
}

export function getCurrentUser() {
    return localStorage.getItem('currentUser');
}

export function saveCurrentUser(name) {
    localStorage.setItem('currentUser', name);
}

export function removeCurrentUser() {
    localStorage.removeItem('currentUser');
}

export function getRegisteredUsers () {
    return JSON.parse(localStorage.getItem('users') || '{}')
}

export function saveRegisteredUsers (users) {
    localStorage.setItem('users', JSON.stringify(users))
}