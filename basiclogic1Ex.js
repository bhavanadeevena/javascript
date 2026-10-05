function profitPercentage(){
let cp= parseInt(document.getElementById("costprice").value);
let sp= parseInt(document.getElementById("sellingprice").value);
let profit=sp-cp;
let profitpercentage=(profit)/cp*100;
document.getElementById("profit").value= profit;
document.getElementById("profitper").value= profitpercentage;
}