import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Aluno from './Aluno'

function App() {
  const [alunos, setAlunos] = useState([])
  let salvarAluno = function salvar() {
    setAlunos(() => [...alunos, {
      nome: document.getElementById("nome").value,
      idade: Number(document.getElementById("idade").value),
      curso: document.getElementById("curso").value,
      turno: document.getElementById("turno").value
    }])
    console.log(alunos);
  }
  return (
    <>
      <section id="center">
        <input type="text" name="" id="nome" placeholder='Nome do aluno' />
        <input type="number" name="" id="idade" placeholder='Idade do aluno' />
        <input type="text" name="" id="curso" placeholder='Curso do aluno' />
        <input type="text" name="" id="turno" placeholder='Turno do aluno' />
        <input type="button" value="Salvar" onClick={salvarAluno} />

        {/* {
          alunos.map(
            (aluno, index) => (
              <Aluno key={index} nome={aluno.nome} idade={aluno.idade} curso={aluno.curso} turno={aluno.turno} />
            )
          )
        } */}
      </section>




    </>
  )
}

export default App
