const sugestoes =[
    {icone: '../assets/img/bad.vibes.memes.svg', titulo: 'bad.vibes.memes'},
    {icone: '../assets/img/chibirdart.svg', titulo: 'chibidart'},
    {icone: '../assets/img/razoesparaacreditar.svg', titulo:'razoesparaacreditar'},
    {icone: '../assets/img/adorable_animals.svg', titulo:'adorable_animals'},
    {icone:'../assets/img/smallcutecats.svg', titulo:'smallcutecats'}
]


export default function Suggestion(){
    return (
<>
    <div className="sugestoes">
        <div className="titulo">
           <span> Sugestões para você</span>
           <strong>Ver tudo</strong>
        </div>   
        <ul>
             {sugestoes.map(s=> <Sugestao icone={s.icone} titulo={s.titulo} />)}
         </ul>         
    </div>
</>
    )
}


function Sugestao({icone, titulo}){
    return(
<li className="sugestao" >
    <div className="usuario">      
           <img src={icone} /> 
           <div className="texto">     
           <strong>{titulo}</strong>
           <h1>Segue você</h1>
           </div>    
    </div>       
    <span className="seguir">Seguir</span> 
</li>
    )
}