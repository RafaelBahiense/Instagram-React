import Topo from "./Topo";
import Conteudo from "./Conteudo";
import Fundo from "./Fundo/Fundo";

export default function Post (props) {
    return (
        <div class="post">
            <Topo {...props}/>
            <Conteudo {...props}/>
            <Fundo {...props}/>
        </div>
    );
}