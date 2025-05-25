export const publications = [
  {
    id: 1,
    slug: "java-docker-spring-epic",
    title: "Когда Java в Docker со Spring — живая трагикомедия",
    text: "Java, Docker и Spring — это как три друга, которые собираются сделать «просто проект».",
    content: `# Java: Пишешь "Hello World" — запускаешь через полчаса
      
      Когда ты решил начать писать на Java, ты ещё не знал, что твоё первое приложение будет весить **30 МБ**, хотя печатает всего одну строку.
      
      \`\`\`java
      public class HelloWorld {
          public static void main(String[] args) {
              System.out.println("Hello, world!");
          }
      }
      \`\`\`
      
      Вроде просто, да? Но потом тебе говорят: «Ну ты добавь Maven, Spring Boot, JPA, Lombok, MapStruct, Swagger…» — и ты уже не "Hello World", ты уже **"Goodbye Sanity"**.
      
      ---
      
      ## Этапы боли Java-разработчика:
      
      1. Поставил JDK — 300 МБ.
      2. Скачал IntelliJ IDEA — минус 2 гига.
      3. Добавил Spring Boot — приложение стартует 10 секунд. Если повезло.
      4. Подключил Hibernate — теперь дебажишь, откуда лезет **лишний LEFT JOIN**, который убивает твою базу.
      
      ---
      
      ## Ты не настоящий Java-разработчик, если:
      
      * Не видел \`NullPointerException\` во сне.
      * Не пробовал загуглить: *"Why does Spring Boot application hang on startup?"*
      * Не переживал existential crisis, глядя на \`StackOverflowError\`.
      
      ---
      
      ## Лучшие фразы Java-девелопера:
      
      * "Сейчас, только перезапущу контейнер."
      * "Проверь, ты точно autowire-ишь бин?"
      * "Это не баг, это фича JPA."
      
      ---
      
      ## Золотое правило:
      
      > Если ты не понимаешь, как работает Dependency Injection — не волнуйся, Spring тоже не всегда понимает.
      
      ---
      
      ## Заключение:
      
      Java — это не просто язык. Это **религия**. С аннотациями, конфигурацией и странными магиями Spring-а. Но зато стабильно, надёжно и можно работать на банковских проектах с тремя слоями абстракции, где каждый метод вызывает другой, который вызывает тот, что вызывает первый.
      
      > *И помни: если всё сломалось, просто увеличь heap.*
      
      \#Java \#SpringBoot \#BackendLife \#DevHumor`,
    author: "@icelink39",
    authorName: "IceLink",
    likes: 1423,
    views: 9231,
    comments: [
      {
        id: 1,
        text: "Пробовал сделать так же — теперь у меня Spring PTSD 😭",
        author: "@bug_hunter",
        authorName: "BugHunter",
        timestamp: "2024-01-10T08:22:00Z",
      },
    ],
    tags: ["Java", "Docker", "Spring", "backend", "devhumor"],
    createdAt: "2025-05-25T15:30:00Z",
  },
];
