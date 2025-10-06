const users = [
    {username: "oblepixa123" , password: "12345" },
    {username: "3" , password: "ладно" },
    {username: "user3" , password: "password3" }
];
function authenticante (username,password) {
    for (let user of users) {
        if (user.username == username && user.password == password)  {           
            return true;
        }
    }
    return false;
};

function login() {
    let attempt = 3;
    let loggedin = false;

    while (!loggedin && attempt > 0) {

 
        let username = prompt("напишите свое имя: ")
        let password = prompt("напишите свой пороль: ")

        if (authenticante(username,password)){
            console.log("вы успешно авторизировались");
            loggedin = true;
        }else {
            console.log("неправильный логин или пароль");
            attempt --;
        };
    }

    if(!loggedin) {
        console.log("вы использовали все попытки доступ заблокирован")
    } 
}


login()