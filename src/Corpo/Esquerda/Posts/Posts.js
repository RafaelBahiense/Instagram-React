import Post from "./Post/Post"

const posts = [{user : "meowed", profileImg : "meowed", img : "gato-telefone", likedBy : "respondeai", likedByProfileImg : "respondeai", likes : "101.523"},
{user : "barked", profileImg : "barked", img : "dog", likedBy : "adorable_animals", likedByProfileImg : "adorable_animals", likes : "99.159"}]

export default function Posts () {
    return (
        <div class="posts">
            {posts.map(object => <Post {...object} /> )}
        </div>
    );
}