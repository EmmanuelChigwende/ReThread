const hasEmailFormat  = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


function  TestEmail(email){
    const error = []

    if(!hasEmailFormat.test(email)){
        error.push("wrong email format please check format")
    }

    if(error.length === 0){
        return true
    }
    else{
        return error
    }
}

export default TestEmail