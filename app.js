const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const giveAway=document.querySelector('.giveaway')
  const deadLine=document.querySelector('.deadline')
  const items=document.querySelectorAll('.deadline-format h4')

  let futureDate= new Date(2021,05,11,13,07)
  const futureWeekDay=weekdays[futureDate.getDay()]
  const futureDay=futureDate.getDate()
  const futureMonth=months[futureDate.getMonth()]
  const futureYear= futureDate.getFullYear()
  const futureHour=futureDate.getHours()
  const futureMinute=futureDate.getMinutes()
  if(futureHour>=12){
    giveAway.textContent=`Giveaway Ends on ${futureWeekDay}, ${futureDay} ${futureMonth} ${futureMonth}, ${futureHour}:${futureMinute}pm`
  }else{
    giveAway.textContent=`Giveaway Ends on ${futureWeekDay}, ${futureDay} ${futureMonth} ${futureMonth}, ${futureHour}:${futureMinute}0am`
  }
  
  ///convert future date to miliseconds
  function getRemainingTime(){
    const futureTime=futureDate.getTime()
    const today=new Date().getTime()
    let leftTime=futureTime-today ///this will be milliseconds
    if(leftTime<=0){
      clearInterval(countDown)
      items.forEach(item=>item.textContent='🔥')
    }
    let oneDay=(24*60*60*1000)///oneday mili seconds and so on
    let oneHour=(60*60*1000)
    let oneMinute=(60*1000)
    let oneSecond=(1000)
    let days=Math.floor(leftTime/oneDay)///how manys left 
    items[0].textContent=days.toString().length>1?days:'0'+days///assign it to html
    leftTime-=days*oneDay///left time is milliseconds so minus days in milliseconds to find the rest
    let hours=Math.floor(leftTime/oneHour)///to find out total hours
    items[1].textContent=hours.toString().length>1?hours:'0'+hours///assign it to html
    leftTime-=hours*oneHour
    let minutes=Math.floor(leftTime/oneMinute)
    items[2].textContent=minutes.toString().length>1?minutes:'0'+minutes
    leftTime-=minutes*oneMinute
    let seconds=Math.floor(leftTime/oneSecond)
    items[3].textContent=seconds.toString().length>1?seconds:'0'+seconds
    
  }
 let countDown=setInterval(getRemainingTime,1000)
 getRemainingTime()
  