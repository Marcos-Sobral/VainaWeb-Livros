import s from "./QueroDoar.module.scss"
import bookIcon from '../../assets/Frame.png'
import { useState } from "react"
import axios from "axios";

export default function QueroDoar() {

    const [titulo, setTitulo] = useState();
    const [categoria, setCategoria] = useState();
    const [autor, setAutor] = useState();
    const [image_url, setImage_url] = useState();

    const capturaTitulo = (e) =>{
        setTitulo(e.target.value);
    }
    const capturaCategoria = (e) =>{
        setCategoria(e.target.value);
    }
    const capturaAutor = (e) =>{
        setAutor(e.target.value);
    }
    const capturaImage = (e) =>{
        setImage_url(e.target.value);
    }

    const enviarDados = async() =>{
        try {
            const endPointApi = "https://vnw-api.onrender.com/doar";
            const dados = {
                titulo,
                categoria,
                autor,
                image_url
            }
            const resposta = await axios.post(endPointApi, dados);
            console.log("Dados enviados com sucesso:", resposta.data);
            alert("Livro cadastrado com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar dados:", erro); 
            alert("Ocorreu um erro ao enviar os dados. Tente novamente.");
        }
    }

    return(
        <>
            <section className={s.QueroDoarSection}>
                <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
                <p>{titulo}</p>
                <p>{categoria}</p>
                <p>{autor}</p>
                <p><img src={image_url} alt="" srcset="" /></p>
                <section className={s.formsDoarSection}>
                    <div className={s.formDoarTitulo}>
                        <img src={bookIcon} alt="Ícone de Livro" />
                        <p>Informações do Livro</p>
                    </div>
                    <form action="">
                        <input type="text" name="" id="" placeholder="Titulo" onChange={capturaTitulo}/>
                        <input type="text" name="" id="" placeholder="Categoria" onChange={capturaCategoria}/>
                        <input type="text" name="" id="" placeholder="Autor" onChange={capturaAutor}/>
                        <input type="text" name="" id="" placeholder="Link da imagem" onChange={capturaImage}/>
                    </form>
                    <div className={s.formDoarSubmit}>
                        <button type="submit" onClick={enviarDados}>Doar</button>
                    </div>
                </section>
            </section>
        </>
    )
    
}