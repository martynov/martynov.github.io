var marquee = function () {
    function fixZero (number) {
        return number <= 9 ? '0' + number : number
    }

    var date = new Date();
    var months = new Array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря');
    var days = new Array('воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота');
    var today = 'Сегодня ' + days[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' года';
    var time = 'Текущее время ' + fixZero(date.getHours()) + ':' + fixZero(date.getMinutes());

    var news = new Array(
        today,
        time,
        'Загруженность работой: средняя',
        'Связаться со мной можно по ICQ 950-4330 или по факсу, номер будет предоставлен по запросу',
    );

    document.getElementById('marquee').innerHTML = news.join('<div class="marquee-space"></div>');
}

document.addEventListener("DOMContentLoaded", marquee, false);