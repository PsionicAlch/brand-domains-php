import {useState, FormEvent} from "react";

import AppLayout from "@/Layouts/AppLayout";
import GlobeIcon from "@/Components/GlobeIcon";
import GenerationForm from "@/Components/GenerationForm";

import axios from "axios";
import toast from "react-hot-toast";
import {SplitString} from "@/Utility/StringUtility";
import DomainContainer from "@/Components/DomainContainer";

export default function Index() {
    const [loading, setLoading] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [generatedDomains, setGeneratedDomains] = useState<string[]>([]);

    const submitHandler = async (event: FormEvent<HTMLFormElement>, keywords: string, extensions: string, description: string) : Promise<void> => {
        event.preventDefault();

        if (!disabled) {
            setLoading(true);
            setGeneratedDomains([]);

            try {
                const response = await axios.post<{ domains: string[] }>(route('generate.post'), { keywords, extensions, description });
                const domains: string[] = [];

                for (let domain of response.data.domains) {
                    for (let extension of SplitString(extensions)) {
                        domains.push(domain.toLowerCase() + extension);
                    }
                }

                setGeneratedDomains(domains);
            } catch (error) {
                console.error(error);
                toast.error('There was an unexpected error!');
            }

            setLoading(false);
        }
    };

    return (
        <AppLayout>
            <section className="container mx-auto px-10 h-[80vh] flex flex-row gap-24 mb-10">
                <div className="flex-1 flex flex-col justify-center items-center">
                    <div className="w-full">
                        <h2 className="text-xl font-bold mb-1">Generate Domain Names</h2>

                        <p className="text-base text-neutral-500 font-light mb-7">
                            Please fill in this form so that we can have a better understanding of your brand.
                        </p>

                        <GenerationForm handleSubmit={submitHandler} disableSetter={setDisabled} loading={loading} />
                    </div>
                </div>
                {generatedDomains.length > 0 ? (
                    <div className={`flex-1 space-y-5 px-10 overflow-auto`}>
                        {generatedDomains.map((domain, index: number) => (<DomainContainer key={index}  domain={domain}/>))}
                    </div>
                ) : (
                    <div
                        className={`flex-1 flex flex-col justify-center items-center text-center gap-10 border-8 ${loading ? 'animate-pulse border-neutral-300' : 'border-neutral-200'} border-dashed rounded-xl select-none`}>
                            <GlobeIcon className={`size-32 ${loading ? 'text-neutral-300' : 'text-neutral-200'}`}/>
                            <h2 className={`text-3xl font-extrabold px-10 ${loading ? 'text-neutral-300' : 'text-neutral-200'}`}>Let's
                                find you the perfect domain for your brand!</h2>
                        </div>
                )}
            </section>
        </AppLayout>
    );
}
