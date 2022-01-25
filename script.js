cross= true;
score= 0;
audio= new Audio('music.mp3');
audiogo= new Audio('gameover.mp3');

setTimeout(() => {
        audio.play();
},1000);
document.onkeydown= function(e){
    console.log(e.keyCode);
    if(e.keyCode== 38){
        dino= document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino');
        } ,700);

    }
    if(e.keyCode== 39){
        dino= document.querySelector('.dino');
        dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left= dx + 100+ 'px';
        
    }
    if(e.keyCode== 37){
        dino= document.querySelector('.dino');
        dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left= dx - 100+ 'px';

    }
}

setInterval(() => {
    dino=document.querySelector('.dino');
    go=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy= parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    
    diffx= Math.abs(dx-ox);
    diffy= Math.abs(dy-oy);
    console.log(diffx,diffy)
    if(diffx < 70 && diffy < 50){
        obstacle.classList.remove('obstacles');
        go.classList.add('.gameOver');
        go.style.visibility= 'visible';
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
            audio.pause();
        },1000);
    }
    else if( cross && diffx< 100){
        score++;
        update(score);
        cross= false;
        setTimeout(()=>{
            cross=true;
        },1000);
        setTimeout(()=>{
            ad= parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newad= ad- 0.1 +'s';
            obstacle.style.animationDuration= newad;

        },500);
        
    }

}, 100);

function update(score){
    scoreCount.innerHTML= "Your Score is:" + score;
}