type TextAreaInputProps = {
    name: string;
    label: string;
    placeholder?: string;
    error?: string;
    value: string,
    onChange: (value: string) => void;
    errors: string[];
}

export default function TextAreaInput({ name, label, placeholder = "", value, onChange, errors}: TextAreaInputProps) {
    let classes;
    if (errors.length > 0 && value !== '') {
        classes = 'caret-red-400 border-red-200 focus:!border-red-400 text-red-400';
    } else if (errors.length <= 0 && value !== '') {
        classes = 'caret-emerald-500 border-emerald-200 focus:!border-emerald-400 text-emerald-500';
    }else {
        classes = 'caret-neutral-400 border-neutral-200 focus:!border-neutral-400';
    }

    return (
        <div className="flex flex-col gap-2 text-neutral-500 focus-within:text-neutral-800">
            <label htmlFor={name} className="font-light">{label}</label>
            <div className="px-3">
                <textarea
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    className={`w-full rounded-lg border ${classes} shadow-md focus:ring-0 text-sm placeholder:text-neutral-400`}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                ></textarea>
                {errors && <ul className="mt-2 mx-2 text-red-500 text-sm list-disc">
                    {errors.map((error, index) => (<li key={index}>{error}</li>))}
                </ul>}
            </div>
        </div>
    );
}
