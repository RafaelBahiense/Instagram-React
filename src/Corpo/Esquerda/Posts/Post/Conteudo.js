export default function Conteudo (props) {
    return (
        <div class="conteudo">
            <img src={`assets/img/${props.img}.svg`} />
        </div>
    );
}