import {FormEvent, useEffect, useState} from "react";

import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import validDomainExtensions from "@/Data/ValidDomainExtensions";
import {SplitString} from "@/Utility/StringUtility";

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

const validateExtensionIsValid = (domain: string): boolean => {
    return validDomainExtensions.includes(domain);
};

const validateExtensionStartsWithFullStop = (domain: string): boolean => {
    return domain[0] === '.';
}

type GenerationFormProps = {
    handleSubmit: (event: FormEvent<HTMLFormElement>, keywords: string, extensions: string, description: string) => void;
    disableSetter: (disabled: boolean) => void;
    loading: boolean;
};

export default function GenerationForm({ handleSubmit, disableSetter, loading }: GenerationFormProps) {
    const [keywords, setKeywords] = useState<string>('');
    const [keywordsErrors, setKeywordsErrors] = useState<string[]>([]);
    const [extensions, setDomains] = useState<string>('');
    const [extensionsErrors, setDomainsErrors] = useState<string[]>([]);
    const [description, setDescription] = useState<string>('');
    const [descriptionErrors, setDescriptionErrors] = useState<string[]>([]);
    const [disabled, setDisabled] = useState<boolean>(false);

    // Check keywords for any errors.
    useEffect(() => {
        setKeywordsErrors([]);

        if (keywords) {
            const keywordsList = SplitString(keywords)    // Remove any keywords that are empty.

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

    // Check extensions for any errors.
    useEffect(() => {
        setDomainsErrors([]);

        if (extensions) {
            const extensionsList = SplitString(extensions);

            for (let extension of extensionsList) {
                if (!validateExtensionStartsWithFullStop(extension)) {
                    setDomainsErrors(errors => ([`${extension} should start with a "."`, ...errors]));
                    continue;
                }

                if (!validateExtensionIsValid(extension)) {
                    setDomainsErrors(errors => ([`${extension} is not in the list of valid domain extensions!`, ...errors]));
                }
            }
        }
    }, [extensions]);

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
        disableSetter(false);

        if (keywordsErrors.length > 0 || extensionsErrors.length > 0 || descriptionErrors.length > 0) {
            setDisabled(true);
            disableSetter(true);
            return;
        }

        if (keywords === '' || extensions === '' || description === '') {
            setDisabled(true);
            disableSetter(true);
            return;
        }
    }, [keywords, extensions, description]);

    return (
        <form className="flex flex-col gap-5" onSubmit={(e) => handleSubmit(e, keywords, extensions, description)}>
            <TextInput
                name="keywords"
                label="Comma Seperated Keywords"
                placeholder="sleek, modern, aesthetic"
                value={keywords}
                onChange={setKeywords}
                errors={keywordsErrors}
            />

            <TextInput
                name="extensions"
                label="Comma Seperated Domains"
                placeholder=".com, .dev, .net"
                value={extensions}
                onChange={setDomains}
                errors={extensionsErrors}
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
                className="text-xs bg-black text-white py-2 rounded-xl hover:bg-neutral-800 disabled:bg-neutral-500 disabled:cursor-not-allowed md:text-base"
                disabled={disabled || loading}
                data-umami-event="Domain Generate Button"
                data-umami-event-keywords={keywords}
                data-umami-event-extensions={extensions}
                data-umami-event-description={description}
            >
                {loading ? 'Generating...' : 'Generate'}
            </button>
        </form>
    );
}
