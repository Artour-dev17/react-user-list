import ErrorMessage from "../ErrorMessage.tsx";

interface Props {
    error: string | null;
    onRetry: () => void;
}

function UsersError({error, onRetry}: Props){
    return(
        <>
            <ErrorMessage message={error} />
            <button onClick={onRetry}>Повторить</button>
        </>

    );
}

export default UsersError;