import { Outlet, useLocation } from "react-router";
import Header from "../components/Header.jsx";
import Sidenav from "../components/Sidenav.jsx";
import Footer from "../components/Footer.jsx";

export default function RootLayout() {
    const location = useLocation();

    return (
        <div className="layout">
            <Header />
            <Sidenav />
            <main className="main">
                <Outlet />
                {location.state?.from === "contact-success" && (
                    <p style={{ marginTop: "1rem" }} className="text-green-600">
                        Ви щойно надіслали форму зі сторінки "Контакти". Дані збережено.
                    </p>
                )}
            </main>
            <Footer />
        </div>
    );
}