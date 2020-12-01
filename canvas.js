window.addEventListener('load', () => {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');

  //Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  //Variables

  let paint = false;

  function startPostion(e){
    paint = true;
    draw(e);
  }

  function endposition(){
    paint = false;
    ctx.beginPath();
  }

  function draw(e){
    if (!paint) {
      return;
    }
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  //EventListener
  canvas.addEventListener("mousedown", startPostion);
  canvas.addEventListener("mouseup", endposition);
  canvas.addEventListener("mousemove", draw);

});
