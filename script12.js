
const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard,secondCard;


function flipCard(){
    if (lockBoard) return // to escape the function while two unmatching cards are still flipped
    if (this===firstCard) return // to escape the function in case the first card was double clicked
    this.classList.add('flip');
    if (!hasFlippedCard){
        //first click
        hasFlippedCard = true;
        firstCard = this;
    } else{
    //second click
    hasFlippedCard=false;
    secondCard=this;
    
            
        //do cards match?
        if(firstCard.dataset.picname===secondCard.dataset.picname){
            //they match
            firstCard.removeEventListener('click',flipCard);
            secondCard.removeEventListener('click',flipCard);
        }
        else{
        //not a match
        lockBoard=true; 
        setTimeout(()=>{
              
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
        
        },1500);
       }
    }   
}   


function resetBoard(){ 
    //variables reset to their original state after two unmtching cards have been flipped
    hasFlippedCard = false;
    lockBoard =  false;
    firstCard = null;
    secondCard = null;
}

(function shuffle(){
    //immendiately executes to generate a random int between 0 and 11 and allocates it to each card
    cards.forEach(card=>{
       let randomPos = Math.floor(Math.random()*12);
      card.style.order = randomPos;
      screen.orientation.lock('landscape');
  });
 })()

cards.forEach(card => card.addEventListener('click', flipCard));