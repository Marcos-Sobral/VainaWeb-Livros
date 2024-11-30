import s from "./QueroDoar.module.scss"
import bookIcon from '../../assets/Frame.png'

export default function QueroDoar() {
    return(
        <>
            <section className={s.QueroDoarSection}>
                <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
                <section className={s.formsDoarSection}>
                    <div className={s.formDoarTitulo}>
                        <img src={bookIcon} alt="Ícone de Livro" />
                        <p>Informações do Livro</p>
                    </div>
                    <form action="">
                        <input type="text" name="" id="" placeholder="Titulo" />
                        <input type="text" name="" id="" placeholder="Categoria" />
                        <input type="text" name="" id="" placeholder="Autor" />
                        <input type="text" name="" id="" placeholder="Link da imagem" />
                    </form>
                    <div className={s.formDoarSubmit}>
                        <button type="submit">Doar</button>
                    </div>
                </section>
            </section>
        </>
    )
    
}