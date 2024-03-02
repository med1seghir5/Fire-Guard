import Image from "next/image";
import img from "/public/undraw_login_re_4vu2 (1) 1.svg";
import img2 from "/public/Group 19.svg";
import Link from "next/link";

function Login() {
  const handleLogin = async () => {
    try {
      // Replace 'your-api-endpoint' with your actual API endpoint
      const response = await axios.post('/api/v1/auth/login', {
        // Include any data needed for login (e.g., email and password)
        email: 'your-email@example.com',
        password: 'your-password',
      });

      // Handle the response as needed (e.g., redirect on successful login)
      console.log('Login successful', response.data);
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error('Login failed', error.message);
    }
  };
  return (
    <main>
      <div className="flex flex-row items-center justify-center bg-[#fffff] border-b-1 shadow-md hover:shadow-lg shadow-slate-300 w-full md:flex justify-between">
        <div className="flex items-center justify-center">
        <Link href="/">
          <Image
            src={img2}
            alt="logo"
            className="flex flex-col items-center justify-center ml-16 sm:flex items-center justify-center w-80 flex-shrink"
          />
        </Link>
        </div>

        <div className="flex flex-row items-center justify-between ml-36 space-x-10 font-bold flex-grow hidden md:block">
          <Link href="/">
            <button >Home</button>
          </Link>
          <Link href="/">
            <button>FAQ</button>
          </Link>
          <Link href="/about">
            <button>About</button>
          </Link>
        </div>

        <div className="flex items-center space-x-3 mr-16 font-bold">
          <Link href="/login">
            <button className="bg-[#FFFFFF] rounded-full border-2 border-black px-6 py-1 hidden md:block">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="bg-[#000000] text-[#ffff] rounded-full px-6 py-1 hidden md:block">
              Try for Free
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center p-24 justify-between md:flex md:flex-row md:items-center md:p-24 md:justify-between">
        <div>
          <Image src={img} alt="logo" className="hidden md:block" />
        </div>

        <div className="flex flex-col space-y-2 font-poppins">
          <div className="text-center font-bold text-5xl pb-10 md:text-center font-bold text-2xl pb-10">
            Login
          </div>
          <div className="text-left font-bold">Your Email Address</div>
          <div>
            <label className="space-x-1 ">
              <input
                placeholder="Your email"
                id="text"
                type="text"
                className="border-2 pl-3 border-[#CDCDCD] bg-[#ffff] rounded-full w-96 py-2"
              />
            </label>
          </div>

          <div className="font-bold">Your Password</div>
          <div className="mt-3">
            <label className="space-x-1">
              <input
                placeholder="Password"
                id="text"
                type="password"
                className="border-2 pl-3 border-[#CDCDCD] rounded-full bg-[#ffff] w-96 py-2"
              />
            </label>
          </div>
          <div className="space-y-2 pt-10">
            <div>
              <button className="font-bold rounded-full w-96 h-12 text-[#575757] bg-[#40B59F]">
                Login
              </button>
            </div>

            <div>
              <button className="rounded-full w-96 h-12 border-2 border-[#40B59F] text-[#000000] bg-[#ffff] font-bold">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
