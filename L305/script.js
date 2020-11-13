var numberofStudents = prompt ("რამდენი სტუდენტის შეყვანა გსურთ:");
var students=[];
for(var  s=0; s<numberofStudents;s++)
{
    students[s]= prompt ("შეიყვანეთ სტუდენტის სახელი:");
}
students.sort();

for(var i=0;i<students.length;i++)
{
    alert(students[0]);
}