import { Button, Input } from "@mantine/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { initialValues } from "./constants";
type Props = {};

const Login = (props: Props) => {
    const formik = useFormik({
        initialValues,
         validationSchema: Yup.object({
           password: Yup.string()
             .min(8, "Password must be at least 8 characters")
             .required("Password should be valid  "),
         }),
         onSubmit: (values) => {

 
         },
       });
       const {values}= formik;
  return (
      <div className="bg-white w-11/12 p-4">
        <div>
          <h1 className="text-4xl font-semibold">Login</h1>
          <p>Login to access your account</p>
        </div>
     
      <form
        onSubmit={formik.handleSubmit}
        className=""
      >
          <label htmlFor="">Email</label>
          <Input
          placeholder="Username"
          name="username" 
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
        <div className="relative">
  <label htmlFor="username" className="label-style">
    Email
  </label>
  <Input
    id="username"
    placeholder="Username"
    name="username"
    type="text"
    value={formik.values.username}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    className="input-style"
  />
  {formik.touched.username && formik.errors.username ? (
    <div className="text-red-500 text-sm">
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
          className="w-96  bg-main-color  hover:bg-custom-Purple my-4 "
         
        >
          Login
        </Button>
      </form>
      </div>
  );
};

export default Login;
