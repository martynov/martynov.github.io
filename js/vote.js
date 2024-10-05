var vote = function () {
    var radio = document.getElementsByName('rate');
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            switch (radio[i].value) {
                case '1':
                    alert('Очень жаль, что вам так не понравился мой сайт, я буду стараться сделать его лучше :\'(');
                    break;
                case '2':
                    alert('Ну ладно, я подумаю, что можно улучшить :-(');
                    break;
                case '3':
                    alert('Хорошо, спасибо за ваше мнение!');
                    break;
                case '4':
                    alert('Я очень рад, что вы так высоко оценили мой сайт! :-)');
                    break;
                case '5':
                    alert('Спасибо большое, очень приятно :-)');
                    break;
            }
        }
    }
}