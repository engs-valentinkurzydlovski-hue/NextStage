const botao = document.getElementById("botaoContraste");

botao.addEventListener("click", function() {
    document.body.classList.toggle("alto-contraste");

    botao.setAttribute(
        "aria-pressed",
        document.body.classList.contains("alto-contraste")
    );
});
