import Acoes from "./Acoes";
import Curtidas from "./Curtidas";

export default function Fundo (props) {
    return (
        <div class="fundo">
            <Acoes />
            <Curtidas {...props} />
            {/* <Curtidas likedBy={props.likedBy} likedByProfileImg={props.likedByProfileImg} likes={props.likes}/> */}
        </div>
    );
}