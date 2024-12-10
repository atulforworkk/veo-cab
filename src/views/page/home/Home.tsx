import images from "images/images";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <img src={images.mainLogo} alt="" className="pt-16 pl-10" />
      <div>
        <div className="flex justify-between">
          {/* Left Section */}
          <div className="flex flex-col items-center justify-center  relative w-4/12">
            <div className="flex flex-col">
              <button
                className="bg-main-color text-white w-[352px] h-[60px] text-lg font-medium mb-12 hover:bg-[#cb7e0e]"
                onClick={() => {
                  navigate("/admin-login");
                }}
              >
                Admin Login
              </button>
              <button
                className="border border-main-color text-main-color w-[352px] h-[60px] font-medium hover:bg-main-color hover:text-white "
                onClick={() => {
                  navigate("/subadmin-login");
                }}
              >
                Sub Admin Login
              </button>
            </div>
            <h1 className="text-4xl font-bold text-[#121744] absolute bottom-0 ">
              Move with <br />
              <span className="text-main-color">Safety </span>
              to your destination.
            </h1>
          </div>

          {/* Right Section */}
          <div>
            <img
              src={images.homePageImg}
              alt="home Page image"
              className="w-[889.66px] h-[719.99px] px-14"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
