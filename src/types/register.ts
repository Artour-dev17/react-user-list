export interface RegisterFormData {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface FormErrors {
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export type RequestType = "idle" | "loading" | "success" | "error";