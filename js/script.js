let name = prompt("Как ваше имя","");
let famyle = prompt("Ваша фамилия?", "");
let age = prompt("Сколько вам лет","");
let user= [];
user[0]=name;
user[1]= famyle;
user[2]=age;
console.log(`Вас зовут ${user[0]}`);
console.log(`Ваша фамилия${user[1]}`);
console.log(`Ваш возраст ${user[2]}`);