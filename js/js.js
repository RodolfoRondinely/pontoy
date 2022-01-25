//mostra e some modal do perfil
document.querySelector("#asideperfil").addEventListener('click', function () {

    let mo = document.querySelector(".modal")

    if (mo.style.display == "none") {
        mo.style.display = 'flex'
    }
    else (
        mo.style.display = 'none'

    )

})

let asideShow = document.querySelector("aside")
asideShow.addEventListener("mouseout", function () {
    let asideEsconde = document.querySelector("aside")

    asideEsconde.style.width = "80px"
    document.querySelector(".modal").style.marginLeft = "80px"


})


let asideMouseOver = document.querySelector("aside")
asideMouseOver.addEventListener("mouseover", function () {

    let asideWidth = document.querySelector("aside")
    asideWidth.style.width = "230px"
    document.querySelector(".modal").style.marginLeft = "230px"

})
/* 
let btn = document.querySelector('.btnform')
    
btn.addEventListener('click', function () {
            this.style.display="none"
           document.querySelector('.btnformHidden').style.display="flex"

}) */

const btn = document.querySelector('.btn');
btn.addEventListener("click", (evt) => {
    evt.preventDefault()

    btn.disable = true;
    btn.style.backgroundColor = "#FFF";
    btn.style.color = "#000";
    btn.style.width = "100px"
    btn.style.borderRadius = "5px"
    btn.style.textTransform = "uppercase"
    btn.style.fontSize = ".8rem"
    btn.style.textAlign = "center"
    btn.innerHTML = "cadastrado ";

    document.querySelector('.divsobre').style.display = "flex"

    var fieldform = document.createElement("fieldset")

    fieldform.innerHTML = `<fieldset>
            <legend>Cadastrar Ponto do dia</legend>
            <input type="datetime-local">
            <input type="datetime-local">
            <input type="datetime-local">
            <input type="datetime-local">
            <div class="btn">
            <button value="cadastrar">cadastrar</button>
        </div>
        <div class="divsobre">

        </div>
                `
    fieldform.style.display = "flex"
    fieldform.flexDirection = "column"


    document.querySelector(".entradaDados form ").appendChild(fieldform)
});

const teste  ={
    nome:"enzo",
    age:"37",
    prof:"web developer",
}

const criandoStorage = (cliente) =>{
     const dbc = JSON.parse(localStorage.getItem('dbc'))
     console.log(dbc);
     dbc.push (cliente)
    localStorage.setItem('dbcl',JSON.stringify(dbc))
}