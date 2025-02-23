import { createRoot } from "react-dom/client";
import NavBar from './NavBar';
import Body from "./Body";



function App(){
    return (
<>
   <NavBar />
   <Body/>

</>     
    )
}



createRoot(document.querySelector(".root")).render(App());
