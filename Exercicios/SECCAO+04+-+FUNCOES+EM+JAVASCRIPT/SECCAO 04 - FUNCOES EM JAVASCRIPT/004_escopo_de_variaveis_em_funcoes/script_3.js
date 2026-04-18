// variáveis locais só podem ser acedidas dentro da função

let myName = "John";

function showMyName() {
    console.log(myName);

    let mySurname = "Doe";
}

showMyName();
console.log(mySurname); // erro: mySurname não está definida, porque é uma variável local da função showMyName

// assim, variáveis locais só existem dentro do escopo da função onde são definidas