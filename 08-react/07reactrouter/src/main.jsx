import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "../src/components/Home/Home.jsx";
import About from "../src/components/About/About.jsx";
import Contact from "../src/components/Contact/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import User from "../src/components/User/User.jsx";
import Github from "../src/components/Github/Github.jsx";
import { githubInfoLoader } from "./loaders/githubInfoLoader.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/" element={<User />}>
        <Route path=":id" element={<User />} />
      </Route>
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
