const path = require('path')
const multer = require('multer')
//storage upload image
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      let ext = path.extname(file.originalname)
      cb(null, Date.now() + ext)
    }
  })
   
  var upload = multer({ 
      storage: storage,
      fileFilter: function(req, file, callback) {
          if(
              file.mimetype == "image/png" ||
              file.mimetype == "image/jpg"
          ){
              callback(null, true)
          }
          else {
              console.log('Only jpg & png file supported !')
            callback(null, true)
          }
      },
      limits: {
          fileSize: 1024 * 1024 * 2
      }

})

module.exports = upload