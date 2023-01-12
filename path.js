const path = require('path')

const filelocation = path.join(__dirname, 'app.js')

const fileName = path.basename(filelocation)

const fileExt = path.extname(fileName)

console.log(fileExt)