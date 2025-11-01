import Header from "./components/Header.jsx";
import Sidenav from "./components/Sidenav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";


function App() {

    return (
        <div className="layout">
            <Header/>
            <Sidenav/>
            <main className="main">
                <Home />
            </main>
            <Footer/>
        </div>
    )
}

export default App