import DefaultLayout from "@/layouts/default";
import "./index.scss";

export default function DocsPage() {
  const tech = [
    "JavaScript",
    "Typescript",
    "Next.js",
    "UI/UX",
    "React",
    "React-Native",
    "Next",
    "Node.js",
    "Express.js",
    "Nest",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "REST-API",
    "SASS",
    "CSS",
    "HTML",
    "JavaScript",
    "Typescript",
    "Next.js",
    "UI/UX",
    "React",
    "React-Native",
    "Next",
    "Node.js",
    "Express.js",
    "Nest",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "REST-API",
    "SASS",
    "CSS",
    "HTML",
  ];

  return (
    <DefaultLayout>
      <section className="flex">
        <div className="tag-list">
          <div className="loop-slider">
            <div className="inner">
              {tech.map((item, i) => (
                <div className="tag" key={i}>
                  <span>#</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
