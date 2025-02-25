import React, { useState } from "react"
import Post from "./Post"

const postagens = [
    {user:'meowed',fotoPerfil:'../assets/img/meowed.svg', postagem:'../assets/img/gato-telefone.svg',qtdCurtidas :101523, seguidor:'../assets/img/respondeai.svg', nomeSeguidor: 'respondeai'},
    {user:'Barked',fotoPerfil:'../assets/img/barked.svg', postagem:'../assets/img/dog.svg',qtdCurtidas :99159, seguidor:'../assets/img/adorable_animals.svg', nomeSeguidor: 'adorable_animals'},
    {user:'9gag',fotoPerfil:'../assets/img/9gag.svg', postagem:'../assets/img/gato-telefone.svg',qtdCurtidas : 87550, seguidor:'../assets/img/respondeai.svg', nomeSeguidor: 'respondeai'}
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

