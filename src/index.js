
function reverse() {
    let number = document.querySelector('#inp').value;
    number = parseInt((String(number).split('').reverse().join('')))
    document.querySelector('.result').innerHTML = number;
}
