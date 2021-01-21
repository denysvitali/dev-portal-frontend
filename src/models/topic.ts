interface Topic {
    id: number;
    author: User;
    title: string;
    body: string;
    createdAt: Date;
    upvotes: number;
    downvotes: number;
    comments: Array<Comment>;
    commentsCount: number;
}

export { Topic };