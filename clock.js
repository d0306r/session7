let clockFunction = function(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if(hour<10) hour = '0' + hour;
    if(minute<10) minute = '0' + minute;
    if(second<10) second = '0' + second;


    let timenow = hour + ':' + minute + ':' + second;

    let timeshown = document.querySelector('#w_clock h1')
    timeshown.textContent = timenow;
}

setInterval(clockFunction, 1000);s