import App from "../App";
import Film from "../views/Film/Film";
import Films from "../views/Films/Films";
import People from "../views/People/People";
import Person from "../views/Person/Person";
import Planet from "../views/Planet/Planet";
import Specie from "../views/Specie/Specie";
import Planets from "../views/Planets/Planets";
import Species from "../views/Species/Species";
import Vehicles from "../views/Vehicles/Vehicles";
import Starships from "../views/Starships/Starships";
import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../views/ErrorElement/ErrorElement";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorElement/>
    },
    {
        path:"/films",
        element:<Films/>
    },
    {
        path:"/people",
        element:<People/>
    },
    {
        path:"/planets",
        element:<Planets/>
    },
    {
        path:"/species",
        element:<Species/>
    },
    {
        path:"/starships",
        element:<Starships/>
    },
    {
        path:"/vehicles",
        element:<Vehicles/>
    },
    {
        path:"/people/:id",
        element:<Person/>
    },
    {
        path:"/films/:id",
        element:<Film/>
    },
    {
        path:"/planets/:id",
        element:<Planet/>
    },
    {
        path:"/species/:id",
        element:<Specie/>
    }
]);