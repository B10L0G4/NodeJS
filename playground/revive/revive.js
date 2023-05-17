const messages = {
    name: "Van",
    age: 39,
    role: "Desenvolvedora",
    languages: ["Javascript", "Java", "Python"],
    ativo: true,

};

console.log(messages.role);



function palindromo (s) {

    p = s.split('').reverse().join('')
    if(s == p == true || s == '') { 
        // o slit separa a string em um array, o reverse inverte o array e o join junta o array em uma string
        return "is palindromo"
    }else {
        return "is not palindromo"
    }
     
}
