function Login() {
  return (
    <>
      <h1 className="text-2xl text-[#414548] font-semibold">Login</h1>
      <form action="" className="mt-12">
        <input
          type="email"
          name="email"
          className="w-full p-2 pl-4 rounded-md border-solid border-[0.5px] border-[#d9d8d8] shadow-[0_0_6px_0_rgba(100,100,111,0.2)]"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          className="w-full p-2 pl-4 rounded-md border-solid border-[0.5px] border-[#d9d8d8] shadow-[0_0_6px_0_rgba(100,100,111,0.2)] mt-4 mb-12"
          placeholder="Password"
        />
        <a href="#" className="text-[#a4c4e0] text-[14px]">
          Forgot Password?
        </a>
      </form>
    </>
  );
}

export default Login;