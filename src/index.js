import { createRoot } from "react-dom/client";
import NavBar from './NavBar';


function App(){
    return (
<>
<NavBar />
</>     
    )
}



createRoot(document.querySelector(".root")).render(App());
