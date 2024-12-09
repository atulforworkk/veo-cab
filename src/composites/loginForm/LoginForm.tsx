import { Button, Input } from "@mantine/core";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { initialValues } from "./constants";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { login } from "@/actions/login";
type Props = {};

const LoginForm = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>()


  const formik = useFormik({
   initialValues,
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password should be valid  "),
    }),
    onSubmit: (values) => {
      // dispatch(login({
      //   username: 'emilys',
      //   password: 'emilyspass',
      // }))
      dispatch(login(values))
      console.log("values given out,",values);
    },
  });
  const {values}= formik;
  console.log("🚀 ~ LoginForm ~ values:", values)
  return (
<div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold text-center ">
        Login
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className=""
      >
        <div className="">      
          <label htmlFor="">Username</label>
          <Input
          placeholder="Username"
          name="username" 
        className="w-full sm:w-96"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && formik.errors.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="text-red-500 text-sm ">
            {formik.errors.username}
          </div>
        ) : null}
        </div>
  
        <div className="">     
          <label htmlFor="password">Password</label>
        <Input
          placeholder="Password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-sm ">
            {formik.errors.password}
          </div>
        ) : null}
        </div>

        <Button
          type="submit"
          className="w-96  bg-main-color rounded-full hover:bg-custom-Purple my-4 "
         
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
