interface Props {
    onClick: ()=> void;
    disabled?: boolean;
}

function ReloadButton ({onClick, disabled}: Props){
    return (
        <button onClick={onClick} disabled={disabled}>Обновить список</button>
    )
}

export default ReloadButton;