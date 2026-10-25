import './index.css';

const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const author = document.querySelector('.author-input');
const message = document.querySelector('.message');
const clearbtn = document.querySelector('.clearbtn');

const listmessages = JSON.parse(localStorage.getItem('chat') || '[]');
const authorSave = localStorage.getItem('author');

if (authorSave) {
    author.value = authorSave
}

form.addEventListener('submit', handleSubmit);
clearbtn.addEventListener('click', handleClear);

render();

function handleSubmit (event) {
    event.preventDefault();

    const text = input.value
    const name = author.value
    localStorage.setItem('author', name)

    listmessages.push({
        text: text,
        author: name,
        time: new Date().toISOString()

    });

    localStorage.setItem('chat', JSON.stringify(listmessages));
    
    render();

    input.value = '';
}

function handleClear () {
    localStorage.removeItem('chat');
    listmessages.length = 0;
    render();
}

function render () {
    message.innerHTML = listmessages.map(function (item) {
            return `
                <div class="message-item">
                    <span class="message-meta">${item.author} | ${new Date(item.time).toLocaleString('ru-RU')}</span>
                    <span class="message-text">${item.text}</span>
                </div>
            `;
        })
        .join('');
}


