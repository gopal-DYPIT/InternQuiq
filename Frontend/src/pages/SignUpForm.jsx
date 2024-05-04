import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { storage } from "../firebase";
// import { v4 as uuidv4 } from "uuid";
import { uploadBytes, ref} from "firebase/storage";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const storageRef = ref(storage, `images/${image.name}`);
    uploadBytes(storageRef, image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signed up!");
      alert("Signed up!");
      navigate("/");
    } catch (error) {
      console.log("Error signing up:", error);
      alert("Fill all details first", error);
    }
  };

  const handleContinueToSignin = () => {
    navigate("/");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-start"
      style={{ backgroundImage: "url(BG1.jpg)" }}
    >
      {/* <h1 className="text-4xl  text-white font-bold mt-8 mb-8 ml-2">Sign Up</h1> */}
      <h1 className="text-4xl text-purple-500 font-primaryRegular mt-8 mb-8 font-bold flex items-center  justify-center">
        Social Media App
      </h1>
      <div className="w-96 bg-white bg-opacity-50 rounded-md p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="file"
            >
              Upload Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="file"
              type="file"
              placeholder="Image"
              onChange={handleImageChange}
            />
            <button
              className="flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-opacity-50 rounded-lg shadow-sm px-4 py-2"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <button
              onClick={handleContinueToSignin}
              type="button"
              className="flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-opacity-50 rounded-lg shadow-sm px-4 py-2"
            >
              <span className="text-gray-700 font-medium">
                Continue to Signin
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
