import MyCard from "@/components/card";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  const data = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vel provident cum illum reiciendis. Illo placeat doloribus, voluptates quia aspernatur culpa saepe nostrum ut, laborum earum id distinctio sint voluptatem! Earum ducimus quod nisi quas sapiente ex assumenda esse quidem non fugit eos qui explicabo neque quo, labore maiores aliquam nihil sunt, culpa inventore eaque? Quasi officia consequatur repellat, iure aperiam soluta minima et minus debitis cumque! Voluptatum cum aut deleniti tenetur libero. Impedit autem alias magnam natus iste commodi, suscipit iure unde velit ipsam, recusandae doloremque. Deserunt quos odio reiciendis. Aliquid, corporis incidunt voluptate perferendis nihil repellat deserunt aperiam?",
      author: "@icelink39",
      authorName: "IceLink",
      likes: 942,
      tags: [],
    },
    {
      text: "Labore maiores aliquam nihil sunt, culpa inventore eaque? Quasi officia consequatur repellat, iure aperiam soluta minima et minus debitis cumque! Voluptatum cum aut deleniti tenetur libero. Impedit autem alias magnam natus iste commodi, suscipit iure unde velit ipsam, recusandae doloremque. Deserunt quos odio reiciendis. Aliquid, corporis incidunt voluptate perferendis nihil repellat deserunt aperiam?",
      author: "@icelink39",
      authorName: "IceLink",
      likes: 942,
      tags: [],
    },
    {
      text: "Labore maiores aliquam nihil sunt, culpa inventore eaque? Quasi officia consequatur repellat, iure aperiam soluta minima et minus debitis cumque! Voluptatum cum aut deleniti tenetur libero. Impedit autem alias magnam natus iste commodi, suscipit iure unde velit ipsam, recusandae doloremque. Deserunt quos odio reiciendis. Aliquid, corporis incidunt voluptate perferendis nihil repellat deserunt aperiam?",
      author: "@icelink39",
      authorName: "IceLink",
      likes: 942,
      tags: [],
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vel provident cum illum reiciendis. Illo placeat doloribus, voluptates quia aspernatur culpa saepe nostrum ut, laborum earum id distinctio sint voluptatem! Earum ducimus quod nisi quas sapiente ex assumenda esse quidem non fugit eos qui explicabo neque quo, labore maiores aliquam nihil sunt, culpa inventore eaque? Quasi officia consequatur repellat, iure aperiam soluta minima et minus debitis cumque! Voluptatum cum aut deleniti tenetur libero. Impedit autem alias magnam natus iste commodi, suscipit iure unde velit ipsam, recusandae doloremque. Deserunt quos odio reiciendis. Aliquid, corporis incidunt voluptate perferendis nihil repellat deserunt aperiam?",
      author: "@icelink39",
      authorName: "IceLink",
      likes: 942,
      tags: [],
    },
   
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vel provident cum illum reiciendis. Illo placeat doloribus, voluptates quia aspernatur culpa saepe nostrum ut, laborum earum id distinctio sint voluptatem! Earum ducimus quod nisi quas sapiente ex assumenda esse quidem non fugit eos qui explicabo neque quo, labore maiores aliquam nihil sunt, culpa inventore eaque? Quasi officia consequatur repellat, iure aperiam soluta minima et minus debitis cumque! Voluptatum cum aut deleniti tenetur libero. Impedit autem alias magnam natus iste commodi, suscipit iure unde velit ipsam, recusandae doloremque. Deserunt quos odio reiciendis. Aliquid, corporis incidunt voluptate perferendis nihil repellat deserunt aperiam?",
      author: "@icelink39",
      authorName: "IceLink",
      likes: 942,
      tags: [],
    },
  ];
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
