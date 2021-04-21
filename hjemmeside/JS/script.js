var overlay = document.querySelector('.guide-overlay');
var container = document.querySelector('.card-guide-container');
var cards = document.querySelectorAll('.card-guide');

var exit = document.getElementById('exit');
var prev = document.getElementById('prev');
var next = document.getElementById('next');

var index = 0;

cards[index].classList.toggle("card-active");


prev.onclick = () => {
    if (index > 0) {
        changeCard(-1);
    }

}

next.onclick = () => {
    if (index < cards.length - 1)
        changeCard(1);
}

exit.onclick = () => {
    overlay.style.display = 'none'
}




function changeCard(i) {
    cards[index].classList.toggle("card-active");
    index = index + i;
    move = index * (502 + 32);
    container.style.transform = 'translateX(' + -move + 'px)';
    cards[index].classList.toggle("card-active");
}



