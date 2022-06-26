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
    else if(key == 3)
    {
        return name.match(/^[a-zA-Z ]+$/) ? true : `User name should contain only alphabets`
    }
}
const validateEmail = (email) => {
    return email.match(/^([a-z]+[\.-\d]*)@$/) ? (email.match(/^([a-z-]+)\.([a-z\-]{2,8})(\.[a-z]{2,8})?$/)?true : `Username followed by domain name in lowercased alphabets with extension`) : `Username should starts with lowercase alphabets followed by digits if any`
}
const validateConfirmPassword = (password,confirmPassword) => {
    return (password == confirmPassword) ? true : `Both password and confirm password must match`
}
module.exports = {
    validateUrl,
    validateName,
    validateEmail,
    validateConfirmPassword
}

