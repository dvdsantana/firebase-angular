import { Creatable } from './Creatable';
import { Post } from './Post';

export class Comment {
    title: string;
    body: string;
    post: Post;
    created: Creatable;
}