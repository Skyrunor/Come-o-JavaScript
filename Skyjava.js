let contador = 0
let res = document.querySelector('section#result')

function contador(){
    contador++
    res.innerHTML = `<p>O contador est[a com <mark>${contador}</mark>Cliques</p>`

}
function zerar(){
    contador = 0
    res.innerHTMl = null
}