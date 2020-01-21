const title = document.querySelector('html');
const text = title.querySelector('h1');
// How far should the shadow go at maximum
const walk = 15;

function shadow(e) {
  const {offsetWidth: width, offsetHeight: height} = title;
  let {offsetX: x, offsetY: y} = e;

  // this: the thing it listens on
  // target: the thing youre hovering on (can be other elements)
  if (this != e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = (x / width * walk) - (walk/2);
  const yWalk = (y / height * walk) - (walk/2);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 blue,
    ${-xWalk}px ${yWalk}px 0 crimson,
    ${xWalk}px ${-yWalk}px 0 purple,
    ${-xWalk}px ${-yWalk}px 0 limegreen`;

  console.log(x, y);

}

title.addEventListener('mousemove', shadow);
