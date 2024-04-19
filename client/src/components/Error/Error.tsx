import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="mt-10 mx-5">
        <div className="flex justify-center items-center shadow-2xl p-6">
      <div>
        <h1 className="font-primaryFont text-bgPrimary text-6xl font-bold">
          Wrong Turn?
        </h1>
        <h1 className="text-xl font-primaryFont ">
          You look lost, stranger. You know what helps when you’re lost? A
          piping hot bowl of noodles. Take a seat, we’re frantically at work
          here cooking up something good.
          You can also go to your <i className="underline text-blue-500"><NavLink to="/">Sweet Home</NavLink></i>
        </h1>
      </div>

      <div>
        <img src="error.gif" alt="" />
      </div>
    </div>
    </div>
  );
};

export default ErrorPage;
