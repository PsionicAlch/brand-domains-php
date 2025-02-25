import AppLayout from "@/Layouts/AppLayout";

export default function Privacy() {
    const send_email = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        event.preventDefault();
        window.location.href = `mailto:${atob(
            "amVhbi1qYWNxdWVzQHBzaW9uaWNhbGNoLmNvbQ=="
        )}`;
    };

    return (
        <AppLayout>
            <main className="px-5 container mx-auto my-10 md:px-10">
                <h1 className="text-base font-bold mb-5 md:text-lg lg:text-2xl">
                    Privacy Policy for PsionicAlch
                </h1>

                <div className="space-y-2 mb-8">
                    <h2 className="text-sm font-bold md:text-base lg:text-xl">
                        Introduction
                    </h2>
                    <p className="px-0 md:px-10">
                        Welcome to PsionicAlch! Your privacy is important to us.
                        This Privacy Policy explains how we collect, use, and
                        protect your information when you use our website,{" "}
                        <a href={route("home")} className="hover:underline">
                            branddomains.psionicalch.com
                        </a>{" "}
                        (the "Site").
                    </p>
                </div>

                <div className="space-y-2 mb-8">
                    <h2 className="text-sm font-bold md:text-base lg:text-xl">
                        Information We Collect
                    </h2>

                    <div className="px-0 space-y-2 md:px-10">
                        <h3 className="text-sm font-bold md:text-base">
                            1. Personal Information:
                        </h3>
                        <p className="px-0 md:px-10">
                            We do not collect any personal information from
                            users of our Site. You can use our tool without
                            providing any personal data.
                        </p>
                    </div>

                    <div className="px-0 space-y-2 md:px-10">
                        <h3 className="text-sm font-bold md:text-base">
                            2. Analytics:
                        </h3>
                        <p className="px-0 md:px-10">
                            We use{" "}
                            <a
                                href="https://umami.is"
                                target="_blank"
                                className="hover:underline"
                            >
                                Umami
                            </a>
                            , an open-source analytics tool, to track anonymous
                            data about how our Site is used. This includes:
                        </p>
                        <ul className="px-10 list-disc md:px-20">
                            <li>
                                <p>Pages viewed</p>
                            </li>
                            <li>
                                <p>
                                    Specific events such as generating domain
                                    name suggestions
                                </p>
                            </li>
                            <li>
                                <p>Keywords used.</p>
                            </li>
                            <li>
                                <p>Domain extensions used</p>
                            </li>
                            <li>
                                <p>Descriptions provided</p>
                            </li>
                            <li>
                                <p>Domain names checked for availability</p>
                            </li>
                            <li>
                                <p>Domain names clicked on for purchase</p>
                            </li>
                        </ul>
                        <p className="px-0 md:px-10">
                            This data is collected to help us understand how our
                            Site is used and to prevent abuse. All data
                            collected is anonymous and cannot be traced back to
                            individual users. We do not share this data with any
                            third parties, and we self-host Umami on our own
                            server to ensure we have full control over it.
                        </p>
                    </div>

                    <div className="px-0 space-y-2 md:px-10">
                        <h3 className="text-sm font-bold md:text-base">
                            3. Cookies:
                        </h3>
                        <p className="px-0 md:px-10">
                            Our Site uses cookies for session management and
                            security purposes. Specifically, we use:
                        </p>
                        <ul className="px-10 list-disc md:px-20">
                            <li>
                                <p>
                                    <b>XSRF-TOKEN Cookie</b>: To protect against
                                    cross-site request forgery (CSRF) attacks.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>brand_domains_session Cookie</b>: To
                                    manage user sessions on the backend.
                                </p>
                            </li>
                        </ul>
                        <p className="px-0 md:px-10">
                            These cookies are not used for tracking purposes and
                            do not store any personal information.
                        </p>
                    </div>
                </div>

                <div className="space-y-2 mb-8">
                    <h2 className="text-sm font-bold md:text-base lg:text-xl">
                        How We Use Your Data
                    </h2>
                    <p className="px-0 md:px-10">
                        The data collected through Umami is used solely for the
                        following purposes:
                    </p>
                    <ul className="px-10 list-disc md:px-20">
                        <li>
                            <p>
                                To understand how our Site is used and to
                                improve its functionality
                            </p>
                        </li>
                        <li>
                            <p>To monitor for and prevent abuse of our Site</p>
                        </li>
                    </ul>
                </div>

                <div className="space-y-2 mb-8">
                    <h2 className="text-sm font-bold md:text-base lg:text-xl">
                        Data Protection
                    </h2>
                    <p className="px-0 md:px-10">
                        We are committed to protecting your data. We use
                        appropriate technical and organizational measures to
                        safeguard the data we collect. Since we do not collect
                        personal information, there is no personal data at risk.
                    </p>
                </div>

                <div className="space-y-2 mb-8">
                    <h2 className="text-sm font-bold md:text-base lg:text-xl">
                        Your Rights
                    </h2>
                    <p className="px-0 md:px-10">
                        Since we do not collect personal information, there are
                        no specific rights related to personal data that apply.
                        If you have any concerns or questions about the data we
                        collect through analytics, please{" "}
                        <a
                            href="javascript:void()"
                            onClick={send_email}
                            className="hover:underline"
                        >
                            email
                        </a>{" "}
                        us or message us on{" "}
                        <a
                            href="https://x.com/psionicalch"
                            target="_blank"
                            className="hover:underline"
                        >
                            𝕏
                        </a>
                        .
                    </p>
                </div>

                <div className="space-y-2 mb-8">
                    <h2 className="text-sm font-bold md:text-base lg:text-xl">
                        Third-Party Links
                    </h2>
                    <p className="px-0 md:px-10">
                        Our Site may contain links to third-party websites. We
                        are not responsible for the privacy practices or content
                        of these third-party sites. Please review the privacy
                        policies of any external sites you visit.
                    </p>
                </div>

                <div className="space-y-2 mb-8">
                    <h2 className="text-sm font-bold md:text-base lg:text-xl">
                        Changes to This Privacy Policy
                    </h2>
                    <p className="px-0 md:px-10">
                        We may update this Privacy Policy from time to time. Any
                        changes will be posted on this page with an updated
                        effective date. We encourage you to review this policy
                        periodically to stay informed about how we are
                        protecting your information.
                    </p>
                </div>

                <div className="space-y-2 mb-8">
                    <h2 className="text-sm font-bold md:text-base lg:text-xl">
                        Contact Us
                    </h2>
                    <p className="px-0 md:px-10">
                        If you have any questions or concerns about this Privacy
                        Policy, please contact us at:
                    </p>
                    <ul className="px-10 list-disc md:px-20">
                        <li>
                            <a
                                href="javascript:void()"
                                onClick={send_email}
                                className="hover:underline"
                            >
                                Email
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://x.com/psionicalch"
                                target="_blank"
                                className="hover:underline"
                            >
                                𝕏
                            </a>
                        </li>
                    </ul>
                </div>
            </main>
        </AppLayout>
    );
}
