import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

type DomainContainerProps = {
    domain: string;
};

export default function DomainContainer({ domain }: DomainContainerProps) {
    const [available, setAvailable] = useState<
        "Unknown" | "Available" | "Unavailable"
    >("Unknown");
    const [checking, setChecking] = useState<boolean>(false);
    const [color, setColor] = useState<"neutral" | "red" | "emerald">(
        "neutral"
    );
    const affiliateLink = "https://namecheap.pxf.io/EKnjJK";
    const namecheapLink = `https://www.namecheap.com/domains/registration/results/?domain=${domain}`;

    const checkAvailability = async () => {
        setChecking(true);

        try {
            const response = await axios.get<{ available: boolean }>(
                route("generate.available", { domain: domain })
            );
            if (response.data.available) {
                setAvailable("Available");
                setColor("emerald");
            } else {
                setAvailable("Unavailable");
                setColor("red");
            }
        } catch (error) {
            console.error(error);
            toast("An unexpected error occurred.");
        }

        setChecking(false);
    };

    return (
        <div
            className={`w-full rounded-lg border border-${color}-200 shadow-md text-${color}-500 text-xs flex flex-row items-center justify-between py-3 px-5`}
        >
            <div>
                <h3 className="text-sm font-bold mb-2 md:text-base">
                    {domain}
                </h3>
                <p className="text-xs md:text-base">
                    Availability: <b>{available}</b>
                </p>
            </div>
            {available === "Unknown" ? (
                <button
                    disabled={checking}
                    onClick={checkAvailability}
                    data-umami-event="Check Domain Availability"
                    data-umami-event-domain={domain}
                    className="text-xs md:text-base"
                >
                    {checking ? "Checking..." : "Check Availability"}
                </button>
            ) : available === "Available" ? (
                <a
                    href={`${affiliateLink}?url=${encodeURIComponent(
                        namecheapLink
                    )}`}
                    target="_blank"
                    data-umami-event="Buy Domain"
                    data-umami-event-domain={domain}
                    className="text-xs md:text-base"
                >
                    Buy Domain
                </a>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`size-6`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                    />
                </svg>
            )}
        </div>
    );
}
