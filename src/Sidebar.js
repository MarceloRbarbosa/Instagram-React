
import User from "./User";
import Suggestions from "./Suggestions";

export default function Sidebar(){
    return(
<>
<div className="sidebar">
        <User />
         <Suggestions />             
        <div className="links">
            <div className="copyright"></div>
            <h1>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</h1>
            <h1 className="links">© 2021 INSTAGRAM DO FACEBOOK"</h1> 
            </div>  
        </div>
        </>
);
}
