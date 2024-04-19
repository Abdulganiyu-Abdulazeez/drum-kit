
window.addEventListener("keydown", player);
function player(event) {
    // console.log(event.keyCode);
    var scale = document.querySelector(`.keys[keycode="${event.keyCode}"]`);
    var audio = document.querySelector(`audio[keycode="${event.keyCode}"]`);
    if(!audio) return;
    // console.log(audio);
    audio.currentTime = 0;
    audio.play();
    scale.classList.add("scale");
}
window.addEventListener("keyup", stop);
function stop(event)  {
    let unscale = document.querySelector(`.keys[keycode="${event.keyCode}"]`);
    // console.log(unscale);
    unscale.classList.remove("scale");
}

// for clicks
var attribute;
var keys = document.querySelectorAll(".keys");
keys.forEach( key => { key.addEventListener("click", studio);});

function studio(event) {
    var get = event.target;
    attribute = get.getAttribute("keyCode");
    // console.log(attribute);
    // return attribute; 
    let key2 = document.querySelector(`div[keyCode="${attribute}"]`);
    key2.classList.add("scale")
    var audio2 = document.querySelector(`audio[keyCode="${attribute}"]`);
    // console.log(audio2);
    audio2.currentTime = 0;
    audio2.play();
}

keys.forEach(key => {key.addEventListener("transitionend", removeTransition)});
function removeTransition(event) {
    if (event.propertyName != 'transform')  return;
    this.classList.remove("scale");
    // console.log(this);
}
