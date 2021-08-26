/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

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
console.log(`~ days`, days)
let hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
console.log(`~ hours`, hours)
let mins = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
console.log(`~ mins`, mins)
let secs = Math.floor((countdown % (1000 * 60)) / 1000);
console.log(`~ secs`, secs)

const intervalId= setInterval(()=>{
if(countdown !==1000 ){
    countdown -= 1000;
     console.log(`~ countdown`, countdown);
    days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    console.log(`~ days`, days)
    hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(`~ hours`, hours)
    mins = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    console.log(`~ mins`, mins)
    secs = Math.floor((countdown % (1000 * 60)) / 1000);
    console.log(`~ secs`, secs)

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


