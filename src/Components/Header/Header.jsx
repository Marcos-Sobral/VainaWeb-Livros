import LogoLivros from "../../assets/logo.png";
import IconSearch from "../../assets/search.png";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Start from "../../pages/inicio/Inicio";
import LivrosDoados from "../../pages/livrosDoados/LivrosDoados";
import QueroDoar from "../../pages/queroDoar/QueroDoar";

import s from "./header.module.scss"

export default function Header() {
    return (
        <BrowserRouter>
            <header className="">
                <section className={s.header_logo}>
                    <img src={LogoLivros} alt="A imagem ilustra a logo do site, um livro aberto ao meio, tendo uma capa azul e folhas brancas" />
                    <h1>Livros Vai Na Web</h1>
                </section>
                <nav className="">
                    <ul className="">
                        <li className=""><Link to="/" href="">Inicio</Link></li>

                        <li className=""><Link to="/livrosDoados" href="">Livros Doados</Link></li>

                        <li className=""><Link to="/queroDoar" href="">Quero Doar</Link></li>
                    </ul>
                </nav>
                <section className={s.barraBusca}>
                    <input type="search" name="" id="" placeholder="O que você procura?" />
                    <button> <img src={IconSearch} alt="" /></button>
                </section>
            </header>

        <Routes>
            <Route path="/" element={<Start />}/>
            <Route path="/livrosDoados" element={<LivrosDoados />}/>
            <Route path="/queroDoar" element={<QueroDoar />}/>
        </Routes>

        </BrowserRouter>
    )
}