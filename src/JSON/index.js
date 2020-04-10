import users from './users.json';
import todos from './todos.json';
import comments from './comments.json';
import posts from './posts.json';
const allTypes = ['users', 'todos', 'posts', 'comments'];

export function getStaticJSON(type){
    const staticJSON = {
        comments,
        todos,
        posts,
        users
    }
    return allTypes.includes(type) ?  staticJSON[type] : [];
}


export function  getStaticTypes(){
    return allTypes
}