interface Topic {
    id: number;
    author: User;
    title: string;
    body: string;
    createdAt: Date;
    liked: boolean;
    likes: number;
    comments: Array<Comment>;
    commentsCount: number;
}

export { Topic };