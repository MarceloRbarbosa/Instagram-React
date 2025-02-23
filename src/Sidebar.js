import User from "./User";


export default function Sidebar(){
    return(
<>
<div className="sidebar">
        <User />
        
                    
        


        <div className="sugestoes">
            <div className="titulo">
            <p className="texto"> Sugestões para você</p>
            <strong>Ver tudo</strong>
            </div>
            
            <div className="sugestao"></div>
            
            
        </div>

        <div className="links">
            <div className="copyright"></div>
            </div>  
        </div>
        </>
);
}