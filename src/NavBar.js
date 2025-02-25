export default function NavBar(){
    return (
        <div className="navbar">
            <div className='container'>
               <div className="logo">
                  <ion-icon name="logo-instagram"></ion-icon>
                  <div className="separador"></div>
                  < img src='assets/img/logo.png'/>
               </div>
               <div className="pesquisa">
                   <input value="Pesquisar"></input>
               </div>    
               <div className="icones">
                  <ion-icon name="paper-plane-outline"></ion-icon>
                  <ion-icon name="compass-outline"></ion-icon>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="person-outline"></ion-icon>
               </div>
               </div>    
        </div>
    )
}