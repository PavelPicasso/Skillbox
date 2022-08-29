let users = [
    {
        name: "Oleg",
        login: "Olegio",
        password: "OlegPassword"
    },
    {
        name: "Ivan",
        login: "IvanSK",
        password: "IvanPassword"
    },
    {
        name: "Tomas",
        login: "Tom",
        password: "TomPassword"
    }
];

let userLogin,
    userPassword,
    userName;

while (!(userLogin = prompt("Введите логин:")))
            alert('Поле логин не может быть пустым!');

while (!(userPassword = prompt("Введите пароль:")))
            alert('Поле пароль не может быть пустым!');

/*
    Version 1
*/
containsLogin  = users.some(function(element) {
    userName = element.name
    return element.login === userLogin;
});

containsPassword  = users.some(function(element) {
    return element.password === userPassword;
});

if(containsLogin && containsPassword) {
    alert(`Приветствую, ${userName}`);
} else {
    alert("Ошибка авторизации");
}

/*
    Version 2
*/
// let containsUser;

// users.forEach(function(user) {
//     if(user.login === userLogin && user.password === userPassword) {
//         userLogin = user.name;
//         containsUser = true;
//     } else {
//         containsUser = false;
//     }
// });

// if(containsUser) {
//     alert(`Приветствую, ${userLogin}`);
// } else {
//     alert("Ошибка авторизации");
// }