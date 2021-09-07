let saveEl = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEL.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    count = 0
    countStr = 0
}
