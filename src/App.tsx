import { RouterProvider } from "react-router-dom";
import { SITE_ROUTES } from "./routes/index";

function App() {
  return <RouterProvider router={SITE_ROUTES} />;
}

export default App;
