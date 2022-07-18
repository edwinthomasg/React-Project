const bcrypt = require('bcrypt')

const fun = async() => {
    const hashed = await bcrypt.hash('password',10,(err, data) => console.log("hashed : ",data))
    return hashed
}
const res = fun()

