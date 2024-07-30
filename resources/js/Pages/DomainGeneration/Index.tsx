import AppLayout from "@/Layouts/AppLayout";
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";

export default function Index() {
    return (
        <AppLayout>
            <section className="container mx-auto px-10 h-[80vh] mt-10 flex flex-row gap-10">
                <div>
                    <h2 className="text-xl font-bold mb-1">Generate Domain Names</h2>
                    <p className="text-base text-neutral-500 font-light mb-7">Please fill in this form so that we can have a better understanding of your brand.</p>
                    <form className="flex flex-col gap-5">
                        <TextInput name="keywords" label="Comma Seperated Keywords" placeholder="sleek, modern, aesthetic" />
                        <TextInput name="domains" label="Comma Seperated Domains" placeholder=".com, .dev, .net" />
                        <TextAreaInput name="description" label="Description" placeholder="A description of your business to help us understand your vision." />

                        <button>Generate</button>
                    </form>
                </div>
                <div>

                </div>
            </section>
        </AppLayout>
    );
}
