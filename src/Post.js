import React from "react";


const botaoSalvar = 'bookmark-outline';
const botaoLike = "heart-outline";
const corBotao = 'default';

export default function Post({user, foto, postagem, curtidas, seguidor, nomeSeguidor}){
    const [status, setStatus] = React.useState(botaoSalvar);
    const [like , setLike] = React.useState(botaoLike);
    const [qtdLike, setQtdLike] = React.useState(curtidas);
    const [corIcone , setCorIcone] = React.useState(corBotao);

  return (
<li className="post"> 
    <div className="topo">
        <div className="usuario">
        <img src={foto}></img>
        <strong >{user}</strong>
    </div> 
    <ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
    <div className="conteudo">
        <img onClick={gostei} src={postagem}/>
    </div>
    <div className="fundo">
        <div className="acoes">
            <div>
            <ion-icon onClick={curtir} name={like} color= {corIcone} ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
            </div>  
            <div >
            <ion-icon onClick={salvo} name={status}></ion-icon>
            </div>
        </div>
        
        <div className="curtidas">
              <img src={seguidor}/>
             <p>curtido por <strong>{nomeSeguidor}</strong> e <strong>outras {qtdLike} pessoas</strong></p>
        </div> 
    </div>
</li>
)

function salvo(){
(status === 'bookmark-outline') ? setStatus('bookmark') : setStatus(botaoSalvar);
}

function curtir(){ 
    if(like === 'heart-outline') {
        setLike('heart');
        setCorIcone("danger")
        setQtdLike(qtdLike + 1)
    }else if(like === 'heart'){
        setLike('heart-outline');
        setCorIcone('default')
        setQtdLike(qtdLike - 1);
    }
}

function gostei(){
    if(like === 'heart-outline') {
            setLike('heart');
            setCorIcone('danger')
            setQtdLike(qtdLike + 1);
        }
}
}