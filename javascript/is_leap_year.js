let year = 2000;

const isLeapYear = year =>{
  if(year % 4 == 0){
    if(year % 100 == 0){
      if(year % 400 == 0){
        return `${year} is a leap year.`;
      }

      return `${year} is not a leap year.`;
    }

    return `${year} is a leap year.`;
  }

  return `${year} is not a leap year.`;
}

const result = isLeapYear(year);
console.log(result);