let count = 0;

function cardCounter(card){
  var addOne = [2, 3, 4, 5, 6];
  var remain = [7, 8, 9];
  var subtractOne = [10, "J", "Q", "K", "A"];
  
  if(addOne.includes(card)){
    count +=1;
  }else if(remain.includes(card)){
    count = count;
  }else if(subtractOne.includes(card)){
    count -=1;
  }


  if(count > 0){
    return `${count} Bet`;
  }else if(count <= 0){
    return `${count} Hold`;
  }
}

console.log(cardCounter(2));