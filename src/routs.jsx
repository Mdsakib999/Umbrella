import { createBrowserRouter } from 'react-router-dom';
import Mainn from './Mainn';
import Home from './componant/Home';
import About from './componant/About';
import Services from './componant/Services';
import Contact from './componant/Contact';
import QuitForm from './componant/QuitForm';
import Privacy from './componant/Privacy';
import Condition from './componant/Condition';


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
                path: "/quote",
                element: <QuitForm></QuitForm>,
                
            },
            {
                path: "/privacy",
                element: <Privacy></Privacy>,
                
            },
            {
                path: "/condition",
                element: <Condition></Condition>,
                
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            }
        ]
    }
])