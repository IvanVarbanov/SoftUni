function notify(message) {
    let notification = document.getElementById('notification');
    notification.setAttribute('style', 'display: block');
    notification.textContent = 'Something happened!';
    setTimeout(() => {
        notification.removeAttribute('style');
    }, 2 * 1000);
}
