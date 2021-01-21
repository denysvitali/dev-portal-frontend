interface Comment {
    id: number;
    author: User;
    topic_id: number;
    parent_comment_id: number;
    parent_comment: Comment | null;
    content: string;
    created_at: Date;
    votes: number;
    replies: Array<Comment>;
}
