const textAreaE1= document.getElementById("textarea");

const totalCounterE1= document.getElementById("total_counter");
const remainingCounterE1 = document.getElementById("remaining_counter");
textAreaE1.addEventListener("keyup", ()=> {
    updateCounter();
});

updateCounter();

function updateCounter(){
    totalCounterE1.innerText= textAreaE1.value.length
    
    remainingCounterE1.innerText = textAreaE1.getAttribute("maxlength")- textAreaE1.value.length;
}