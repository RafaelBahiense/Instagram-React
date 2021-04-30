export default function Curtidas (props) {
    return (
        <div class="curtidas">
            <img src={`assets/img/${props.likedByProfileImg}.svg`} />
            <div class="texto">
                Curtido por <strong>{props.likedBy}</strong> e <strong>outras {props.likes} pessoas</strong>
            </div>
        </div>
    );
}