import MyCard from "@/components/card";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { data } from "./content";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="columns-3 max-md:columns-2 max-sm:columns-1 gap-4 space-y-4">
          {data.map((item, index) => (
            <div key={index} className="break-inside-avoid">
              <MyCard {...item} />
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
