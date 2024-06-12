let betf=1,minepos=0;
function load(){
    for(let i=1;i<=25;i++)
    {
        document.getElementById(i).disabled=true;
        
    }
    document.getElementById('result').style.display="none";
}
    


function bet()
{
    if(betf==1)
    {
        for(let i=1;i<=25;i++)
            {
                document.getElementById(i).disabled=false;
            }
        document.getElementById('bet').innerHTML="Cashout";
        document.getElementById('result').style.display="none";
        for(let i=1;i<=25;i++)
            {
                document.getElementById(i).style.backgroundImage="none";
            }
        minepos=mineposition();
        betf=0;
    }
    else if(betf==0)
        {
            for(let i=1;i<=25;i++)
                {
                    document.getElementById(i).disabled=true;
                    document.getElementById(i).style.backgroundImage="none";
                }
            document.getElementById('bet').innerHTML="Bet";
            betf=1;
        }
}

function mineposition()
{
    let pos=Math.floor(Math.random()*25)
    console.log(pos);
    return pos;
}
function checkmine(n)
{
if(n==minepos)
    {
        for(let i=1;i<=25;i++)
            {
                document.getElementById(i).disabled=true;
                
            }
        rotatemine(n);
    }
    else
    {
        rotategem(n);
    }
}
function rotategem(n)
{
    
    let tile=document.getElementById(n);
    tile.style.backgroundImage="url(/gem.jpg)";
    tile.style.backgroundSize="cover";
    // tile.style.mixBlendMode="multiply";
}
function rotatemine(n)
{
    let tile=document.getElementById(n);
    tile.style.backgroundImage="url(/gem2.jpg)";
    tile.style.backgroundSize="cover"; 
    setTimeout(cashout,500);
    
}
function cashout()
{
    document.getElementById('result').style.display="block";
    document.getElementById('bet').innerHTML="Bet";
    betf=1;

}