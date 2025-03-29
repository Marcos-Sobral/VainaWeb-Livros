import axios from 'axios';
import livroProtagonista from  '../../assets/book.png'
import s from './livrosDoados.module.scss'
import { useState } from 'react';
import { useEffect } from 'react';


export default function LivrosDoados() {

        const [titulo, setTitulo] = useState([]);
        const [categoria, setCategoria] = useState([]);
        const [autor, setAutor] = useState([]);
        const [image_url, setImage_url] = useState([]);
        
        const endPointApi = "https://vnw-api.onrender.com/livrosdoados";

        const pegarDados = async() =>{
            try {                
                const dados = {
                    titulo,
                    categoria,
                    autor,
                    image_url
                }
    
                const resposta = await axios.get(endPointApi,dados);
                let array = resposta.data;
                console.log("Dados recebidos com sucesso!", array);
                
                let section =  window.document.getElementById("conteudo");
                section.innerHTML = resposta.data.map(i =>
                    `
                    <section>
                        <img src=${i[`image_url`]} />
                        <div>
                            <h3>${i[`titulo`]}</h3>
                            <p>${i[`autor`]}</p>
                            <p>${i[`categoria`]}</p>
                        </div>
                    </section>
                `
                );

                /*resposta.data.forEach(i => {
                    setTitulo(i["titulo"]);
                    setCategoria(i["categoria"]);
                    setAutor(i["autor"]);
                    console.log(i["autor"]);
                    setImage_url(i["image_url"]);
                    section.innerHTML = `
                        <section>
                            <img src=${image_url} />
                            <div>
                                <h3>${titulo}</h3>
                                <p>${autor}</p>
                                <p>${categoria}</p>
                            </div>
                        </section>
                    `
                });*/
            } catch (error) {
                console.log("Ocorreu algum erro no recebimento dos dados: ", error);
            }
        }
            
        //carregamento automatico da função ao carregar ou atualizar a pg
        useEffect(()=>{
            pegarDados();
        },[]);
    return(
        <>
        <section className={s.LivrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section id="conteudo" className={s.containerCards}>

            </section>
        </section>
       
        </>
    )
    
}