import { Button, Checkbox, Input, PasswordInput } from "@mantine/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { initialValues } from "./constants";
type Props = {
    heading:string
};

const Login = ({heading="Login"}: Props) => {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
    email: Yup.string().email().required().label("Email Address"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password should be valid"),
    }),
    onSubmit: (values) => {},
  });
  const { values } = formik;
  console.log("🚀 ~ Login ~ values:", values);
  return (
    <div className="bg-gradient-to-b from-start to-end h-screen flex items-center justify-center col-span-6">
      <div className="bg-white w-11/12 h-5/6 p-4 flex flex-col justify-center items-center">
        <div className="flex justify-start  flex-col w-11/12">
            <h1 className="text-3xl font-bold">{heading}</h1>
            <p className="py-4">Login to access your Account</p>
        </div>
        {/* Flexbox setup */}
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center justify-center w-full"
        >
          <div className="mb-4 w-11/12">
            <label htmlFor="username">Email</label>
            <Input
              placeholder="Input component"
              className="w-full"
              name="username"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="mb-4 w-11/12">
            <label htmlFor="password">Password</label>
            <PasswordInput
              placeholder="Password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm ">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="flex justify-between items-center w-11/12">
            <Checkbox label="Remember me"        radius="xs"
      size="xs"/>
            <p className="ml-4">Forgot Password</p>
          </div>

          <Button
            type="submit"
            className="w-11/12 bg-main-color hover:bg-custom-Purple my-4"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
