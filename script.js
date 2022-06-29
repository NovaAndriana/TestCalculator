function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    //result = interest;
    //p = document.getElementById("principal").value;
    document.getElementById("year").innerText=year;
    document.getElementById("principal").innerText=principal;
    document.getElementById("rate").innerText=rate;
    document.getElementById("interest").innerText=interest;
    
}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function allertTest(){
alert("Enter a positive number"); 
}