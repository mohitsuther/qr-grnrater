let input = document.querySelector("#in");
let anker = document.querySelector("#anker");
 document.getElementById("movebtn").addEventListener('click',()=>{
    
    if(input.value.length > 0){
        anker.href = "main.html";

    }
    else{
        input.classList.add("animate");
        setTimeout(()=>{
            
            input.classList.remove("animate");
        },1000)
    }
})