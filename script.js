let input = document.querySelector("input")
let buttons = document.querySelector(".buttons")
let calculate = document.querySelector(".calculate")
let ce = document.querySelector(".clearone")
let operators = ["/", "*", "+", "-", "."]
buttons.onclick = function(e){
    let target = e.target
    let value = ""
    if(target.classList.contains("number")){
        if(input.value == "0"){
            input.value = value
        }
        input.value = input.value + target.innerHTML 
    }
    if(target.classList.contains("dot")){
        value = target.innerHTML
        let expression = input.value
        let lastChar = expression[expression.length -1]
        if(operators.indexOf(lastChar) !== -1){
            expression = expression.replace (/.$/, value)
            input.value = expression
        }
        else{
            input.value += value
        }
    }
    else if(target.classList.contains("calculate")){
        if(input.value === "error"){
            input.value  = "0"
        }
        let result = eval( input.value )
        if(result === Infinity){
            input.value = "error"
        }
        else{
            input.value = result
        }
        // if(result === undefined){
        //     input.value = "error"
        // }
        // else{
        //     input.value = result
        // }
    }
    else if(target.classList.contains("clearone")){
        let expression = input.value
        expression = expression.substring(0, expression.length -1)
        input.value = expression
    }
    else if(target.classList.contains("clear")){
        input.value = "0"
    }
}
document.addEventListener("keydown", function(e){
    if(e.code == "Numpad1" || e.code == "Digit1"){
        input.value += 1
    }
})