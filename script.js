// Обработчик отправки формы
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Получение значений полей формы
    var name = document.getElementById('name').value;
    var text = document.getElementById('text').value;

    // Регулярное выражение для проверки имени
    var nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;

    // Проверка имени с помощью регулярного выражения
    if (!nameRegex.test(name)) {
        alert('Имя должно содержать только буквы и пробелы');
        return;
    }

    // Создание нового сообщения
    var message = document.createElement('div');
    message.className = 'message';

    var messageInfo = document.createElement('div');
    messageInfo.className = 'message-info';
    messageInfo.innerHTML = '<strong>' + name + '</strong> ' + '<strong>'+ getCurrentDate() + '</strong>';

    var messageText = document.createElement('div');
    messageText.innerHTML = text;

    message.appendChild(messageInfo);
    message.appendChild(messageText);

    // Добавление сообщения на страницу
    document.getElementById('messages').appendChild(message);

    // Очистка полей формы
    document.getElementById('name').value = '';
    document.getElementById('text').value = '';
});

// Функция для получения текущей даты и времени
function getCurrentDate() {
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    return hours + ':' + minutes + ':' + seconds + ' ' + date + '.' + month + '.' + year;
}