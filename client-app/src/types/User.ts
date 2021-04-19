export interface User {
    userName: string;
    displayName: string;
    token: string;
}

export interface UserFormValues {
    email: string;
    password: string;
    displayName?: string;
    userName?: string;
}

export interface AccountFormError {
    show: boolean;
    message: string;
}
