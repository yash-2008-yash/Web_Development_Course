import Script from "next/script"
import Image from "next/image"
import GOT from "../public/game-of-thrones.jpg"

export default function Home() {

  return (<>
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl">Hey, I am HOME page!</h1>
      <Image src={GOT} alt="" placeholder="blur" className="w-200"></Image>
    </div>

    <Script src="/script.js" strategy="lazyOnload"></Script>
  </>)
}