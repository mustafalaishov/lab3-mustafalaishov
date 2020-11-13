var dolar=2.6 , result;
var input = prompt("შეიყვანეთ თანხის ოდენობა ([[number]format]);");
if(input.indexOf("$")!=-1)
{
    var del=input.indexOf("$");
    input.substring(del,del+1);
    var paresdInput=parseFloat(input);
    result=paresdInput * dolar;
    alert(result+"L");
}
if(input.indexOf("L")!=-1)
{
    var del=input.indexOf("L");
    input.substring(del, del+1);
    var paresdInput=parseFloat(input);
    result=paresdInput / dolar;
    alert(result+"$");
}