import { useForm, FormProvider } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/atoms";
import Input from "../../components/atoms/Input";
import InputArea from "../../components/atoms/Input/inputArea";
import Dropdown from "../../components/atoms/dropdown";

const schema = Yup.object().shape({
  courseTitle: Yup.string().required("course title is required"),
  courseDescription: Yup.string().required("course description is required"),
  technologies: Yup.string().required("technologies are required"),
  duration: Yup.string().required("duration is required"),
  courseFee: Yup.number()
    .typeError("course fee must be a number")
    .required("course fee is required"),
  coverImage: Yup.mixed().required("cover image is required"),
});

const CourseForm = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = methods;

  const onSubmit = (data: any) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 bg-white h-full w-full"
      >
        <div className="flex flex-col gap-2 h-full w-full">
          <h1 className="font-bold text-4xl text-center mb-2">Add Course</h1>
          <div>
            <Input
              type="text"
              placeholder="Enter course title"
              name="courseTitle"
              register={register}
              error={errors.courseTitle?.message}
              title="Course Title"
              className="mb-[-20px]"
            />
            {errors.courseTitle && (
              <p className="text-red-500 text-sm mt-4 pl-2">
                {errors.courseTitle.message}
              </p>
            )}
          </div>
          <div>
            <InputArea
              type="text"
              placeholder="Enter course description"
              name="courseDescription"
              register={register}
              error={errors.courseDescription?.message}
              title="Course Description"
            />
            {errors.courseDescription && (
              <p className="text-red-500 text-sm pl-2 mt-[-8px]">
                {errors.courseDescription.message}
              </p>
            )}
          </div>
          <div>
            <Input
              type="text"
              placeholder="Enter technologies"
              name="technologies"
              register={register}
              error={errors.technologies?.message}
              title="Technologies"
              className="mb-[-20px]"
            />
            {errors.technologies && (
              <p className="text-red-500 text-sm mt-4 pl-2">
                {errors.technologies.message}
              </p>
            )}
          </div>
          <div>
            <Dropdown
              placeholder="Select duration"
              name="duration"
              register={register}
              error={errors.duration?.message}
              title="Duration"
              className="mb-[-20px]"
              options={[
                { value: "1 Month", label: "1 Month" },
                { value: "3 Months", label: "3 Months" },
                { value: "6 Months", label: "6 Months" },
              ]}
            />
            {errors.duration && (
              <p className="text-red-500 text-sm mt-4 pl-2">
                {errors.duration.message}
              </p>
            )}
          </div>
          <div>
            <Input
              type="text"
              placeholder="Enter course fee"
              name="courseFee"
              register={register}
              error={errors.courseFee?.message}
              title="Course Fee"
              className="mb-[-20px]"
            />
            {errors.courseFee && (
              <p className="text-red-500 text-sm mt-4 pl-2">
                {errors.courseFee.message}
              </p>
            )}
          </div>
          <div>
            <Input
              type="file"
              name="coverImage"
              placeholder="Add cover image"
              register={register}
              error={errors.coverImage?.message}
              title="Cover Image"
            />
            {errors.coverImage && (
              <p className="text-red-500 text-sm mt-4 pl-2">
                {errors.coverImage.message}
              </p>
            )}
          </div>
          <div className="flex justify-end pb-10">
            <Button
              type="button"
              className="mr-5 p-2 font-semibold  w-1/4 border border-1"
              backgroundColor="white"
              textColor="black"
              label="Cancel"
            />
            <Button type="submit" className="p-2 w-1/2 font-semibold" label="Add Course" textColor="white" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default CourseForm;
