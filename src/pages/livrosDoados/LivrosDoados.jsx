import livroProtagonista from  '../../assets/book.png'
import s from './livrosDoados.module.scss'

export default function LivrosDoados() {
    return(
        <>
        <section className={s.LivrosDoadosSection}>
            <h2>Livros Doados</h2>
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