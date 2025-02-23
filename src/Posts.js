const postagens = [
    {user:'meowed',fotoPerfil:'../assets/img/meowed.svg', postagem:'../assets/img/gato-telefone.svg',qtdCurtidas :'101523', seguidor:'../assets/img/respondeai.svg', nomeSeguidor: 'respondeai'},
    {user:'meowed',fotoPerfil:'../assets/img/barked.svg', postagem:'../assets/img/dog.svg',qtdCurtidas :'99159', seguidor:'../assets/img/adorable_animals.svg', nomeSeguidor: 'adorable_animals'},
    {user:'meowed',fotoPerfil:'../assets/img/meowed.svg', postagem:'../assets/img/gato-telefone.svg',qtdCurtidas :'101523', seguidor:'../assets/img/respondeai.svg', nomeSeguidor: 'respondeai'}
]



export default function Posts(){
  return (
    <>
    <ul>
{postagens.map(p => <Post user={p.user} foto={p.fotoPerfil} postagem = {p.postagem} curtidas={p.qtdCurtidas} seguidor={p.seguidor} nomeSeguidor={p.nomeSeguidor}/>)}
    </ul>
    </>
    )
}


function Post({user, foto, postagem, curtidas, seguidor, nomeSeguidor}){
return (
<li className="post"> 
    <div className="topo">
        <div className="usuario">
        <img src={foto}></img>
        <strong >{user}</strong>
    </div> 
    <ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
    <div className="conteudo">
        <img src={postagem}/>
    </div>
    <div className="fundo">
        <div className="acoes">
            <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            </div>  
            <div >
            <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
        
        <div className="curtidas">
              <img src={seguidor}/>
             <p>curtido por <strong>{nomeSeguidor}</strong> e <strong>outras {curtidas} pessoas</strong></p>
        </div> 
    </div>
</li>
)
}