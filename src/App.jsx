import { useState } from "react"
import Input from "./components/Input"

function App() {
  const [senha, setSenha] = useState("")
  const [textoCopiado, setTextoCopiado] = useState("Copiar")
  const [tamanhoSenha, setTamanhoSenha] = useState(12)
  const [mostrarInput, setMostrarInput] = useState(false)

  function gerar() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()_+"
    let novaSenha = ""

    for (let i = 0; i < tamanhoSenha; i++) {
      const posicao = Math.floor(Math.random() * caracteres.length)
      novaSenha += caracteres[posicao]
    }

    setSenha(novaSenha)
    setTextoCopiado("Copiar")
  }

  function copiarParaTransferencia() {
    window.navigator.clipboard.writeText(senha)
    setTextoCopiado("Copiado!")
  }

  return (
    <div className="app">
      <h1>Gerador de Senhas</h1>
      <div>
        <label htmlFor="mostrarInput">Customizar tamanho:</label>
        <input 
          type="checkbox"
          id="mostrarInput"
          value={mostrarInput}
          onChange={() => setMostrarInput(currentState => !currentState)}
        />
      </div>
      
      {mostrarInput ? (
        <div>
        <label htmlFor="tamanhoSenha">Tamanho:</label>
        <Input tamanhoSenha={tamanhoSenha} setTamanhoSenha={setTamanhoSenha}/>
        </div>
      ) : null}
      <button onClick={gerar}>Gerar senha de {mostrarInput ? tamanhoSenha : 12} caracteres!</button>
      <button onClick={copiarParaTransferencia}>{textoCopiado}</button>
      <div>{senha}</div>
    </div>
  )
}

export default App
