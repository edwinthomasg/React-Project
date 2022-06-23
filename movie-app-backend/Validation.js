const validateUrl = (url,key) => {
    if(key == 1){
        return url.match(/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/) ? true : `Invalid type of a url for an image`
    }
    else if(key == 2)
    {
        return url.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/) ? true : `Invalid youtube link`
    }
}
const validateName = (name,key) => {
    if(key == 1)
    {
        return name.match(/^[a-zA-Z ]+$/) ? true : `Actor name should contain only alphabets`
    }
    else if(key == 2)
    {
        return name.match(/^[a-zA-Z ]+$/) ? true : `Director name should contain only alphabets`
    }
}
const validateDate = (date,key) => {
    console.log("todays : ",(Date.now()))
    console.log("passes : ",date)
    if(key == 1)
    {
        return Date(Date.now()) >= Date(date) ? true : `The date has been expired from today`
    }
    else if(key == 2)
    {
        return Date(Date.now()) >= Date(date) ? true : `The date has been expired from today`
    }
}
module.exports = {
    validateUrl,
    validateName,
    validateDate
}