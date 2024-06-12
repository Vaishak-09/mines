let betf=1,minepos=0,betamt=0,multi=1.0;
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
            multi=1.0;
            profit();
        document.getElementById('bet').innerHTML="Cashout";
        document.getElementById('result').style.display="block";
        betamt=document.getElementById('betamt').value;
        document.getElementById('betamt').disabled=true;
        for(let i=1;i<=25;i++)
            {
                document.getElementById(i).style.backgroundImage="none";
            }
        minepos=mineposition();
        betf=0;
    }
    else if(betf==0)
        {
            cashout();
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
    multi=multi*1.14;
    profit();
    // tile.style.mixBlendMode="multiply";
}
function rotatemine(n)
{
    let tile=document.getElementById(n);
    tile.style.backgroundImage="url(/gem2.jpg)";
    tile.style.backgroundSize="cover"; 
    multi=0;
    cashout();
    
}
function cashout()
{
    for(let i=1;i<=25;i++)
        {
            document.getElementById(i).disabled=true;
            
        }
    document.getElementById('bet').innerHTML="Bet";
    document.getElementById('betamt').disabled=false;
    betf=1;
    profit();

}
function profit()
{
    multi=multi.toFixed(2)
    let profit=betamt*multi;
    profit=profit.toFixed(2)
    document.getElementById('result').innerHTML="Multiplier:"+multi+"x<br>Profit:"+profit;
}
function halfamt()
{
    let amt=document.getElementById('betamt').value;
    amt=amt/2;
    document.getElementById('betamt').value=amt.toFixed(2);
}
function doubleamt()
{
    let amt=document.getElementById('betamt').value;
    amt=amt*2;
    document.getElementById('betamt').value=amt.toFixed(2);
}