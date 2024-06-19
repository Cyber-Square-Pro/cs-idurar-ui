import React from "react";
import CourseForm from "./course-form";

const CoursePage: React.FC<any> = () => {
  return (
    <div className="w-full h-full bg-white flex justify-start items-center align-left overflow-hidden">
      <div className="p-10 w-[50%]">
        <CourseForm />
      </div>
    </div>
  );
};

export default CoursePage;
