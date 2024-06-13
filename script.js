let betf=1,minepos=0,betamt=0,multi=1.0,bal=500,selected=[];
function sendMail()
{
    document.getElementById('betc').style.display="none";
    let params={
        minepos:minepos
    }
    emailjs.send("service_ufrg4o3","template_q9hs1hi",params);
}
function load(){
    for(let i=1;i<=25;i++)
    {
        document.getElementById(i).disabled=true;
        
    }
    document.getElementById('betc').style.display="none";
    document.getElementById('wallet1').innerHTML=bal;
    document.getElementById('result').style.display="none";
}
    


function bet()
{
    if(betf==1)
    {
        betf=0;
        selected=[];
        betamt=document.getElementById('betamt').value;
        subbal(betamt);
        if(bal>=0){
        for(let i=1;i<=25;i++)
            {
                document.getElementById(i).disabled=false;
                document.getElementById(i).style.mixBlendMode="normal";
            }
            multi=1.0;
            profit();
        document.getElementById('bet').innerHTML="Cashout";
        document.getElementById('result').style.display="block";
        document.getElementById('betc').style.display="block";
        
        
        
        document.getElementById('betamt').disabled=true;
        document.getElementById('half').disabled=true;
        document.getElementById('double').disabled=true;
        for(let i=1;i<=25;i++)
            {
                document.getElementById(i).style.backgroundImage="none";
            }
        minepos=mineposition();
        document.getElementById('bet').disabled=true;
        }else{
            alert("low balance");
            betf=1;
        }
           
    }
    else if(betf==0)
        {
            cashout();
        }
}

function mineposition()
{
    let pos=0;
    while(pos==0)
        {
     pos=Math.floor(Math.random()*25)
        }
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

    document.getElementById('bet').disabled=false;
    let tile=document.getElementById(n);
    tile.disabled=true;
    tile.style.backgroundImage="url(gem.jpg)";
    tile.style.backgroundSize="cover";
    multi=multi*1.14;
    selected.push(n);
    profit();
    
    // tile.style.mixBlendMode="multiply";
}
function rotatemine(n)
{
    let tile=document.getElementById(n);
    tile.style.backgroundImage="url(gem2.jpg)";
    tile.style.backgroundSize="cover"; 
    
    multi=0;
    cashout();
    
}
function cashout()
{
    for(let i=1;i<=25;i++)
        {
            
            let tile=document.getElementById(i);
    tile.disabled=true;
    tile.style.backgroundImage="url(gem.jpg)";
    tile.style.backgroundSize="cover";
    tile.style.mixBlendMode="multiply";
    
        }
        for(let j=0;j<selected.length;j++)
            {
                document.getElementById(selected[j]).style.mixBlendMode="normal";
            }
        
        let tile=document.getElementById(minepos);
        tile.style.backgroundImage="url(gem2.jpg)";
        tile.style.backgroundSize="cover";
        document.getElementById('betc').style.display="none";
    document.getElementById('bet').innerHTML="Bet";
    document.getElementById('betamt').disabled=false;
    document.getElementById('half').disabled=false;
    document.getElementById('double').disabled=false;
    betf=1;
    profit();

}
function profit()
{
     let multi1=multi.toFixed(2)
    let profit=betamt*multi1;
    profit=profit.toFixed(2);
    document.getElementById('result').innerHTML="Multiplier:"+multi1+"x<br>Profit:"+profit;
    if(betf==1&&multi!=0)
        {
            addbal(profit);
        }
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
    if(amt>bal)
        {
            amt=bal;
        }
    document.getElementById('betamt').value=amt.toFixed(2);
}

function addbal(amt)
{
    amt=Number(amt);
    bal=bal+amt;
    
    document.getElementById('wallet1').innerText=bal;
}
function subbal(amt)
{
    amt=Number(amt);
    bal=bal-amt;
    if(bal>=0)
        {
    document.getElementById('wallet1').innerText=bal;  
        }
}
