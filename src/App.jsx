import {Route, Routes} from "react-router";

import RootLayout from "./layouts/RootLayout.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {

    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App