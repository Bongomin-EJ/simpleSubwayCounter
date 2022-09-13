let count = 0
let countEl = document.getElementById('count-el')
let entryEl = document.getElementById('entry-el')


const Increment = () => {
  count < 50 ? pushUp() : Terminator()
}

const Decrement = () => {
  count > 0 ? popDown() : noOperation()
}

const Terminator = () => {
  count > 0 ? saver() : noOperation()
}

const pushUp = () => {
count += 1
countEl.textContent = count
countEl.style.color = "teal"
}

const  popDown = () => {
  count -= 1
  countEl.textContent = count
  countEl.style.color = "maroon"
}

const noOperation = () => {
  countEl.textContent = 0 
}

const saver = () => {
  entryEl.textContent += "-" + count
  count = 0
  countEl.textContent = count
  countEl.style.color = "black" 
}

