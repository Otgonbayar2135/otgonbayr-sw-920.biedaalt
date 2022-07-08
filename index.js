
var canvas=document.getElementById("canvas")
var ctx=canvas.getContext('2d');
var q,w;

canvas.width=innerWidth;
canvas.height=innerHeight;
var xbx=3
var bx=10;
var by=30;
var bh=50;
var bw=50;
var shw=142
var shh=250
// var songlt=shh[Math.floor(Math.random()*shh.length)]
const birdimage=new Image()
const bgimage=new Image()
const doodimage=new Image()
const shonimage=new Image()
const dshonimage=new Image()
const sco=new Audio()
const de=new Audio()
de.src="/sounds/Dudududududu.mp3"
de.play()
const nis=new Audio()
nis.src="/wing.mp3"
sco.src="/point.mp3"
dshonimage.src="/dood shon.png"
shonimage.src="/deed shon.png"
doodimage.src="/1doodshine.png"
birdimage.src="/bird7.png"
bgimage.src="/bg.jpg"
var gap=85
var ondor=[250,230,270,200,280,300]
var constant=shonimage.height+gap;
var gravity=1
var Score=0
var hodolgoh=[{
    q:canvas.width,
    w:0
    }]
   
      addEventListener("keydown",function(e){
    
        switch(e.key){
            case " ":
                by-=20
                nis.play()
                break;
                case "d":
                    bx+=20
                    break;
        }
        })
function draw(){
    ctx.drawImage(bgimage,0,0,canvas.width,canvas.height)
    ctx.drawImage(birdimage,bx,by,bh,bw)
    by+=gravity
    for(var i=0; i < hodolgoh.length; i++){
        ctx.drawImage(shonimage,hodolgoh[i].q,hodolgoh[i].w,shw,shh);
        ctx.drawImage(dshonimage,hodolgoh[i].q,hodolgoh[i].w+constant,shw,shh)
        hodolgoh[i].q--
        if(hodolgoh[i].q==935){
            hodolgoh.push({
                q:canvas.width,
                w:ondor[Math.floor(Math.random()*ondor.length)]-shonimage.height
                // w: Math.floor(Math.random()*shonimage.height)-shonimage.height
            })
        }
        ctx.drawImage(doodimage,0,canvas.height-doodimage.height,canvas.width,canvas.height-doodimage.height)
        ctx.fillText("Score: "+Score,200,50)
        ctx.font="50px Roboto"
        ctx.fill()
        if(bx-bw==hodolgoh[i].q){
            Score++
            sco.play()
          }   
            if( bx + bw >= hodolgoh[i].q && bx <=  hodolgoh[i].w && by <= hodolgoh[i].w+shh || bh >=canvas.height- hodolgoh[i].w-constant || by + bh >=  canvas.height - doodimage.height ||   by >= canvas.height){
              
            alert("game over")

            }    
    }
    
}

function ehleh(){
    draw()
  }

function animate(){
    requestAnimationFrame(animate)
    draw()
}
animate()
