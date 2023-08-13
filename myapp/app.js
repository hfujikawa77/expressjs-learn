const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send('Hello Express world!')
})

// post request
app.post('/', (req,res) =>{
    res.send('Got a POST request')
})

app.put('/user', function(req,res){
    res.send('Got a PUT request at /user')
})

app.delete('/user', (req,res) =>{
    res.send('Got a DELETE request at /user')
})

// 静的ファイルの提供。これでpublicフォルダ内のファイルをロードできる
app.use('/static', express.static('public'))

app.listen(port, ()=>{
    console.log(`Example app listening on port${port}`)
})

