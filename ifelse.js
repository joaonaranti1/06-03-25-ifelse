function verificarLogin() {
    let txtLogin = document.getElementById("txtLogin");
    let txtSenha = document.getElementById("txtSenha");

    let login = "joao";
    let senha = "senha123";

    if (txtLogin.value == login && txtSenha.value == senha) {
        console.log("Logado com sucesso!");
    } else {
        console.log("Login ou senha incorretos! Digite e tente novamente.");
    }
}