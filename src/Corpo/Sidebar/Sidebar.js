import Usuario from "./Usuario";
import Sugestao from "./Sugestao";

const user = {user : "catanacomics", nickname : "Catana", profileImg : "catanacomics"}
const users = [{user : "bad.vibes.memes", profileImg : "bad.vibes.memes", reason : "Segue você"},{user : "chibirdart", profileImg : "chibirdart", reason : "Segue você"},{user : "razoesparaacreditar", profileImg : "razoesparaacreditar", reason : "Novo no Instagram"},
{user : "adorable_animals", profileImg : "adorable_animals", reason : "Segue você"},{user : "smallcutecats", profileImg : "smallcutecats", reason : "Segue você"}]

export default function Siderbar () {
    return (
        <div class="sidebar">
            <Usuario {...user}/>

            <div class="sugestoes">
                <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
                </div>
                {users.map(object => <Sugestao {...object}/>)}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}