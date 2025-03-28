import axios from 'axios';
import livroProtagonista from  '../../assets/book.png'
import s from './livrosDoados.module.scss'

export default function LivrosDoados() {

    const pegarDados = async() => {
        let titulo, categoria, autor, image_url;

        const endPointApi = "https://vnw-api.onrender.com/livrosdoados";
        const resposta = await axios.get(endPointApi);
        resposta.data.forEach(i => {
           autor = i["autor"];
           titulo = i["titulo"];
           categoria = i["categoria"];
           image_url = i["image_url"];
        });
        console.log(autor);
    }
    return(
        <>
        <section className={s.LivrosDoadosSection}>
            <h2>Livros Doados</h2>
            <button onClick={pegarDados}>OI</button>
            <section className={s.containerCards}>
                <section>
                    <img src={livroProtagonista} alt="capa do livro O protagonista, escrito por Sussane Andrade" />
                    <div>
                        <h3>O protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>
                <section>
                    <img src={livroProtagonista} alt="capa do livro O protagonista, escrito por Sussane Andrade" />
                    <div>
                        <h3>O protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>
                <section>
                    <img src={livroProtagonista} alt="capa do livro O protagonista, escrito por Sussane Andrade" />
                    <div>
                        <h3>O protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>
            </section>
        </section>
       
        </>
    )
    
}