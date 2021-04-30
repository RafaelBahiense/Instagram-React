import Story from "./Story";
import Setinha from "./Setinha";

const stories = [{user : "9gag", img : "9gag"},{user : "meowed", img : "meowed"},{user : "barked", img : "barked"},{user : "nathanwpylestrangeplanet", img : "nathanwpylestrangeplanet"},
{user : "wawawicomics", img : "wawawicomics"},{user : "respondeai", img : "respondeai"},{user : "filomoderna", img : "filomoderna"},{user : "memeriagourmet", img : "memeriagourmet"}]

export default function Stories () {
    return (
        <div class="stories">
            {stories.map(object => <Story img={object.img} user={object.user}/>)}
            <Setinha />
        </div>
    );
}