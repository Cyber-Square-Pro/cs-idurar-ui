import React from "react";
import CourseForm from "./course-form";

const CoursePage: React.FC<any> = () => {
  return (
    <div className="w-full h-full bg-white flex justify-center overflow-auto">
      <div className="w-full max-w-xl min-w-xs">
        <CourseForm />
      </div>
    </div>
  );
};

export default CoursePage;
