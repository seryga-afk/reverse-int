module.exports = function reverse (n) {
    n = parseInt((String(n).split('').reverse().join('')))
    return n
}
