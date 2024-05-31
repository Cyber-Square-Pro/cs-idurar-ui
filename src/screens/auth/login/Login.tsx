import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
// import yup from "../../../utils/validations/yup";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router";
// import { ROUTES } from "../../../utils/constants/routes";
// import { useLoginMutation } from "../../../utils/api/baseSlice";
// import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Button, Input, Password } from "../../../components/atoms";
import { LoginSchema } from "../../../utils/schema/login.schema";

const LoginComponent: React.FC<any> = () => {
//   const [login, { isLoading: isUpdating }] = useLoginMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

//   const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    console.log(data)
    // let res: any = await login(data);
   
    // if(res?.data.statusCode == 200){
    //   navigate("/dashboard")
    // }
    // else{
    //   toast.error(res?.data.message);
    // }
    // if (!res.data?.success) {
    //   if (res.error?.data) {
    //   }
    // }
  };

  return ( 
    
    
   
     <div className="max-w-lg w-full  dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-[32px] font-bold text-center text-gray-950 dark:text-gray-200 mb-8">
              Login to CS-Pro CRM
            </h1>

            <div className="w-full mb-1">
              <Input
                error={errors.email}
                name="email"
                placeholder="Enter email"
                register={register}
                title=""
                labelColor="black" />
            </div>

            <div className="w-full mb-1">
              <Password
                error={errors.password}
                name="password"
                placeholder="Enter password"
                register={register}
                title="" />
            </div>

            <div className="w-full mb-1">
              <Button
                label="Login in"
                size="large"
                textColor="#FFFFFF"
                type="submit"
                  />
            </div>
           
          </form>
          <Link to="/signup" className="py-2">Dont have an account? Signup.</Link>
       </div> 

     
  );

};

export default LoginComponent;