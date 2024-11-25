var countdownBanner = function () {
    if (document.getElementById('countdown-banner-days')) {
        var interval = function () {
            var now = new Date();
            var finish = new Date('2025-01-01, 00:00');
    
            var days = Math.floor((finish - now) / (1000 * 60 * 60 * 24));
            var hours = Math.floor((finish - now) / (1000 * 60 * 60)) % 24;
            var minutes = Math.floor((finish - now) / (1000 * 60)) % 60;
            var seconds = Math.floor((finish - now) / (1000)) % 60;
        
            document.getElementById('countdown-banner-days').innerHTML = days;
            document.getElementById('countdown-banner-hours').innerHTML = hours;
            document.getElementById('countdown-banner-minutes').innerHTML = minutes;
            document.getElementById('countdown-banner-seconds').innerHTML = seconds;
        };
        
        setInterval(interval, 1000);
        interval();
    }
}

document.addEventListener("DOMContentLoaded", countdownBanner, false);