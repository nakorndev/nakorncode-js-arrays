const fruits = ['apple']
console.log(fruits, fruits.length)

const input = prompt('Please input more fruit')

fruits.push(input)
console.log(fruits, fruits.length)

const update = prompt('Please update for index 0')

fruits[0] = update
console.log(fruits, fruits.length)
