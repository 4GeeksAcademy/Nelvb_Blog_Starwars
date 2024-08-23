import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Descripciones } from "./views/descripciones";
import { Favoritos } from "./views/favoritos";
import { PaginaNoEncontrada } from "./views/paginaNoEncontrada";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/descripciones/:type/:id" element={<Descripciones />} />
                        <Route path="/favoritos" element={<Favoritos />} />
                        {/* No importa qué ruta inexistente se intente acceder, siempre mostrará la vista de "Página No Encontrada". */}
                        <Route path="*" element={<PaginaNoEncontrada />} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
