// import logo from "./logo.svg";
// import './App.css';
import Buttons from "./Buttons";

function AppBackground() {
  return (
    <div className="min-h-screen flex flex-col justify-center h-auto bg-[rgba(36,87,196,255)]">
      <div className="w-[30%] bg-white rounded-xl text-center m-auto p-4 shadow-lg">
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
          <a className="text-[#a4c4e0] text-[14px]">Forgot Password?</a>
          <Buttons value="Login"></Buttons>
        </form>
      </div>
    </div>
  );
}

export default AppBackground;
