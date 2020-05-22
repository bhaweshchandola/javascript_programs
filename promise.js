let a  = function(){
    return new Promise(function(resolve, reject){
        temp = true;
        if (temp){
            resolve("completed a")
        }else{
            reject("failed a")
        }
    })
}

let b  = function(message){
    return new Promise(function(resolve, reject){
        temp = true;
        if (temp){
            resolve(message + "completed b")
        }else{
            reject("failed b")
        }
    })
}

a().then(function(result){
    console.log(result);
    return b(result);
}).then(function(res){
    console.log(res);
})