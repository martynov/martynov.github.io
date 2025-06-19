var marquee = function () {
    var fixZero = function (number) {
        return number <= 9 ? '0' + number : number
    }

    var updateDateAndTime = function () {
        var date = new Date();
        document.getElementById('marquee-date').innerHTML = days[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' года';
        document.getElementById('marquee-hours').innerHTML = fixZero(date.getHours())
        document.getElementById('marquee-minutes').innerHTML = fixZero(date.getMinutes())
        document.getElementById('marquee-seconds').innerHTML = fixZero(date.getSeconds())
    }

    var getVisitors = function () {
        var date = new Date();
        var visitorsPerHour = [0.6, 0.3, 0.65, 0.1, 0.1, 0.1, 0.2, 0.3, 0.4, 0.6, 0.5, 0.65, 0.55, 0.4, 0.3, 0.25, 0.35, 0.45, 0.5, 0.65, 0.8, 0.9, 1, 0.8]
        var maximum = 100
        return Math.ceil((maximum * visitorsPerHour[date.getHours()]) * (Math.random() * 0.4 + 0.8))
    }

    var months = new Array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря');
    var days = new Array('воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота');

    var news = new Array(
        'Текущее время <span id="marquee-hours"></span><span class="blink">:</span><span id="marquee-minutes"></span><span class="blink">:</span><span id="marquee-seconds"></span>',
        'Сегодня <span id="marquee-date"></span>',
        'Прямо сейчас на сайте: ' + getVisitors() + ' посетителей',
        'Загруженность работой: средняя',
        'Связаться со мной можно по ICQ 950-4330 или по факсу, номер будет предоставлен по запросу',
        'Погода сейчас: переменная облачность, температура средняя',
        'Прогноз погоды на завтра: погода хорошая, небольшой ветер',
        'Курс валют на завтра:',
        'Доллар: дорожает',
        'Рубль: дешевеет'
    );

    document.getElementById('marquee').innerHTML = news.join('<div class="marquee-space"></div>');

    updateDateAndTime();
    setInterval(updateDateAndTime, 1000)
}

document.addEventListener("DOMContentLoaded", marquee, false);