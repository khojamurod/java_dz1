var age =  +prompt('yoshingizni kriting');
if(age<17){
    alert("Yoshsiz. O'qishingiz kerak");
}else if( age>=18 && age<=50){
    alert('Ishlashingiz kerak');
}else if(age>=51 && age<=59){
    alert('Yaqinda pensiyaga chiqasiz');
}else if(age>=60 && age<150){
    alert("Pensionerga o'xshaysiz, hali tirik bo'lsangiz xD");
}else{
    alert("Nimadir notog'ri ketib qoldi")
}