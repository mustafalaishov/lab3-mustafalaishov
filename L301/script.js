var str=prompt("შეიყვანეთ ტექსტი:");
if(str.indexOf("რეკლამა") !=-1 || str.indexOf("მარკეტინკი") !=-1  || str.indexOf("ვირუსი") !=-1){
    alert("თქვენს შედანილ წინადადებაში ნაპოვნია ასეთი სიტყვები რომელიც დაუშვებელია დასაპოსტად")
}
else
{
    alert(str);
}