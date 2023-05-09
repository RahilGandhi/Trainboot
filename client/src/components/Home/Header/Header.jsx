import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="min-h-[calc(100vh-5.4rem)] flex md:flex-row-reverse md:items-center flex-col  md:justify-between">
      <div className="w-80 md:w-fit">
        <img src="images/header/header.png" alt="" />
      </div>

      <div className="flex flex-col gap-y-7 text-white md:gap-y-10">
        <h1 className="text-3xl md:text-5xl max-w-xs font-extrabold md:max-w-md ">
          Let's Learn New Course and Gain more skills
        </h1>
        <p className="max-w-md leading-7">
          Explore India's ground-breaking research and education now. Watch this
          space,as eligible study material will continue to be added as they
          become available.
        </p>
        <button
          className="btn flex gap-x-2 w-44 justify-center items-center md:mt-6"
          onClick={() => navigate("/verify-access-code")}
        >
          Get Started <BsArrowRight />
        </button>
      </div>
    </header>
  );
};

export default Header;
