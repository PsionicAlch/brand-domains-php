type SocialReviewCardProps = {
    src: string;
    name: string;
    tag: string;
    review: string;
    link: string;
};

export default function SocialReviewCard({
    src,
    name,
    tag,
    review,
    link,
}: SocialReviewCardProps) {
    return (
        <div className="flex flex-col gap-5 border border-neutral-200 shadow-xl rounded-2xl px-10 py-5 w-96">
            <a href={link} target="_blank">
                <div className="flex flex-row items-center gap-5">
                    <div>
                        <img
                            src={src}
                            alt={`Profile picture of ${name}`}
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                    </div>
                    <div>
                        <p className="font-medium">{name}</p>
                        <small className="text-gray-500">@{tag}</small>
                    </div>
                </div>
            </a>
            <div>
                <p className="leading-relaxed text-gray-500 text-xs md:text-base">
                    {review}
                </p>
            </div>
        </div>
    );
}
