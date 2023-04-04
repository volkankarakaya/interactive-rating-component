const voteCard = document.querySelector(".vote-card")
const closingCard = document.querySelector(".closing-card")
const pointNumbers = document.querySelectorAll(".point-number")
const submitBtn = document.querySelector("button");
const selectionMessage = document.querySelector(".selection-message")

let activePoint;

pointNumbers.forEach(point =>{
    point.addEventListener("click", makeActive)
})

function makeActive(e){
    pointNumbers.forEach(point => {
        point.classList.remove("active")
    })
    const target = e.target.closest(".point-number");
    target.classList.add("active");
    activePoint = target.innerText
    // console.log(activePoint)
}


submitBtn.addEventListener("click", ()=>{
    voteCard.classList.add("hide");
    closingCard.classList.add("show");
    selectionMessage.innerText = `You selected ${activePoint} out of 5`


})