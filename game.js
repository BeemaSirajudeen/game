var allboxes=document.querySelectorAll(".main div");
var count=0;
for(let i=0;i<allboxes.length;i++)
{
    allboxes[i].onclick=function()
    {
        if(this.innerHTML !="X" &&this.innerHTML!="O")
        {
            if(count%2==0)
            {
                //print x
                this.innerHTML="X";
                select();
                count++;
            }
            else
            {
                //print o
                this.innerHTML="O";
                select();
                count++;

            }

        }
    }
}
function wincolor(a,b,c)
{
    console.log("win");
    a.classList.add("win");
    b.classList.add("win");
    c.classList.add("win");
}



function select()
{
     var box1=document.getElementById('div1');
     var box2=document.getElementById('div2');
     var box3=document.getElementById('div3');
     var box4=document.getElementById('div4');
     var box5=document.getElementById('div5');
     var box6=document.getElementById('div6');
     var box7=document.getElementById('div7');
     var box8=document.getElementById('div8');
     var box9=document.getElementById('div9');
     



if(box1.innerHTML!="" && box1.innerHTML==box2.innerHTML && box2.innerHTML==box3.innerHTML)
{
   // console.log("win")
    wincolor(box1,box2,box3);
}
if(box4.innerHTML!="" && box4.innerHTML==box5.innerHTML&& box4.innerHTML==box6.innerHTML)
    {
       // console.log("win")
        wincolor(box4,box5,box6);
    }
        if(box7.innerHTML!="" && box7.innerHTML==box8.innerHTML&& box8.innerHTML==box9.innerHTML) 
        {
            //console.log("win")
            wincolor(box7,box8,box9);
        }
            if(box1.innerHTML!="" && box1.innerHTML==box4.innerHTML&& box4.innerHTML==box7.innerHTML)
            {
                //console.log("win")
                wincolor(box1,box4,box7);
            }
                if(box2.innerHTML!="" && box2.innerHTML==box5.innerHTML&& box5.innerHTML==box8.innerHTML)
                {
                   // console.log("win")
                    wincolor(box2,box5,box8);
                }
                    if(box3.innerHTML!="" && box3.innerHTML==box6.innerHTML&& box6.innerHTML==box9.innerHTML)
                    {
                       // console.log("win")
                        wincolor(box3,box6,box9);
                    }
                        if(box1.innerHTML!=""&& box1.innerHTML==box5.innerHTML&&box5.innerHTML==box9.innerHTML)
                        {
                            //console.log("win")
                            wincolor(box1,box5,box9);
                        }
                         if(box3.innerHTML!=""&& box3.innerHTML==box5.innerHTML&& box5.innerHTML==box7.innerHTML)
                         {
                          //console.log("win")
                          wincolor(box3,box5,box7);
                         }
                        }
                       
                    

   
       
       






















                     