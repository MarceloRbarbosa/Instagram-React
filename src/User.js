import React from "react";

export default function User(){
    const [nome, setNome] = React.useState('Solove');
    return (
    <>
    <div className="usuario">        
            <img src='../assets/img/catanacomics.svg' />       
            <div className="texto">
            <strong>{nome}</strong>  
            <ion-icon onClick={trocarApelido} name="pencil-sharp"></ion-icon>
            </div>
        </div>
</>
)


function trocarApelido(){
const novoNome = prompt('Alterar apelido');
(novoNome === '') ? alert('Necessita de um apelido valido') : setNome(novoNome) ;
}
}