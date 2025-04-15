let myButton = document.getElementById("myBtn")


window.onscroll=function() {scroll ()}

function scroll (){
    if(document.documentElement.scrollTop>20 ){ 
        myButton.style.display="block"
    }else{
        myButton.style.display="none"
    }
}

function ToTop (){
    document.documentElement.scrollTop=0
}

