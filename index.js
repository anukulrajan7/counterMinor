const  countContainer = document.getElementById('countCont');
let sub = ()=>{
    let value = parseInt(countContainer.innerText)
    value = value -1;
    countContainer.innerText = value;
}
let add = ()=>{
    let value = parseInt(countContainer.innerText);
    value = value +1;
    countContainer.innerText = value;
}