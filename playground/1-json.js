const fs = require('fs')

// const book = {
//     title: 'Gods and Heroes',
//     author: 'Korwin Briggs'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const TestObject = JSON.parse( fs.readFileSync('1-json-test.json').toString() )
TestObject.name = 'Korwin'
TestObject.age = 31
fs.writeFileSync('1-json-test.json', JSON.stringify(TestObject) )
console.log(TestObject)