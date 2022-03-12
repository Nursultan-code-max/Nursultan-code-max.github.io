const main=document.querySelector(".main"),
      div=document.querySelectorAll('.div'),
      name1=document.querySelector('.name1'),
      name2=document.querySelector('.name2'),
      points1=document.querySelector('.points1'),
      points2=document.querySelector('.points2'),
      turn=document.querySelector('.turn'),
      turn2=document.querySelector('.turn2');
const player1=prompt("player1");
const player2=prompt("player2");

name1.textContent=player1;
name2.textContent=player2;

let sum=0;
let sum2=0;

let pl1sum=0;
let pl2sum=0;

function clear(){
    div[0].textContent="";
    div[1].textContent="";
    div[2].textContent="";
    div[3].textContent="";
    div[4].textContent="";
    div[5].textContent="";
    div[6].textContent="";
    div[7].textContent="";
    div[8].textContent="";
    sum2++; 
    if(sum2%2!==0){
        turn.textContent="Player 2`s turn";
        turn2.classList.add('turnpl2');
        turn2.classList.remove('turnpl1');
        sum=1;
    }
    if(sum2%2===0){
        turn.textContent="Player 1`s turn";
        turn2.classList.add('turnpl1');
        turn2.classList.remove('turnpl2');
        sum=0;
    }
    console.log(sum2);  
}

function set(){
    setTimeout(main.addEventListener('click',game),3000);
}
const game=(e)=>{
    const target=e.target;
    console.log(target);
    if(target&& target.classList.contains('div')){
        if(sum%2===0){
            if(target.textContent==="" && target.textContent!=="X" ){
            target.textContent="X"; 
            turn.textContent="Player 2`s turn";
            turn2.classList.add('turnpl2');
            turn2.classList.remove('turnpl1');
            sum++;
            }
        }
        if(sum%2!==0){
            if(target.textContent==="" && target.textContent!=="O"){
                target.textContent="O"; 
                turn.textContent="Player 1`s turn";
                turn2.classList.add('turnpl1');
                turn2.classList.remove('turnpl2');
                sum++;
            } 
        }
         console.log(sum);
        if(div[0].textContent==='X' || div[0].textContent==='O' || div[3].textContent==='O' || div[3].textContent==="X"){
            if(div[0].textContent===div[1].textContent && div[0].textContent===div[2].textContent && div[0].textContent!==""){
                main.removeEventListener('click',game);
                if(div[0].textContent==="X"){
                    pl1sum+=1;
                    points1.textContent=pl1sum;
                    turn.textContent="Player 1 won";
                    turn2.classList.add('turnpl1');
                turn2.classList.remove('turnpl2');
                }
                if(div[0].textContent==="O"){
                    pl2sum+=1;
                    points2.textContent=pl2sum;
                    turn.textContent="Player 2 won";
                    turn2.classList.add('turnpl2');
                    turn2.classList.remove('turnpl1');
                }
                setTimeout(clear,3000);
                setTimeout(set,3000);
                
            }   
            if(div[0].textContent===div[3].textContent && div[0].textContent===div[6].textContent && div[0].textContent!==''){
                main.removeEventListener('click',game);
                if(div[0].textContent==="X"){
                    pl1sum+=1;
                    points1.textContent=pl1sum;
                    turn.textContent="Player 1 won";
                    turn2.classList.add('turnpl1');
                turn2.classList.remove('turnpl2');
                }
                if(div[0].textContent==="O"){
                    pl2sum+=1;
                    points2.textContent=pl2sum;
                    turn.textContent="Player 2 won";
                    turn2.classList.add('turnpl2');
                    turn2.classList.remove('turnpl1');
                }
                setTimeout(clear,3000);
                setTimeout(set,3000);
            }
            if(div[3].textContent===div[4].textContent && div[3].textContent===div[5].textContent &&  div[3].textContent!==''){
                main.removeEventListener('click',game);
                if(div[3].textContent==="X"){
                    pl1sum+=1;
                    points1.textContent=pl1sum;
                    turn.textContent="Player 1 won";
                    turn2.classList.add('turnpl1');
                turn2.classList.remove('turnpl2');
                }
                if(div[3].textContent==="O"){
                    pl2sum+=1;
                    points2.textContent=pl2sum;
                    turn.textContent="Player 2 won";
                    turn2.classList.add('turnpl2');
                    turn2.classList.remove('turnpl1');
                }
                setTimeout(clear,3000);
                setTimeout(set,3000);
            }
            if(div[1].textContent===div[4].textContent && div[1].textContent===div[7].textContent &&  div[1].textContent!==''){
                main.removeEventListener('click',game);
                if(div[1].textContent==="X"){
                    pl1sum+=1;
                    points1.textContent=pl1sum;
                    turn.textContent="Player 1 won";
                    turn2.classList.add('turnpl1');
                turn2.classList.remove('turnpl2');
                }
                if(div[1].textContent==="O"){
                    pl2sum+=1;
                    points2.textContent=pl2sum;
                    turn.textContent="Player 2 won";
                    turn2.classList.add('turnpl2');
                    turn2.classList.remove('turnpl1');
                }
                setTimeout(clear,3000);
                setTimeout(set,3000);
            }
            if(div[2].textContent===div[5].textContent && div[2].textContent===div[8].textContent &&  div[2].textContent!==''){
                main.removeEventListener('click',game);
                if(div[2].textContent==="X"){
                    pl1sum+=1;
                    points1.textContent=pl1sum;
                    turn.textContent="Player 1 won";
                    turn2.classList.add('turnpl1');
                turn2.classList.remove('turnpl2');
                }
                if(div[2].textContent==="O"){
                    pl2sum+=1;
                    points2.textContent=pl2sum;
                    turn.textContent="Player 2 won";
                    turn2.classList.add('turnpl2');
                    turn2.classList.remove('turnpl1');
                }
                setTimeout(clear,3000);
                setTimeout(set,3000);
            }
            if(div[6].textContent===div[7].textContent && div[6].textContent===div[8].textContent &&  div[6].textContent!==''){
                main.removeEventListener('click',game);
                if(div[6].textContent==="X"){
                    pl1sum+=1;
                    points1.textContent=pl1sum;
                    turn.textContent="Player 1 won";
                    turn2.classList.add('turnpl1');
                turn2.classList.remove('turnpl2');
                }
                if(div[6].textContent==="O"){
                    pl2sum+=1;
                    points2.textContent=pl2sum;
                    turn.textContent="Player 2 won";
                    turn2.classList.add('turnpl2');
                    turn2.classList.remove('turnpl1');
                }
                setTimeout(clear,3000);
                setTimeout(set,3000);
            }
            if(div[0].textContent===div[4].textContent && div[0].textContent===div[8].textContent &&  div[0].textContent!==''){
                main.removeEventListener('click',game);
                if(div[0].textContent==="X"){
                    pl1sum+=1;
                    points1.textContent=pl1sum;
                    turn.textContent="Player 1 won";
                    turn2.classList.add('turnpl1');
                turn2.classList.remove('turnpl2');
                }
                if(div[0].textContent==="O"){
                    pl2sum+=1;
                    points2.textContent=pl2sum;
                    turn.textContent="Player 2 won";
                    turn2.classList.add('turnpl2');
                    turn2.classList.remove('turnpl1');
                }
                setTimeout(clear,3000);
                setTimeout(set,3000);
            }
            if(div[2].textContent===div[4].textContent && div[2].textContent===div[6].textContent &&  div[2].textContent!==''){
                main.removeEventListener('click',game);
                if(div[2].textContent==="X"){
                    pl1sum+=1;
                    points1.textContent=pl1sum;
                    turn.textContent="Player 1 won";
                    turn2.classList.add('turnpl1');
                turn2.classList.remove('turnpl2');
                }
                if(div[2].textContent==="O"){
                    pl2sum+=1;
                    points2.textContent=pl2sum;
                    turn.textContent="Player 2 won";
                    turn2.classList.add('turnpl2');
                    turn2.classList.remove('turnpl1');
                }
                setTimeout(clear,3000);
                setTimeout(set,3000);
            }
            if(div[0].textContent!=="" && div[1].textContent!=="" && div[2].textContent!=="" && div[3].textContent!=="" &&div[4].textContent!=="" && div[5].textContent!=="" && div[6].textContent!=="" && div[7].textContent!=="" && div[8].textContent!==""){
                if( turn.textContent!=="Player 1 won" && turn.textContent!=="Player 2 won" ){
                    turn.textContent="Draw";
                    turn2.classList.remove('turnpl2');
                turn2.classList.remove('turnpl1');
                turn2.classList.add('turn2');
                main.removeEventListener('click',game);
                setTimeout(clear,3000);
                setTimeout(set,3000);
                }
            }
        }
        
    }
};


main.addEventListener('click',game);


