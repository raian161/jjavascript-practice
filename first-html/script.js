const body = document.querySelector('body')
const btn = document.querySelector('#btn')

const randomnumber = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const colors = ['red', 'green', 'lightblue', 'coral', 'lime', 'white']

btn.addEventListener('click', function () {
    const randomIndex = randomnumber(0, colors.length - 1)
    body.style.backgroundColor = colors[randomIndex]
})