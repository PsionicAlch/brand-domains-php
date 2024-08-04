type StepsCardProps = {
    title: string;
    text: string;
    img: string;
    alt: string;
    id?: string;
}

export default function StepsCard({ title, text, img, alt, id = "" }: StepsCardProps) {
    return (
        <div className="flex flex-col text-start mb-10 gap-5 lg:gap-10 lg:flex-row lg:items-center lg:justify-between" id={id}>
            <div className="flex-1 space-y-2 lg:space-y-5">
                <h3 className="text-sm font-bold md:text-xl">{title}</h3>
                <p className="text-gray-500">{text}</p>
            </div>
            <div className="flex-1 bg-neutral-200 p-3 rounded-2xl shadow-lg lg:max-w-[40vw]">
                <img src={img} alt={alt} />
            </div>
        </div>
    );
}
