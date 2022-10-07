let btn = document.querySelector(".btn");
let heading = document.querySelector(".heading")
let checker = true;
btn.addEventListener("click", function(){
    if (checker == true ){
    btn.innerHTML = "Light"
    document.body.style.backgroundColor = "black";
    btn.style.backgroundColor = "rgb(237, 237, 143)";
    btn.style.color = "black" ;
    heading.style.color = "white" ;
    checker = false ;
    console.log(checker);
    }
    else
    if(checker == false ){
        btn.innerHTML = "Dark"
        document.body.style.backgroundColor ="rgb(237, 237, 143)";
        btn.style.backgroundColor = "black";
        btn.style.color = "white" ; 
        heading.style.color = "black" ; 
        checker = true ; 
        console.log(checker);
    }
})