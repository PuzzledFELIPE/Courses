const lunches = ["Apple", "Pear"];

 

function addLunchToEnd(arr, str){

  arr.push(str);

  console.log(`${str} added to the end of the lunch menu.`)

  return arr;

}

 

function addLunchToStart(arr, str){

  arr.unshift(str);

  console.log(`${str} added to the start of the lunch menu.`)

  return arr;

}

 

function removeLastLunch(arr){

  const removed = arr.pop();

  if(arr.length === 0){

    console.log("No lunches to remove.");

  }else{

 

  console.log(`${removed} removed from the end of the lunch menu.`)

  return arr;

  }

}

 

function removeFirstLunch(arr){

  const removed = arr.shift();

  if(arr.length === 0){

    console.log("No lunches to remove.");

  }else{

  arr.unshift();

  console.log(`${removed} removed from the start of the lunch menu.`)

  return arr;

  }

}

 

function getRandomLunch(arr){

  const random = arr[Math.floor(Math.random() * arr.length)];

  if(arr.length === 0){

    console.log("No lunches available.");

  }else{

 

  console.log(`Randomly selected lunch: ${random}`)

  }

}

 

function showLunchMenu(arr){

  if(arr.length === 0){

    console.log("The menu is empty.");

  }

 

  const output = arr.join(", ")

  console.log(`Menu items: ${output}`)

}

 

console.log(showLunchMenu(lunches));