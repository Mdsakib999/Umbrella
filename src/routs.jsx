import { createBrowserRouter } from 'react-router-dom';
import Mainn from './Mainn';
import Home from './componant/Home';
import About from './componant/About';
import Services from './componant/Services';
import Contact from './componant/Contact';
import QuitForm from './componant/QuitForm';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainn></Mainn>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            
            {
                path: "/about",
                element: <About></About>,
                
            },
            {
                path: "/services",
                element: <Services></Services>,
                
            },
            {
                path: "/quit",
                element: <QuitForm></QuitForm>,
                
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            }
        ]
    }
])