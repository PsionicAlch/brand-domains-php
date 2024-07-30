type TextInputProps = {
    name: string;
    label: string;
    placeholder?: string;
}

export default function TextInput({ name, label, placeholder = "" }: TextInputProps) {
    return (
        <div className="flex flex-col gap-2 text-neutral-500 focus-within:text-neutral-800">
            <label htmlFor={name} className="font-light">{label}</label>
            <div className="px-3">
                <input
                    type="text"
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    className="w-full rounded-lg border border-neutral-200 shadow-md focus:border-neutral-400 focus:ring-0 text-sm placeholder:text-neutral-400"
                />
            </div>
        </div>
    );
}
