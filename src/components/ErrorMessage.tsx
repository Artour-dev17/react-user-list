interface ErrorMessageProps{
    message: string | null;
}

function ErrorMessage({message}: ErrorMessageProps){
    return <p style={{color: "red"}}>{message}</p>;
}

export default ErrorMessage;