//An inside function will remember the scope
function printNumbers(){
    var i;
    for (i=0; i<10; i++){
        function eventualPrint(n) {
            setTimeout(function(){
                console.log(n)
            }, 100)
        }
        eventualPrint(i)
    }
}

printNumbers()

//let changes everything
function printNumbers2(){
    for (let i=0; i<10; i++){
        setTimeout(function(){
            console.log(i)
        }, 100)
    }
}

printNumbers2()