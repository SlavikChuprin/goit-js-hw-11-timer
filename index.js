const ref={
    valueDays:  document.querySelector('.value[data-value="days"]'),
    valueHours:  document.querySelector('.value[data-value="hours"]'),
    valueMins: document.querySelector('.value[data-value="mins"]'),
    valueSecs:  document.querySelector('.value[data-value="secs"]'),
};

const dateNow = new Date();
const dataGet = (prompt('Введите дату в формате: year, month, date, hours, minutes, seconds, ms до которой надо посчитать время', '2021, 8, 1, 0, 0, 0, 0'));
const dateSet = new Date(...(dataGet.split(',')));

const time = dateSet.getTime() -  dateNow.getTime();


let countdown = time;

console.log(`~ countdown`, countdown);
let days = Math.floor(countdown / (1000 * 60 * 60 * 24));

let hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

let mins = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));

let secs = Math.floor((countdown % (1000 * 60)) / 1000);


const intervalId= setInterval(()=>{
if(countdown !==1000 ){
    countdown -= 1000;
     
    days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    
    hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    mins = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    
    secs = Math.floor((countdown % (1000 * 60)) / 1000);
   

    ref.valueDays.textContent = padStart(days);
    ref.valueHours.textContent = padStart(hours);
    ref.valueMins.textContent= padStart(mins);
    ref.valueSecs.textContent= padStart(secs);

return;
    };
     clearInterval(intervalId);
} , 1000 );
 
function padStart(a) {
  return  String(a).padStart(2,"0");
};

function padStartDay(a) {
 const day = String(a);
 if(day.length<3){
 return day.padStart(2,"0");
} else {
   return day.padStart(day.length);    
};
}


