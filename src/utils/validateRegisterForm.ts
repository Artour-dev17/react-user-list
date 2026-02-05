import type { RegisterFormData, FormErrors } from "../types/register.ts";

export function validateRegisterForm(data: RegisterFormData): FormErrors{
    const errors: FormErrors = {};

    if (!data.email){
        errors.email = "Email is required";
    }
    if (data.password.length < 6){
        errors.password = "Password must be at least 6 characters";
    }
    if (data.password !== data.confirmPassword){
        errors.confirmPassword = "Passwords do not match";
    }

    return errors;
}
