var age = +prompt('Какой ваш возраст?');

if(age > 110){
    alert ('Ваш возраст достоин уважения или вы допустили ошибку');
        
}else if(age >= 11 && age <= 14){
    alert('Вам ' + age + ' лет');

}else if(age%10 == 1){
    alert('Вам ' + age + ' год');

}else if(age%10 == 2 || age%10 == 3 || age%10 == 4){
        alert('Вам ' + age + ' года');

}else if (age){
    alert('Вам ' + age + ' лет');
}
 else{
    alert('Ошибка,попробуйте снова');
};

    
    