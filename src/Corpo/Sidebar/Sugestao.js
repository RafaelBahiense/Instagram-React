import Usuario from "./Usuario"

export default function Sugestao (props) {
    return (
        <div class="sugestao">
            <Usuario {...props}/>
            <div class="seguir">Seguir</div>
        </div>
    );
}