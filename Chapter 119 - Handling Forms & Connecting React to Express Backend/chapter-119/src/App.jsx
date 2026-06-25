import { useForm } from "react-hook-form"

function App() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();

  const onSubmit = async (data) => {

    let formData = fetch(
      "http://localhost:3000/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }
    )

    let res = await formData.text

    console.log(data, res)
  }

  return (<>
    <h1 className='text-4xl text-center m-5'>FORM</h1>

    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 justify-center items-center'>
      <input type='text' placeholder='enter username' className='max-w-[20vw] pl-5 text-black'
        {...register("username", {
          required: { value: true, message: "Username field must be filled!" },
          minLength: { value: 3, message: "Minimum 3 characters required in username!" },
          maxLength: { value: 10, message: "Maximum 10 characters allowed in username!" }
        })}
      />

      <input type='password' placeholder='enter password' className='max-w-[20vw] pl-5 text-black'
        {...register("password", {
          required: { value: true, message: "Password field must be filled!" },
          minLength: { value: 8, message: "The password must be 8 characters long!" },
        })}
      />

      <button type="submit" disabled={isSubmitting} className='bg-green-900 px-3 py-1'>
        Submit
      </button>

      {errors.username &&
        <div className="text-red-600">
          WARNING: {errors.username.message}
        </div>
      }

      {errors.password &&
        <div className="text-red-600">
          WARNING: {errors.password.message}
        </div>
      }

      {isSubmitting &&
        <div className="text-blue-400">Loading...</div>
      }

      {isSubmitSuccessful &&
        <div className="text-green-400">Form submitted successfully!</div>
      }
    </form>
  </>)
}

export default App