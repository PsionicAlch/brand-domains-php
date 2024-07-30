type TextAreaInputProps = {
    name: string;
    label: string;
    placeholder?: string;
    error?: string;
}

export default function TextAreaInput({ name, label, placeholder = ""}: TextAreaInputProps) {
    return (
        <div className="flex flex-col gap-2 text-neutral-500 focus-within:text-neutral-800">
            <label htmlFor={name} className="font-light">{label}</label>
            <div className="px-3">
                <textarea
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    className="w-full rounded-lg border border-neutral-200 shadow-md focus:border-neutral-400 focus:ring-0 text-sm placeholder:text-neutral-400"
                ></textarea>
            </div>
        </div>
    );
}
