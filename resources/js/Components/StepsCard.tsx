type StepsCardProps = {
    title: string;
    text: string;
    img: string;
    alt: string;
}

export default function StepsCard({ title, text, img, alt }: StepsCardProps) {
    return (
        <div className="flex flex-row items-center justify-between text-start mb-10 gap-10">
            <div className="flex-1 space-y-5">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-500">{text}</p>
            </div>
            <div className="flex-1 bg-neutral-200 p-3 rounded-2xl shadow-lg max-w-[40vw]">
                <img src={img} alt={alt} />
            </div>
        </div>
    );
}
