const hasUpper = /[A-Z]/
const hasLower = /[a-z]/
const hasNumber = /[0-9]/
const hasSpecial = /[!@#$%^&*()_+]/

function TestPasswordStrenght(password){
    if(password.lenght >= 8){
        return "password does not meet lenght requirement"
    }
    else if(!hasUpper.test(password)){
        return "password should have atleast one uppercase character"
    }
    else if(!hasLower.test(password)){
        return "password should have at least one lowercase chacter"
    }
    else if(!hasNumber.test(password)){
        return "password should have at least one number"
    }
    else if(!hasSpecial.test(password)){
        return "password should have atleast one special character"
    }
    else{
        return password
    }
}

export default(TestPasswordStrenght)