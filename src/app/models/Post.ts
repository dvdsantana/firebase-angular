import { Creatable } from './Creatable';
import { Comment } from './Comment';

export class Post {
    title: string;
    body: string;
    created: Creatable;
    comments: Array<Comment>;
}