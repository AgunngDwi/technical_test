import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Sport from "./pages/Sport";
import Technology from "./pages/Technology";
import Finance from "./pages/Finance";
import Automotive from "./pages/Automotive";

function App() {
  let element = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/sport", element: <Sport /> },
    { path: "/finance", element: <Finance /> },
    { path: "/technology", element: <Technology /> },
    { path: "/automotive", element: <Automotive /> },
  ]);
  return element;
}

export default App;
