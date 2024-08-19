let context;
let button;
let playing = false;
let audioEntity;

window.onload = (event) => {
  audioEntity = document.querySelector("#sourcy");
  button = document.querySelector(".audioContext"); 
};

function startSound() {
  if (!playing) {
    context = audioEntity.components.sound.listener.context;
    context.resume();
   
  console.log(context);
    context.resume();
    button.innerHTML = "Stop";
    playing = true;
  }
  else {
    context.suspend();
    button.innerHTML = "Start";
    playing = false;
  }
}

