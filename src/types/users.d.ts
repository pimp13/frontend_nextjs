export interface User {
    id: number;
    name: string;
    email: string;
    password?: string;
    created_at?: Date;
}


export interface UserList {
    users: User[];
}

export interface UserRegisterRequest {
    name: string;
    email: string;
    password: string;
}

export interface UserLoginRequest {
    email: string;
    password: string;
}