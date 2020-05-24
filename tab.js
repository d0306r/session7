const selectClock = document.querySelector('#selectClock');
const selectStopwatch = document.querySelector('#selectStopwatch');
const selectTimer = document.querySelector('#selectTimer');
const w_clock = document.querySelector('#w_clock');
const w_stopwatch = document.querySelector('#w_stopwatch');
const w_timer = document.querySelector('#w_timer');

selectClock.onclick = function(){
    w_clock.style.display = 'block';
    w_stopwatch.style.display = 'none';
    w_timer.style.display = 'none';
}
selectStopwatch.onclick = function(){
    w_clock.style.display = 'none';
    w_stopwatch.style.display = 'block';
    w_timer.style.display = 'none';
}
selectTimer.onclick = function(){
    w_clock.style.display = 'none';
    w_stopwatch.style.display = 'none';
    w_timer.style.display = 'block';
}