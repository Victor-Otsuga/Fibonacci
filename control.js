
var fibo_a = 1
var fibo_b = 2
var fibo_c = 3
var numero = 0
var title = document.getElementById('txt').innerHTML


function verificar(){
    var input = document.querySelector("#name");
    var numero = input.value
    // alert(texto)

    var fibo_a = 0
    var fibo_b = 1
    var fibo_c = 0
    var confirm = 0
    
    while (fibo_a < numero){


        fibo_c = fibo_a + fibo_b
        console.log(fibo_c)
        if (fibo_c == numero){
            document.getElementById('txt').innerHTML = "✓"
            document.getElementById('txt2').innerHTML = "Faz parte da sequência"
            confirm = 1
            document.getElementById("body").style.backgroundColor = 'green';
        }


        fibo_a = fibo_b+fibo_c
        console.log(fibo_a)
        if (fibo_a == numero){
            document.getElementById('txt').innerHTML = "✓"
            document.getElementById('txt2').innerHTML = "Faz parte da sequência"
            confirm = 1
            document.getElementById("body").style.backgroundColor = 'green';
        }


        fibo_b = fibo_a+fibo_c
        console.log(fibo_b)
         if (fibo_b == numero){
            document.getElementById('txt').innerHTML = "✓"
            document.getElementById('txt2').innerHTML = "Faz parte da sequência"
             confirm = 1
             document.getElementById("body").style.backgroundColor = 'green';
         }

    }

    if (confirm==0){
        document.getElementById('txt').innerHTML = "X"
        document.getElementById('txt2').innerHTML = "Não faz parte da sequência"
        document.getElementById("body").style.backgroundColor = 'darkred';
    }

}