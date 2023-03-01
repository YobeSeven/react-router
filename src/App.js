import { useRoutes } from "react-router-dom";

// Pages :
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Components :
import Navbar from "./components/Navbar";
import Error from "./components/Error";
    // Home : 
import News from "./components/Home/News";
import Forms from "./components/Home/Forms";

export default function App({setUsers , users}){

    let myName = "Ayoub";

    let routes = useRoutes([
        {
            path: '/',
            element: <Home />,
            // Les pages enfants à Home :
            children : [
                {
                    path : "/home/news",
                    element : <News setUsers={setUsers} users={users} />,
                },
                {
                    path : "/home/forms",
                    element : <Forms setUsers={setUsers} users={users}/>,
                },
            ],
        },
        {
            path: '/about',
            element: <About />,
        },
        {
            path: '/contact',
            element: <Contact />,
        },
        // Si jamais l'user mets un lien non-existant : 
        {
            path : "*",
            element : <Error />,
        }
    ]);

    return (
        <>
            <Navbar />
            <div>{routes}</div>
        </>
    )
}