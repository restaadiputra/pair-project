const express = require('express')
const app     = express()
const routes  = require('./routes')
const session = require('express-session')
var multer = require('multer')
const ejs = require('ejs')
const path = require('path')

const sess = {
  key: 'user_sid',
  secret: '343ji43j4n3jn4jk3n',
  cookie: {}
}
// storage engine
const storage = multer.diskStorage({
  destination: './public/upload',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

// init upload
const upload = multer({
  storage: storage
}).single('myImage')

// const fileUpload = multer({storage});

app.use('/*', upload);

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'))
app.use(session(sess))



app.use('/', routes)
app.listen(3000, () => {
  console.log('Running at http://localhost:3000')
})