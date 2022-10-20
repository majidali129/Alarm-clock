let inputTime = document.getElementById("alarmTime");
let btn = document.getElementById("alarmBtn");
let alarmTune = new Audio("alarm.mp3");
// alarmTune.play()

function setAlarm(e){
    // getting input date 
    let inputTime = document.getElementById("alarmTime");
    // setting user input value 
    let userTime = new Date(inputTime.value);
    // actual date according to machine 
    let actualDate = new Date();
    // setting time to play alarm 
    let alarmTimeDate = userTime - actualDate;

    // validating the time to set alarm 
    if(alarmTimeDate>=0){
        setTimeout(() => {
            alarmTune.play();

        }, alarmTimeDate);
    }
    
    // console.log(alarmTimeDate)
    // console.log(actualDate)
    // console.log(userTime)
    e.preventDefault();
}

btn.addEventListener("click",setAlarm);


