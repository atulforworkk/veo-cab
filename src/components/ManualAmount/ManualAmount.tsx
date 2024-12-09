import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { initialValues } from "./constants";
const ManualAmount = () => {
  const Navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");
  const [buttonValue, setButtonValue] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value == "") {
      setButtonValue(false);
    }
  };

  //   const formik = useFormik({
  //     initialValues,
  //      validationSchema: Yup.object({
  //         manualAmoount: Yup.string().email("Invalid email address").required("Email is required "),
  //      }),
  //      onSubmit: (values) => {

  //      },
  //    });

  const handleClick = () => {
    Navigate("/payment");
  };
  return (
    <div>
      <h1 className="font-semibold text-xl m-1">Enter Amount Manually </h1>
      <input
        className="rounded-full w-full p-2 my-3"
        placeholder="Enter here"
        onChange={handleChange}
      />
{/* 
      {buttonValue ? (
        <button
          className="bg-[#0000330F] text-[#00083046] font-semibold p-2 w-full rounded-full my-3"
          onClick={handleClick}
          disabled
        >
          Proceed to pay
        </button>
      ) : ( */}
        <button
          className="bg-main-color text-white p-2 w-full rounded-full my-3 mx-2"
          onClick={handleClick}
        >
          Proceed to pay
        </button>
      {/* )} */}
    </div>
  );
};

export default ManualAmount;
