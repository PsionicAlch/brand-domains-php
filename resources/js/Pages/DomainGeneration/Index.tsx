import {useState, useEffect, FormEvent} from "react";

import AppLayout from "@/Layouts/AppLayout";
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import GlobeIcon from "@/Components/GlobeIcon";

import validDomainExtensions from "@/Data/ValidDomainExtensions";
import axios from "axios";

// type GeneratedDomain = {
//     name: string;
//     available: boolean;
// }

const validateKeywordAllowedCharacters = (keyword: string): boolean => {
    const allowedCharsRegex = /^[a-zA-Z0-9_!?#,."' ]+$/;

    return allowedCharsRegex.test(keyword);
};

const retrieveInvalidCharacters = (keyword: string): string => {
    return keyword.split('').filter(char => (!validateKeywordAllowedCharacters(char))).join('');
}

const validateKeywordTwoWordsMax = (keyword: string): boolean => {
    const keywordList = keyword.split(' ');

    return keywordList.length <= 2;
};

const validateDomainIsValid = (domain: string): boolean => {
    return validDomainExtensions.includes(domain);
};

const validateDomainStartsWithFullstop = (domain: string): boolean => {
    return domain[0] === '.';
}

export default function Index() {
    const [keywords, setKeywords] = useState<string>('');
    const [keywordsErrors, setKeywordsErrors] = useState<string[]>([]);
    const [domains, setDomains] = useState<string>('');
    const [domainsErrors, setDomainsErrors] = useState<string[]>([]);
    const [description, setDescription] = useState<string>('');
    const [descriptionErrors, setDescriptionErrors] = useState<string[]>([]);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    // const [generatedDomains, setGeneratedDomains] = useState<GeneratedDomain[]>([]);

    const submitHandler = async (event: FormEvent) => {
        event.preventDefault();

        if (!disabled) {
            setLoading(true);

            try {
                const response = await axios.post(route('generate.post'), { keywords, description });

                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }
    };


    // Check keywords for any errors.
    useEffect(() => {
        setKeywordsErrors([]);

        if (keywords) {
            const keywordsList = keywords
                .split(',')
                .map(keyword => keyword.trim()) // Remove padding.
                .filter(keyword => keyword);    // Remove any keywords that are empty.

            for (let keyword of keywordsList) {
                if (!validateKeywordAllowedCharacters(keyword)) {
                    const invalidChars = retrieveInvalidCharacters(keyword);
                    setKeywordsErrors(errors => [`${keyword} can't contain "${invalidChars}"!`, ...errors]);
                }

                if (!validateKeywordTwoWordsMax(keyword)) {
                    setKeywordsErrors(errors => [`${keyword} can't contain more than 2 words!`, ...errors]);
                }
            }
        }
    }, [keywords]);

    // Check domains for any errors.
    useEffect(() => {
        setDomainsErrors([]);

        if (domains) {
            const domainsList = domains
                .split(',')
                .map(domain => domain.trim())
                .filter(domain => domain);

            for (let domain of domainsList) {
                if (!validateDomainStartsWithFullstop(domain)) {
                    setDomainsErrors(errors => ([`${domain} should start with a "."`, ...errors]));
                    continue;
                }

                if (!validateDomainIsValid(domain)) {
                    setDomainsErrors(errors => ([`${domain} is not in the list of valid domain extensions!`, ...errors]));
                }
            }
        }
    }, [domains]);

    // Check description for any errors.
    useEffect(() => {
        setDescriptionErrors([]);

        if (description) {
            if (description.length > 250) {
                setDescriptionErrors(errors => ['Please keep your description to 250 characters or less!', ...errors])
            }

            if (!validateKeywordAllowedCharacters(description)) {
                const invalidChars = retrieveInvalidCharacters(description);
                setDescriptionErrors(errors => [`Your description cannot contain ${invalidChars}`, ...errors]);
            }
        }
    }, [description]);

    useEffect(() => {
        setDisabled(false);

        if (keywordsErrors.length > 0 || domainsErrors.length > 0 || descriptionErrors.length > 0) {
            setDisabled(true);
            return;
        }

        if (keywords === '' || domains === '' || description === '') {
            setDisabled(true);
            return;
        }
    }, [keywords, domains, description]);

    return (
        <AppLayout>
            <section className="container mx-auto px-10 h-[80vh] flex flex-row gap-24 mb-10">
                <div className="flex-1 flex flex-col justify-center items-center">
                    <div className="w-full">
                        <h2 className="text-xl font-bold mb-1">Generate Domain Names</h2>

                        <p className="text-base text-neutral-500 font-light mb-7">
                            Please fill in this form so that we can have a better understanding of your brand.
                        </p>

                        <form className="flex flex-col gap-5" onSubmit={submitHandler}>
                            <TextInput
                                name="keywords"
                                label="Comma Seperated Keywords"
                                placeholder="sleek, modern, aesthetic"
                                value={keywords}
                                onChange={setKeywords}
                                errors={keywordsErrors}
                            />
                            <TextInput
                                name="domains"
                                label="Comma Seperated Domains"
                                placeholder=".com, .dev, .net"
                                value={domains}
                                onChange={setDomains}
                                errors={domainsErrors}
                            />
                            <TextAreaInput
                                name="description"
                                label="Description"
                                placeholder="A description of your business to help us understand your vision."
                                value={description}
                                onChange={setDescription}
                                errors={descriptionErrors}
                            />

                            <button
                                className="bg-black text-white py-2 rounded-xl hover:bg-neutral-800 disabled:bg-neutral-500 disabled:cursor-not-allowed"
                                disabled={disabled || loading}
                            >
                                Generate
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center gap-10 border-8 border-neutral-200 border-dashed rounded-xl select-none">
                    <GlobeIcon className="size-32 text-neutral-200"/>
                    <h2 className="text-3xl font-extrabold px-10 text-neutral-200">Let's find you the perfect domain for your brand!</h2>
                </div>
            </section>
        </AppLayout>
    );
}
