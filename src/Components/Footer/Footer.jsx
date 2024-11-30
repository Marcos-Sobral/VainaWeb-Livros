import s from './footer.module.scss'
import logoFacebook from '../../assets/facebook-icon.png'
import logoTwitter from '../../assets/Twitter-icon.png'
import logoYoutube from '../../assets/youtube-icon.png'
import logoLinkedin from '../../assets/linkedin-icon.png'
import logoInstagram from '../../assets/instagram-icon.png'

export default function Footer(){
    return(
        <footer className={s.footer}>
            <section className={s.contatosFooter}>
                <p>4002-8922</p>
                <nav className="">
                    <a href=""><img src={logoFacebook} alt="Imagem branca da logo do Facebook" /></a>
                    <a href=""><img src={logoTwitter} alt="Imagem branca da logo do Twitter" /></a>
                    <a href=""><img src={logoYoutube} alt="Imagem branca da logo do Youtube" /></a>
                    <a href=""><img src={logoLinkedin} alt="Imagem branca da logo do Linkedin" /></a>
                    <a href=""><img src={logoInstagram} alt="Imagem branca da logo do Instagram" /></a>
                </nav>
            </section>
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}