const express = require('express') 
const hello_word = express()
hello_word.get('/', (req, res) => res.send('Hello World!')) 
hello_word.listen (8084, () => console.log(' server are ready'))