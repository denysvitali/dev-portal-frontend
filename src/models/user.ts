interface User {
    username: string;
    givenName: string;
    lastName: string;
    admin: boolean;
    createdAt: Date;
    details: UserDetails;
}

interface UserDetails {
    department: string;
    email: string;
}
