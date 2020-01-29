const title = document.querySelector('html');
const text = title.querySelector('h1');
const cards = document.querySelectorAll('.content');
// How far should the shadow go at maximum
const walk = 15;
let currentCard = 0;
cards[0].classList.add('active');

// function shadow(e) {
//   const {offsetWidth: width, offsetHeight: height} = title;
//   let {offsetX: x, offsetY: y} = e;
//
//   // this: the thing it listens on
//   // target: the thing youre hovering on (can be other elements)
//   if (this != e.target) {
//     x += e.target.offsetLeft;
//     y += e.target.offsetTop;
//   }
//
//   const xWalk = (x / width * walk) - (walk/2);
//   const yWalk = (y / height * walk) - (walk/2);
//
//   text.style.textShadow = `
//     ${xWalk}px ${yWalk}px 0 blue,
//     ${-xWalk}px ${yWalk}px 0 crimson,
//     ${xWalk}px ${-yWalk}px 0 purple,
//     ${-xWalk}px ${-yWalk}px 0 limegreen`;
// }

// Append to window and listen for keyup.
function allowArrowKeysToScroll(e) {
  cards[currentCard].classList.remove('active');
  if (e.keyCode == 37) {
    if (currentCard == 0) {
      currentCard = cards.length - 1;
    }
    else {
      currentCard --;
    }
  }
  else if (e.keyCode == 39) {
    if (currentCard == cards.length - 1) {
      currentCard = 0;
    }
    else {
      currentCard ++;
    }
  }
  else return;
  cards[currentCard].classList.add('active');
  $('html,body').animate({
      scrollTop: $(`#card${currentCard}`).offset().top},
      'slow');
}

//title.addEventListener('mousemove', shadow);
cards.forEach((card, i) => {
  card.setAttribute('id', `card${i}`)
});
window.addEventListener('keyup', allowArrowKeysToScroll);

/** JQuery Animated ScrollTo on click.
* http://jsfiddle.net/ryXFt/3/
*/
$(".center-con").click(function() {
    $('html,body').animate({
        scrollTop: $(".subtitle").offset().top},
        'slow');
});
