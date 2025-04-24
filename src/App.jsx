import { useState } from "react"

function App() {
  const [senha, setSenha] = useState("")
  const [textoCopiado, setTextoCopiado] = useState("Copiar")
  const [tamanhoSenha, setTamanhoSenha] = useState(12)

  function gerar() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()_+"
    const tamanho = tamanhoSenha
    let novaSenha = ""
    for (let i = 0; i < tamanho; i++) {
      const posicao = Math.floor(Math.random() * caracteres.length)
      novaSenha += caracteres[posicao]
    }

    setSenha(novaSenha)
  }

  function copiarParaTransferencia() {
    window.navigator.clipboard.writeText(senha)
    setTextoCopiado("Copiado!")
  }

  return (
    <div className="app">
      <h1>Gerador de Senhas</h1>
      <div>
        <label htmlFor="tamanhoSenha">Tamanho:</label>
        <input type="number" id="tamanhoSenha" min={1} value={tamanhoSenha} onChange={(ev) => setTamanhoSenha(ev.target.value)}/>
      </div>
      <button onClick={gerar}>Gerar</button>
      <button onClick={copiarParaTransferencia}>{textoCopiado}</button>
      <div>{senha}</div>
    </div>
  )
}

export default App
