import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={`text-3xl`}>
            I am{" "}
            <span className={title({ color: "violet" })}>IceLink&nbsp;</span>
            and i am a web developer with over a year of experience, actively
            working on many projects. Despite my limited corporate experience, I
            have deep knowledge and skills in web development, which allows me
            to create high-quality and effective solutions.
          </h1>
        </div>
      </section>
    </DefaultLayout>
  );
}
