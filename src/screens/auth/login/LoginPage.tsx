import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { Button, Input, Password } from "../../../components/atoms";
import { LoginSchema } from "../../../utils/schema/login.schema";
import { useLoginMutation } from "../../../services/baseSlice";

const LoginPage: React.FC<any> = () => {
  const [login] = useLoginMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    let res: any = await login(data);
    console.log(res?.data)
  
    if(res?.data.statusCode == 200){
      navigate("/dashboard")
    }
    else{
      toast.error(res?.data.message);
    }
     
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
                label="Sign in"
                size="large"
                textColor="#FFFFFF"
                type="submit"
                  />
            </div>
           
          </form>
       </div> 

     
  );

};

export default LoginPage;