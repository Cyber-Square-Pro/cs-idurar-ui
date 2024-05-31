import React from "react";
// import { useTranslation } from "react-i18next";
import { Button, Input, Password } from "../../../components/atoms";
import { yupResolver } from "@hookform/resolvers/yup";
// import yup from "../../../utils/validations/yup";
import { useForm } from "react-hook-form";
// import TextButton from "../../../components/atoms/buttons/TextButton";
// import { useNavigate } from "react-router";
// import { ROUTES } from "../../../utils/constants/routes";
// import { useSignUpMutation } from "../../../utils/api/baseSlice";
import { Link } from "react-router-dom";
import SignUpSchema from "../../../utils/schema/signup.schema";

const SignUpComponent: React.FC<any> = () => {
  // const [signUp, { isLoading: isUpdating }] = useSignUpMutation();
  // const { t, i18n } = useTranslation("translation", {
  //   keyPrefix: "pages.signUp",
  // });

  

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  // const navigate = useNavigate();

  const onSubmit = async (data:any) => {
    console.log(data);
    // if (!data.referralCode || data.referralCode === "") {
    //   delete data.referralCode;
    // }
    // let res: any = await signUp(data);

    // if (res.data?.statusCode === 200) {
    //   navigate('/')
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
                error={errors.name}
                name="name"
                placeholder="Enter your name"
                register={register}
                title=""
                labelColor="black"
              />
            </div>

            <div className="w-full mb-1">
              <Input
                error={errors.email}
                name="email"
                placeholder="Enter your email"
                register={register}
                title=""
                labelColor="black"
              />
            </div>

            <div className="w-full mb-1">
              <Password
                error={errors.password}
                name="password"
                placeholder="Set password"
                register={register}
                title=""
              />
            </div>
            <div className="w-full mb-1">
              <Password
                error={errors.confirmPassword}
                name="confirmPassword"
                placeholder="Re enter password"
                register={register}
                title=""
              />
            </div>

            <div className="w-full mb-1">
              <Button
                label={"title"}
                size="large"
                textColor="#FFFFFF"
                type="submit"
                // isLoading={isUpdating}
              />
            </div>
          
          </form>
          <Link to="/" className="py-2">
            Already have an account? Login Now.
          </Link>
        </div>
 
  );

 
};

export default SignUpComponent;
