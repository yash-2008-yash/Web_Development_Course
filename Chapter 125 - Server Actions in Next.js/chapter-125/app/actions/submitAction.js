'use server'

let greetUser = async (form) => {
  const name = form.get("name")
  console.log(`Hello, ${name}!`)
}

export default greetUser;