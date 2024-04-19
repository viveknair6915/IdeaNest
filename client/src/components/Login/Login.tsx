import { NavLink } from "react-router-dom";
export default function Login() {
    return (
        <div className="bg-cover bg-center h-screen flex flex-row" style={{backgroundImage: "url('signup.gif')"}}>
            <div className="w-1/2 h-full flex justify-center items-center flex-col">
                <h1 className="text-4xl text-white font-primaryFont">Hello</h1>
                <h1 className="text-2xl text-white font-primaryFont">Welcome Back!</h1>
                {/* <button onClick={(e)=>{
                        e.preventDefault()
                    }} className="bg-bgPrimaryBg text-white font-primaryFont font-bold  text-lg rounded px-3 py-2 flex items-center hover:px-5 hover:shadow-lg transition-all duration-300 ease-in-out">
                        Create Now!
                        </button> */}
            </div>
            <div className="w-1/2 h-full flex justify-center items-center bg-white shadow-2xl rounded-2xl m-1">
                <form action="">
                <section className="bg-white ">

            <div className="flex justify-center mx-auto">
                <img className="w-auto h-7 sm:h-8" src="" alt="" />
            </div>
            
            <div className="flex items-center justify-center mt-6 text-4xl font-primaryFont text-bgPrimary font-bold">
                <h1 className="hover:scale-110 transition-all">Log In</h1>
            </div>

            <div className="relative flex items-center mt-8">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>

                <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
            </div>

            

            <div className="relative flex items-center mt-6">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>

                <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
            </div>

            <div className="relative flex items-center mt-4">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

                <input type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
            </div>

            <div className="relative flex items-center mt-4">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

                <input type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Confirm Password" />
            </div>

            <div className="mt-6">
                <button className="hover:scale-110 transition-all w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize duration-300 transform bg-bgPrimary rounded-2xl hover:bg-bgPrimaryBg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Login
                </button>

                <div className="mt-6 text-center ">
                    <NavLink to="/signin" className="text-sm text-bgPrimary hover:underline hover:text-bgPrimaryBg dark:text-blue-400">
                        Dont have an account?
                    </NavLink>
                </div>
            </div>
      
</section>
                </form>
            </div>
</div>
    );
}
