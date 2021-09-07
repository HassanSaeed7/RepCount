let saveEl = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
let historyEl = document.getElementById("history")
let count = 0

function increment() {
    count += 1
    countEL.textContent = count
}

function save() { 
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEL.textContent = 0
}

function reset() {
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(saveEl.textContent))
    historyEl.appendChild(li)    
    count = 0
    saveEl.textContent = count
}

function clear() {
    while(historyEl.hasChildNodes(true)){
        historyEl.removeChild(li);
    } 
}