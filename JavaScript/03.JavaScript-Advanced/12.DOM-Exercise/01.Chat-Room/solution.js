function solve() {
    document.getElementById('send').addEventListener('click', () => {
        let message = document.getElementById('chat_input').value;
        let chatbox = document.getElementById('chat_messages');
        if (message) {
            let newElement = document.createElement('div');
            newElement.textContent = message;
            newElement.setAttribute('class', 'message my-message');
            chatbox.appendChild(newElement);
            document.getElementById('chat_input').value = '';
        }
    });
}
