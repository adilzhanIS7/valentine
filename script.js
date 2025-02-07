const messages = [
    "Ты уверена?",
    "Точно уверена??",
    "Может подумаешь еще?",
    "Пожалуйста пожалуйста!",
    "Просто подумай еще чуть чуть!",
    "Если скажешь нет, я буду очень расстроен...",
    "Я буду очень расстроен...",
    "Я буду очень очень расстроен...",
    "Окей хорошо, я перестану...",
    "Шучу, просто скажи да пожалуйста ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}