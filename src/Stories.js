
const stories = [
    {user: "9gag", imagem:'../assets/img/9gag.svg'},
    {user: "meowed", imagem: "../assets/img/meowed.svg"},
    {user: "barked", imagem: "../assets/img/barked.svg"},
    {user: "nathanwpylestrangeplanet", imagem: "../assets/img/nathanwpylestrangeplanet.svg"},
    {user: "wawawicomics", imagem: "../assets/img/wawawicomics.svg"},
    {user: "respondeai", imagem: "../assets/img/respondeai.svg"},
    {user: "filomoderna", imagem: "../assets/img/filomoderna.svg"},
    {user: "memeriagourmet", imagem: "../assets/img/memeriagourmet.svg"},
   ]

export default function Stories(){
    return (
 <>
    <ul className="stories">
    {stories.map(s =><Story user={s.user} imagem={s.imagem}/>)}
    </ul>
 </>
     )
 }

function Story({user, imagem}){
    return(    
    <li className="story">
        <div className='imagem'>
           <img  src={imagem}/>
        </div>
        <p className="usuario">{user}</p> 
    </li>
)
 }
