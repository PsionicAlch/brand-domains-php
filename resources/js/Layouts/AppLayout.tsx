import {PropsWithChildren} from "react";
import NavBar from "@/Components/NavBar";
import {Toaster} from "react-hot-toast";
import Footer from "@/Components/Footer";

export default function AppLayout({children}: PropsWithChildren) {
    return (
        <>
            <NavBar />

            {children}

            <Toaster position="top-right" />

            <Footer />
        </>
    )
}
