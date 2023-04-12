export function declesionOfDays(day){
  if(10<day%100 && day%100<15) return day+" дней"
  else if (day%10===1) return day+" день"
  else if(2<=day%10 && day%10<=4) return day+" дня"
  else return day + " дней"
}

export function declesionOfHotel(hotel){
  if(10<hotel%100 && hotel%100) return " отелей"
  else if (hotel%10===1) return " отель"
  else if(2<=hotel%10 && hotel%10<=4) return " отеля"
  else return " отелей"
}