export default function Story (props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={`assets/img/${props.img}.svg`} />
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    );
}