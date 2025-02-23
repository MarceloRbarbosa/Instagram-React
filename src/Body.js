import Stories from './Stories'

export default function Body(){
    return(
    <div className="corpo">
        <div className="esquerda">
            <Stories />
            <div className="posts">
                <div className="post"></div>
            </div>
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

