import { useState } from "react";
import type {RegisterFormData, FormErrors, RequestType} from "../types/register";
import { validateRegisterForm } from "../utils/validateRegisterForm";
import { registerUser } from "../api/registerUser.ts";

export function useRegisterForm(){
    const [form, setForm] = useState<RegisterFormData>({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<RequestType>("idle");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target;

        setForm ((prev) =>({
            ...prev,
            [name]: value,
        }));
        setErrors((prev)=> ({
            ...prev,
            [name]: undefined,
        }))
    }

    async function submitRegisterForm(){
        if (status === "loading") return;

        const validationErrors = validateRegisterForm(form);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        setStatus("loading");

        try {
            await registerUser(form);
            setStatus("success");
        } catch(error) {
            setStatus("error");
            if(error instanceof Error){
                if(error.message === "EMAIL_EXISTS"){
                    setErrors({email: "Email уже зарегистрирован"})
                } if(error.message === "SERVER_ERROR") {
                    setErrors({email: "Сервер недоступен. Попробуйте позже"})
                } if(error.message === "NETWORK_ERROR") {
                    setErrors({email: "Ошибка сети"})
                }
            }
        }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        submitRegisterForm();
    }


    function resetRegisterForm(){
        setForm({
            email:"",
            password: "",
            confirmPassword: "",
        });
        setErrors({});
        setStatus("idle");
    }


    return {
        form,
        errors,
        status,
        handleChange,
        handleSubmit,
        resetForm: resetRegisterForm,
        submitForm: submitRegisterForm,

    }
}

