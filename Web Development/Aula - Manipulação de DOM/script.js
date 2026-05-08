// const titulo = document.querySelector("h1")
// console.log(titulo)

// titulo.textContent = "Novo Titulo"

// const div = document.querySelector("#container")
// console.log(div)

// div.innerHTML = "<p>Paragrafo</p>"

// const imagem = document.querySelector("img")

// imagem.setAttribute('src', '/images/download.jpg')

// const caixa = document.querySelector(".box")

// caixa.style.width = '100px'
// caixa.style.height = '100px'

// caixa.style.backgroundColor = 'lightgreen'
// caixa.style.border = '10px solid black'

// caixa.classList.add('oculto')
// caixa.classList.remove('oculto')

// const botao = document.getElementById("botao")

// botao.addEventListener("click", () => {
//     caixa.classList.toggle("oculto")
// })

// const novoItem = document.createElement('li')

// novoItem.textContent = "Novo Item"

// document.querySelector('ul').appendChild(novoItem)

// novoItem.remove()

// localStorage.setItem("nome1", "Joao")
// localStorage.setItem("nome2", "Daniel")
// localStorage.setItem("nome3", "Thiago")

// let nome = localStorage.getItem('nome')

// console.lognome

// localStorage.removeItem("nome2")

// localStorage.clear()

// const usuario = {nome: "daniel", idade: 36}

// localStorage.setItem('usuario', JSON.stringify(usuario))

// const recuperado = JSON.parse(localStorage.getItem('usuario'))

// console.log(recuperado)
// console.log(recuperado.nome)

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

const renderizarTarefas = () => {
    const lista = document.getElementById("lista-tarefas")
    lista.innerHTML = ""

    tarefas.forEach(t => {
        const li = document.createElement("li")
        li.textContent = t
        lista.appendChild(li)
    })
}

renderizarTarefas()

const addTarefa = () => {
    const input = document.getElementById("input-tarefa")

    tarefas.push(input.value)

    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    input.value = ""

    renderizarTarefas()
}

document.getElementById("form-tarefa").onsubmit = (event) => {
    event.preventDefault()
    addTarefa()
}

const limparTarefas = () => {
    tarefas = []

    localStorage.removeItem('tarefas')

    renderizarTarefas()
}

document.getElementById("btn-limpar").onclick = () => {
    limparTarefas()
}
