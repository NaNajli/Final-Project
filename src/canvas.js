
export function drawCanvas() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

       ctx.beginPath();
       ctx.arc(75, 75, 70, 0, Math.PI * 2, true); 
       ctx.fillStyle = "red";
       ctx.fill()
       ctx.moveTo(180, 55);
       
       ctx.stroke();

       ctx.beginPath();
       ctx.arc(75, 75, 50, 0, Math.PI * 2, true); 
       ctx.fillStyle = "white";
       ctx.fill()
       ctx.moveTo(110, 75);
       ctx.stroke();
       
       ctx.beginPath();
       ctx.arc(75, 75, 35, 0, Math.PI * 2, true); 
       ctx.fillStyle = "red";
       ctx.fill()
       ctx.moveTo(140, 95);
       ctx.stroke();
       
       ctx.beginPath();
       ctx.arc(75, 75, 20, 0, Math.PI * 2, true); 
       ctx.fillStyle = "blue";
       ctx.fill()
       ctx.moveTo(190, 135);
       ctx.stroke();

       ctx.beginPath();
       ctx.font = "3vw  Italic";
       ctx.fillStyle = "white";
       ctx.fillText("★",60,85);
  
    }}
    