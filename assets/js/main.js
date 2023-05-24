const flag = document.querySelector(".flag");
const btn = document.querySelector("button");
btn.addEventListener("click", game);
function game() {
  btn.remove();

  return fetch('https://restcountries.com/v3.1/all').then(resp => resp.json()).then(resp => {
    flag.innerHTML = ` <img src='${resp[Math.floor(Math.random() * resp.length)].flags.png}' alt=""> 
     <input type="text" class="mb-3 mt-3 p-1 w-50">
     <button onclick="success()" class="w-50 btn btn-outline-danger">success</button>`
    const name = resp[Math.floor(Math.random() * resp.length)].name.common;
    console.log(name);
  });
}

function success() {

  fetch('https://restcountries.com/v3.1/all').then(resp => resp.json()).then(resp => {
    console.log(name);
    var inp = document.querySelector("input")
    if (!(inp.value == name)) {
      alert("false"); 
      flag.innerHTML = ` <img src='${resp[Math.floor(Math.random() * resp.length)].flags.png}' alt="">
         <input type="text" class="mb-3 mt-3 p-2 w-50 align-items-center">
         <button onclick="success(this)" class="w-50 btn btn-outline-danger">TESDIQLE</button>`
    }
     
    else {
      alert("true"); 
     
    }
  })
}