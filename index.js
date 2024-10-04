var SetaDireita = window.document.getElementById("setadireita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var SetaEsquerda = window.document.getElementById("setaesquerda")

function rolarParaDireita(){
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margin-top:120px"

}
function rolarParaEsquerda(){
    leonardo.style ="display:flex"
    bruna.style ="dispaly:none"
    setadireita.style = "display:flex"
    setaesquerda.style = "display:none; margin-top:120px"
}