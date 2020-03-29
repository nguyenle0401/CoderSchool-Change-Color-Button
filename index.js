var x = document.getElementById("Ngbutton");
x.addEventListener("dblclick", function(){
    if(x.style.backgroundColor === "purple"){
        x.style.backgroundColor="green";
    }
    else {
        x.style.backgroundColor ="purple";
    }
});