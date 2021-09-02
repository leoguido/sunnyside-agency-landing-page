const learnButton1 = document.querySelector('.transform__learn');
const underline1 = document.querySelector('.transform__underline');
const learnButton2 = document.querySelector('.stand__learn');
const underline2 = document.querySelector('.stand__underline');

learnButton1.addEventListener('mouseover', turnItYellow);
learnButton1.addEventListener('mouseout', turnItTransparent);
learnButton2.addEventListener('mouseover', turnItRed);
learnButton2.addEventListener('mouseout', turnItSoftRed);

function turnItYellow(){
    underline1.classList.replace('transform__underline','transform__underline--active');
}
function turnItTransparent(){
    underline1.classList.replace('transform__underline--active', 'transform__underline' );
}
function turnItRed(){
    underline2.classList.replace('stand__underline','stand__underline--active');
}
function turnItSoftRed(){
    underline2.classList.replace('stand__underline--active','stand__underline');
}


const arrow = document.querySelector('#arrow');

function centerArrow(){
    let screenWidth = window.innerWidth;
    let centering = screenWidth/2 - 30;

    arrow.style.left = centering+'px';
}

setInterval(centerArrow, 10);