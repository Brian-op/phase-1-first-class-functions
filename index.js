function receivesAFunction (callback){
    callback();
}
 function returnsANamedFunction(){
    return function namedFunction(){
       return " A named function"
    }

 }
 function returnsAnAnonymousFunction(){
    return function (){
        return "Anonymous function";
    }
    
 }
 