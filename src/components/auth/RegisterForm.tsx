import FormField from "../form/FormField.tsx";
import { useRegisterForm } from "../../hooks/UseRegisterForm.ts"
function RegisterForm (){

    const {
        form,
        errors,
        status,
        handleChange,
        handleSubmit,
        resetForm,
        submitForm,
    } = useRegisterForm();

    return (
        <>
        {status !== "success" && (
            <form onSubmit={handleSubmit}>
                <FormField
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    disabled={status === "loading"}
                />

                <FormField
                    label="Password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    error={errors.password}
                    disabled={status === "loading"}
                />

                <FormField
                    label="Comfirm Password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    error={errors.confirmPassword}
                    disabled={status === "loading"}
                />
                <button type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "отправка..." : "зарегистрироваться"}
                </button>


                {status === "error" && (
                    <button onClick={submitForm}>Повторить</button>)}
                <button onClick={resetForm}>Очистить форму</button>
            </form>
        )}
    {status === "success" && (
        <>
            <p style={{color: "green"}}>
                Регистрация прошла успешно
            </p>
            <button onClick={resetForm}>
                Заполнить еще раз
            </button>
        </>
    )}
</>);
}

export default RegisterForm;

