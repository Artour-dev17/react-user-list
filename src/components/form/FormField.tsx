interface Props {
    label: string,
    name: string,
    type?: string,
    value: string,
    error?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    disabled?: boolean;
}

function FormField({
    label,
    name,
    type = "text",
    value,
    error,
    onChange,
    disabled,
                   }:Props) {
    return (
        <div>
            <label>
                {label}
                <input
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                />
            </label>
            {error && <p>{error}</p>}
        </div>
    );
}

export default FormField;