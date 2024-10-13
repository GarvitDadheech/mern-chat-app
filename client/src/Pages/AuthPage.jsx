import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function AuthPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw]">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="flex justify-center p-3 bg-white w-full mt-10 mb-4 rounded-lg border">
          <h1 className="text-4xl font-sans">Welcome to ChatterBox!</h1>
        </div>
        <div className="bg-white w-full p-4 rounded-lg border">
          <div className="flex mb-4">
            <button
              className={`flex-1 py-2 rounded-full ${
                activeTab === "login"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 rounded-full ml-2 ${
                activeTab === "signup"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>
          <div>
            {activeTab === "login" ? <Login /> : <Signup />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;