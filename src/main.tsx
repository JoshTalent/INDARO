import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import './i18n';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LayOut from "./LayOut.tsx";
import Home from "./Tabs/Home.tsx";
import About from "./Tabs/About.tsx";
import Contact from "./Tabs/Contact.tsx";
import Donate from "./Tabs/Donate.tsx";


// more
import Impact from "./Tabs/Impact.tsx";
import Gallery from "./Tabs/Gallery.tsx"
import Projects from "./Tabs/Projects.tsx";
import News from "./Tabs/News.tsx"

// programms
import WhatWeDo from "./Tabs/WhatWeDo.tsx";
import ProgramDetailPage from "./Tabs/programs/boxing.tsx";
import TraditionalDance from "./Tabs/programs/TraditionalDance.tsx";
import Education from "./Tabs/programs/Education.tsx";
import AfroDance from "./Tabs/programs/AfroDance.tsx";
import Acrobatic from "./Tabs/programs/acrobatic.tsx";
import Singing from "./Tabs/programs/Singing.tsx";
import Fashion from "./Tabs/programs/Fashion.tsx";
import TraditionalDrumming from "./Tabs/programs/TraditionalDrumming.tsx";
import Skating from "./Tabs/programs/Skating.tsx"; 
import GoodManners from "./Tabs/programs/GoodManners.tsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<LayOut />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="donate" element={<Donate />} />

        {/* more */}
        <Route path="impact" element={<Impact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="projects" element={<Projects />} />
        <Route path="news" element={<News />} />

        {/* programs */}
        <Route path="what/we/do" element={<WhatWeDo />} />
        <Route path="programs/boxing" element={<ProgramDetailPage />} />
        <Route
          path="programs/traditional/dance"
          element={<TraditionalDance />}
        />
        <Route path="programs/Education" element={<Education />} />
        <Route path="programs/dance" element={<AfroDance />} />
        <Route path="/programs/acrobatics" element={<Acrobatic />} />
        <Route path="/programs/singing" element={<Singing />} />
        <Route path="/programs/fashion" element={<Fashion />} />
        <Route path="/programs/drumming" element={<TraditionalDrumming />} />
        <Route path="/programs/skating" element={<Skating />} />
        <Route path="/programs/manners" element={<GoodManners />} />

        
      </Route>
    </>,
  ),
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
);
