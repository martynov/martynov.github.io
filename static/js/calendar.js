var calendar = function () {
    function leapYear(year) {
        if (year % 4 == 0) {
            return true;
        } else {
            return false;
        }
    }

    function getDays(month, year) {
        var ar = new Array(12);
        ar[0] = 31;
        ar[1] = (leapYear(year)) ? 29 : 28;
        ar[2] = 31;
        ar[3] = 30;
        ar[4] = 31;
        ar[5] = 30;
        ar[6] = 31;
        ar[7] = 31;
        ar[8] = 30;
        ar[9] = 31;
        ar[10] = 30;
        ar[11] = 31;
        return ar[month];
    }

    function getMonthName(month) {
        var ar = new Array(12);
        ar[0] = "Январь";
        ar[1] = "Февраль";
        ar[2] = "Март";
        ar[3] = "Апрель";
        ar[4] = "Май";
        ar[5] = "Июнь";
        ar[6] = "Июль";
        ar[7] = "Август";
        ar[8] = "Сентябрь";
        ar[9] = "Октябрь";
        ar[10] = "Ноябрь";
        ar[11] = "Декабрь";
        return ar[month];
    }

    function renderCalendar() {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth();
        var monthName = getMonthName(month);
        var date = now.getDate();
        now = null;
        var firstDayInstance = new Date(year, month, 1);
        var firstDay = firstDayInstance.getDay();
        firstDayInstance = null;
        var days = getDays(month, year);
        return drawCal(firstDay, days, date, monthName, year);
    }

    function drawCal(firstDay, lastDate, date, monthName, year) {
        var text = "";
        text += '<div class="title h2">';
        text +=	monthName + ' ' + year;
        text += '</div>';
        text += '<table cellspacing="3">';
        var weekDay = new Array("ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС");
        text += '<tr>';
        for (var dayNum = 0; dayNum < weekDay.length; ++dayNum) {
            text += '<th>' + weekDay[dayNum] + '</th>';
        }
        text += '</tr>';
        var digit = 1;
        var curCell = 1;
        for (var row = 1; row <= Math.ceil((lastDate + firstDay - 1) / 7); ++row)  {
            text += '<tr>';
            for (var col = 1; col <= 7; ++col) {
                if (digit > lastDate) {
                    break
                }

                if (curCell < firstDay) {	
                    text += '<td class="space"></td>'
                    curCell++
                } else {
                    if (digit == date) {
                        text += '<td class="today">' + digit + '</td>';
                    } else {
                        text += '<td>' + digit + '</td>';
                    }

                    digit++
                }
            }
            text += '</tr>';
        }
        text += '</table>';

        return text;
    }

    document.getElementById('calendar').innerHTML = renderCalendar();
}

document.addEventListener("DOMContentLoaded", calendar, false);