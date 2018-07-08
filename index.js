$(document).ready(function() {
  let allCanvas = $('canvas');
  let c0 = allCanvas[0];
  let c1 = allCanvas[1];
  let c2 = allCanvas[2];
  let c3 = allCanvas[3];
  let c4 = allCanvas[4];
  let c5 = allCanvas[5];
  let c6 = allCanvas[6];
  let c7 = allCanvas[7];
  let c8 = allCanvas[8];
  let c9 = allCanvas[9];
  let c10 = allCanvas[10];
  let c11 = allCanvas[11];
  let c12 = allCanvas[12];
  let c13 = allCanvas[13];

  let c0context = c0.getContext('2d');
  c0context.fillStyle = 'red';
  c0context.fillRect(10, 10, 100, 50);

  let c1Context = c1.getContext('2d');
  c1Context.strokeStyle = 'blue';
  c1Context.strokeRect(5, 5, 50, 50);
  c1Context.lineWidth = 5;
  c1Context.strokeRect(135, 5, 50, 50);

  let c2Context = c2.getContext('2d');
  c2Context.beginPath();
  for (let y = 10; y < 100; y += 10) {
    c2Context.moveTo(10, y);
    c2Context.lineTo(90, y);
  }
  c2Context.stroke();

  let c3Context = c3.getContext('2d');
  c3Context.beginPath();
  c3Context.moveTo(50, 10);
  c3Context.lineTo(10, 70);
  c3Context.lineTo(90, 70);
  c3Context.fillStyle = 'purple';
  c3Context.fill();

  let c4Context = c4.getContext('2d');
  c4Context.beginPath();
  c4Context.moveTo(10, 90);
  c4Context.quadraticCurveTo(60, 10, 90, 90);
  c4Context.lineTo(60, 10);
  c4Context.closePath();
  c4Context.stroke();
  c4Context.fillStyle = 'green';
  c4Context.fill();

  let c5Context = c5.getContext('2d');
  c5Context.beginPath();
  c5Context.moveTo(10, 90);
  c5Context.bezierCurveTo(10, 10, 90, 10, 50, 90);
  c5Context.lineTo(90, 10);
  c5Context.lineTo(10, 10);
  c5Context.closePath();
  c5Context.stroke();
  c5Context.fillStyle = 'orange';
  c5Context.fill();

  let c6Context = c6.getContext('2d');
  c6Context.beginPath();
  c6Context.moveTo(10, 10);
  c6Context.arcTo(90, 10, 90, 90, 20);
  c6Context.moveTo(10, 10);
  c6Context.arcTo(90, 10, 90, 90, 80);
  c6Context.stroke();

  let c7Context = c7.getContext('2d');
  c7Context.beginPath();
  c7Context.arc(50, 50, 40, 0, 7);
  c7Context.arc(150, 50, 40, 0, 0.5 * Math.PI);
  c7Context.stroke();

  let c8Context = c8.getContext('2d');
  c8Context.font = '28px Georgia';
  c8Context.fillStyle = 'fuchsia';
  c8Context.fillText('I can draw text, too!', 10, 50);

  let c9Context = c9.getContext('2d');
  c9Context.scale(3, 0.5);
  c9Context.beginPath();
  c9Context.arc(50, 50, 40, 0, 7);
  c9Context.lineWidth = 3;
  c9Context.stroke();

  function flipHorizontally(context, around) {
    context.translate(around, 0);
    context.scale(-1, 1);
    context.translate(-around, 0);
  }
});
