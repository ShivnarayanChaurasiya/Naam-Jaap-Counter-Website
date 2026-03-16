let count = localStorage.getItem("count") || 0;

let history = JSON.parse(localStorage.getItem("history")) || [];

document.getElementById("counter").innerText = count;

function increase(){

count++;

document.getElementById("counter").innerText = count;

localStorage.setItem("count", count);

}

function resetCounter(){

if(count > 0){

let sessionNumber = history.length + 1;

history.push("Session " + sessionNumber + " : " + count);

localStorage.setItem("history", JSON.stringify(history));

}

count = 0;

localStorage.setItem("count", count);

document.getElementById("counter").innerText = count;

}

function showHistory(){

let list = document.getElementById("historyList");

list.innerHTML = "";

history.forEach(item => {

let li = document.createElement("li");

li.textContent = item;

list.appendChild(li);

});

}