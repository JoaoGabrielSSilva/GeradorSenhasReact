
export default function Input(props){
    

    return (
        <input 
            type="number"
            id="tamanhoSenha"
            min={1}
            value={props.tamanhoSenha}
            onChange={(ev) => props.setTamanhoSenha(ev.target.value)}
        />
    )
}