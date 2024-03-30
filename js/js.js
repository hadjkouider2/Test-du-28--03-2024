let up = document.querySelector("#up")
let down = document.querySelector("#down")

let cpt = 0
up.onclick = function(){
    let handler =  setInterval(function () {
        if(cpt==10){
            clearInterval(handler)
        }
        box.innerHTML = cpt
        cpt++
   let style = document.getElementById('box').style;
       if (style.backgroundColor == "red") {
          style.backgroundColor = "green";
       } else {
          style.backgroundColor = "red";
       }


    },1000)
} 

down.onclick = function(){
    let handler =  setInterval(function () {
        if(cpt==0){
            clearInterval(handler)
        }
        box.innerHTML = cpt
        cpt--
    let style = document.getElementById('box').style;
       if (style.backgroundColor == "red") {
          style.backgroundColor = "green";
       } else {
          style.backgroundColor = "red";
       }
        
    },1000)

}