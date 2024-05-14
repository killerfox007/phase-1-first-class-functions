function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
     return function running(){
        'words'
     }
}

function returnsAnAnonymousFunction(){
    return function(){
        'words'
    }
}