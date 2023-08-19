import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./About";
import { theme } from "./utils";
import { ThemeProvider } from "@mui/material";
import Presentation from "./Presentation";
const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/presentation",
    element: <Presentation />,
  },
]);

function Main() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default Main;
