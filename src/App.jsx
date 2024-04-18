import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Forms } from "./Forms";
import { Checkbox } from "./components/ui/checkbox";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <div className="border-2">
        {/* <h1 className="">Hii ! how are you ?</h1> */}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition:Bounce
        />
        <Forms />
        {/* <Checkbox
          id="terms"
          onCheckedChange={changeHandler}
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Offers
        </label>

        <br /> */}

      </div>
    </>
  );
}

export default App;
