const ref={
    valueDays:  document.querySelector('.value[data-value="days"]'),
    valueHours:  document.querySelector('.value[data-value="hours"]'),
    valueMins: document.querySelector('.value[data-value="mins"]'),
    valueSecs:  document.querySelector('.value[data-value="secs"]'),
};

const dateNow = new Date();
// const dataGet = (prompt('Введите дату в формате: year, month, date, hours, minutes, seconds, ms до которой надо посчитать время', '2021, 8, 1, 0, 0, 0, 0'));
// const targetData = new Date(...(dataGet.split(',')));
const targetData = new Date('Sep 1, 2021');

const time = targetData.getTime() -  dateNow.getTime();

let countdown = time;

const intervalId= setInterval(()=>{
    console.log(`targetData`, targetData);
if(countdown !==1000 ){
    const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((countdown % (1000 * 60)) / 1000);

    countdown -= 1000;
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

