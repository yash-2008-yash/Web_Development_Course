import LikeButton from "./components/LikeButton";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-5xl font-bold">BLOG POST</h1>
      <div className="blog px-40 py-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta distinctio expedita alias facere ducimus vel adipisci voluptate temporibus? Repellendus esse doloremque placeat veniam saepe ducimus ratione accusantium qui beatae ex. Alias hic culpa consequuntur libero ut, porro repellat ducimus quos nesciunt voluptatum placeat rem illum dolorem delectus soluta obcaecati quisquam totam molestias dolorum quaerat quas consectetur eveniet? Fugit debitis eos, eaque earum repellendus enim quibusdam voluptatem numquam dicta quia omnis possimus obcaecati porro itaque, vel aliquid, nam beatae! Deleniti magni autem perspiciatis voluptates modi fuga sapiente id ipsam quidem deserunt numquam alias voluptatem quibusdam architecto corporis, hic quod, odio obcaecati dolorum quam nesciunt assumenda recusandae fugit repellendus. At corrupti numquam, consequuntur doloribus dolor dolorem veritatis laudantium nisi excepturi eius beatae voluptatum tempore, officiis quasi eos, unde eaque? Praesentium iste, fugit expedita aspernatur earum corporis accusantium iusto voluptates impedit, aliquid laudantium consectetur temporibus sequi! Repellendus optio in ea libero neque obcaecati aspernatur dignissimos inventore ipsum, repudiandae ad dolores alias at veritatis cum labore vel quae recusandae sit quisquam eaque beatae ipsa nobis. Impedit laborum ullam illum, quaerat laudantium porro repellat molestias delectus optio eveniet. Perferendis laborum repellat nam labore. Minus voluptas, dolorem quae iste consectetur consequatur obcaecati perferendis quas nisi.</p>
      </div>

      <LikeButton />
    </div>
  );
}
