/* button listener and toggles class  */

const allbutton = document.querySelectorAll("button");
allbutton.forEach((button)=>{
    button.addEventListener("click",()=>{
        button.classList.toggle("clicked");
    });
});


/* slider recorder and displayer  */
const dis = document.querySelector("p");
const slider = document.querySelector(".slider");
slider.addEventListener("input",()=>{
    dis.textContent = slider.value ;
    setter();
});

const canvas = document.querySelector(".canvas");

function setter(){
    canvas.textContent = '';
    
for(let i=1;i<=(slider.value*slider.value) ;++i){
    const j = document.createElement("div");
    j.classList.add("frame");
    let boxes = slider.value;
    let width =  680 / boxes ; 
    let height = 680 /boxes ;
  
    j.setAttribute("style",`width : ${width}px ; height : ${height}px;margin : 0px ; padding : 0px;`);
    j.addEventListener("mouseover",()=>{
        j.classList.add("back");
    });
    canvas.appendChild(j);

}
}


const borderbtn = document.querySelector(".border");
borderbtn.addEventListener("click",addborder);

function addborder(){
                let x = document.querySelectorAll(".frame");
                let xarr = Array.from(x);
                xarr.forEach((div)=>{
                    div.classList.toggle("lboxes");

                });
}

const clear = document.querySelector(".clear");
clear.addEventListener("click",()=>{
    setter();
});
