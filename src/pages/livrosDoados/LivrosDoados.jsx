import axios from 'axios';
import livroProtagonista from  '../../assets/book.png'
import s from './livrosDoados.module.scss'
import { useState } from 'react';
import { useEffect } from 'react';


export default function LivrosDoados() {
        const [livros, setLivros] = useState([]);

        const puxarLivros = async() =>{
            const resposta = await axios.get("https://vnw-api.onrender.com/livrosdoados");       
            setLivros(resposta.data);
        }

        useEffect(()=>{
            puxarLivros();
        },[]);

    return(
        <>
        <section className={s.LivrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section id="conteudo" className={s.containerCards}>
            {livros.map((item) => (
                <section>
                    <img src={item.image_url} alt={`Imagem do livro ${item.titulo}`} />
                    <div>
                        <h3>{item.titulo}</h3>
                        <p>{item.autor}</p>
                        <p>{item.categoria}</p>
                    </div>
                </section>
            ))}
            </section>
        </section>
        </>
    )
    
}