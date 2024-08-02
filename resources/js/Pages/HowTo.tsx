import StepsCard from "@/Components/StepsCard";
import AppLayout from "@/Layouts/AppLayout";

export default function HowTo() {
    return (
        <AppLayout>
            <section className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mt-28 mb-10">How to generate brandable domain names</h2>

                <StepsCard
                    title="Step 1"
                    text='Click on "generate".'
                    img="/images/step-1.avif"
                    alt="Arrow pointing at generate navbar link."
                />

                <StepsCard
                    title="Step 2"
                    text="Add keywords that describe your brand's feel and vision."
                    img="/images/step-2.avif"
                    alt="Arrow pointing at keywords text input field."
                />

                <StepsCard
                    title="Step 3"
                    text="Add the domain extensions that you might want to use for your brand's domain name"
                    img="/images/step-3.avif"
                    alt="Arrow pointing at domain extensions text input field."
                />

                <StepsCard
                    title="Step 4"
                    text='Add a short description about the vision you have for your brand. (max 250 characters)'
                    img="/images/step-4.avif"
                    alt="Arrow pointing at description text area field."
                />

                <StepsCard
                    title="Step 5"
                    text={"Click on the \"Generate\" button. The generation process takes a moment so don't worry if you don't immediately see a list of domain names pop up. You will know that it's working because the \"Generate\" button will now be a \"Generating...\" button."}
                    img="/images/step-5.avif"
                    alt="Arrow pointing at Generate button."
                />

                <StepsCard
                    title="Step 6"
                    text='A list of domain names has popped up. You will receive 25 recommended domain names per domain extension. You can now scroll through the list of domain names to see if there are any that tickle your fancy'
                    img="/images/step-6.avif"
                    alt="Arrow pointing at generated domain names."
                />

                <StepsCard
                    title="Step 7"
                    text={"Once you see a domain name that you really like, you can click on \"Check Availability\" to see if it's available."}
                    img="/images/step-7.avif"
                    alt="Arrow pointing at generated domain names showing their availability."
                />

                <StepsCard
                    title="Step 8"
                    text='Once you found the right domain name for your brand you can click on the "Buy Domain" button. This will take you to NameCheap where you can buy the domain name along with things like web hosting so that you can get up and running with your new venture.'
                    img="/images/step-8.avif"
                    alt="Arrow pointing at buy domain button."
                />
            </section>
        </AppLayout>
    )
}
