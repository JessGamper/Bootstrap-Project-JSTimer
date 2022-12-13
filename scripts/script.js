let button = document.querySelector("button");

function TimerFunction() {
    console.log("Timer has Began!");

    let endOfTimer = Date.parse("Dec 7, 2022 15:30:00"); //Hard coded countdown end point

    let nowTime = new Date(); //Getting a copy of the entire date and time from user

    let timeDifference = endOfTimer - nowTime; //Future End time minus Now Time

    console.log(timeDifference); //Test

    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutes = Math.floor(timeDifference / (1000 * 60));
    let seconds = Math.floor(timeDifference / 1000);
    console.log(seconds + "\n" + minutes + "\n" + hours + "\n" + days);
    console.log(days + 'd', hours + 'h', minutes + 'min', seconds + 'sec'); //From Ivan

    let dayTime = days;
    let hourTime = hours - days * 24;
    let minuteTime = minutes - hours * 60;
    let secondsTime = seconds - minutes * 60;

    console.log(dayTime, hourTime, minuteTime, secondsTime);

    document.querySelector(".timer").innerHTML = //Injecting the Code
      '<div>' + dayTime + '</div>' +
      '<div>' + hourTime + '</div>' +
      '<div>' + minuteTime + '</div>' +
      '<div>' + secondsTime + '</div>';
}


button.addEventListener("click", () => {
    // TimerFunction();
    setInterval('TimerFunction()', 1000);//code to be triggerd after delay time is up with delay
})