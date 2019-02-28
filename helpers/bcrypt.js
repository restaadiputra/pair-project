const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(8)

function hashPassword(password) {
    return bcrypt.hashSync(password, salt)
}

function decrypt(plainpassword, hash){
    return bcrypt.compareSync(plainpassword, hash)

}

module.exports = {
    hashPassword,
    decrypt
}