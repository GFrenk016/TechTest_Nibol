export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-4 bg-gray-100  p-8 w-full max-w-md authCustom">
        <h1 className="text-2xl font-semibold pt-6">Login</h1>
        <p className="text-sm textCustom">Don&apos;t you have an account? <a className="text-black font-bold" href="">Signup</a></p>
        <form>
          <div className="mb-4">
            <input className="inputCustom w-full focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition duration-200" type="email" placeholder="Email" />
          </div>
          <div className="mb-4">
            <input className="inputCustom w-full focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition duration-200" type="password" placeholder="Password" />
          </div>
          <button className="btnCustom w-full p-2 mt-4 text-white" type="submit">Continue</button>
        </form>
        <a className="text-black font-medium mt-3 pb-3 text-center" href="">Forgot Password?</a>
      </div>
    </div>
  )
}