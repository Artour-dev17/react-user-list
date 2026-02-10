import ErrorMessage from "../ErrorMessage.tsx";

interface Props {
    error: string | null;
    onRetry: () => void;
}

function UsersError({error, onRetry}: Props){
    const message =
        error === "NETWORK_ERROR"
            ? "Проблемы с интернетом"
            : error === "HTTP_404"
                ? "Пользователи не найдены"
                : "Ошибка сервера";

    const canRetry =
        error === "NETWORK_ERROR" || error === "HTTP_500";
    return(
        <>
            <ErrorMessage message={message} />
            {canRetry && <button onClick={onRetry}>Повторить</button>}
        </>

    );
}

export default UsersError;