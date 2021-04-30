export default function Usuario (props) {
    return (
        <div class="usuario">
            <img src={`assets/img/${props.profileImg}.svg`} />
            <div class="texto">
                {userType(props)}
            </div>
        </div>
    );
}

function userType(props) {
    return props.nick === "" 
    ? <><strong>{props.user}</strong> {props.nick}</> 
    : <><div class="nome">{props.user}</div><div class="razao">{props.reason}</div></>;
}