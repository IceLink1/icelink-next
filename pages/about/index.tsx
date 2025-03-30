import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="">
          <h1 className={`text-3xl`}>
            Привет! Меня зовут Салохиддин,<br /> и я – веб-разработчик, создающий
            современные и функциональные веб-приложения. Я увлечен
            программированием и стремлюсь разрабатывать удобные,
            производительные и эстетически привлекательные цифровые продукты.
            Несмотря на малый опыт работы, я активно работаю над собственными
            проектами, которые демонстрируют мой уровень владения современными
            технологиями. В своей работе я использую HTML, CSS, JavaScript,
            React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL и
            другие инструменты, необходимые для создания полноценных
            веб-приложений. Я уверенно работаю как с фронтендом, так и с
            бэкендом, что позволяет мне разрабатывать приложения «от и до» – от
            пользовательского интерфейса до серверной логики и баз данных.
          </h1>
        </div>
      </section>
    </DefaultLayout>
  );
}
