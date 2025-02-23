import Stories from './Stories'
import Posts from './Posts'

export default function Body(){
    return(
    <div className="corpo">
        <div className="esquerda">
            <Stories />
            <Posts />
        </div>
        <div className="sidebar">
            <div className="usuario"></div>
            <div className="sugestoes">
                <div className="sugestao"></div>
            </div>
            <div className="links">
                <div className="copyright"></div>
                </div>  
           </div>
    </div>
    )
}

