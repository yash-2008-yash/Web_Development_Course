"use client"
import { useForm } from "react-hook-form"

export default function Home() {

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    let request = await fetch("/api",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }
    )
    let response = await request.json()
    console.log(response)
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className='text-4xl text-center m-5'>FORM</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 justify-center items-center'>
        <input type='text' {...register("username")} placeholder='enter username' className='max-w-[20vw] pl-5 border border-white' />
        <input type='password' {...register("password")} placeholder='enter password' className='max-w-[20vw] pl-5 border border-white' />

        <button type="submit" className='bg-green-900 px-3 py-1'>Submit</button>
      </form>
    </div>
  )
}