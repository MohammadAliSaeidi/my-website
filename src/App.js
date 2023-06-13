import './styles'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
// import {createBrowserRouter, RouterProvider} from "react-router-dom";
//
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home/>,
//     },
// ]);

function App() {
    return (
        <Home />
        // < RouterProvider router={router}/>
    );
}

export default App;
