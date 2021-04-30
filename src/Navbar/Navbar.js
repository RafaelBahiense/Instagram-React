import InstagramMobile from "./InstagramMobile";
import Logo from "./Logo";
import LogoMobile from "./LogoMobile";
import Pesquisa from "./Pesquisa";
import Icones from "./Icones";
import IconesMobile from "./IconesMobile"

export default function Navbar () {
    return (
        <div class="navbar">
            <div class="container">
                <Logo />
                <LogoMobile />
                <InstagramMobile />
                <Pesquisa />
                <Icones />
                <IconesMobile />
            </div>
        </div>
    );
}