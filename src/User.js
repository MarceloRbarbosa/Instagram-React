import React from "react";
const imagemUsuario = '../assets/img/catanacomics.svg' ;



export default function User(){
    const [nome, setNome] = React.useState('Solove');
    const [fotoPerfil, setFotoPerfil] = React.useState(imagemUsuario);
    return (
    <>
    
    <div className="usuario">        
            <img  onClick={alterarImagem} src={fotoPerfil} />       
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

function alterarImagem(){
const novaImagem = prompt('Insira aqui seu link para imagem');
(novaImagem === '') ? alert('Necessita de um Link valido'): setFotoPerfil(novaImagem);
}
}