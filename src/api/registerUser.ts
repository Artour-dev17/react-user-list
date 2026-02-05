import type { RegisterFormData } from "../types/register.ts";

export async function registerUser(data: RegisterFormData) {

    try{
        const response = await fetch("https://example.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            if (response.status === 409) {
                throw new Error("EMAIL_EXISTS");
            }
            throw new Error("SERVER_ERROR");
        }

        return response.json();
    } catch (error) {
        throw new Error("NETWORK_ERROR");
    }


}