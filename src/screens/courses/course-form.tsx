"use client";
import React from "react";
import { Button } from "../../components/atoms";

/*
  Author: Fahadiya Binsy on June 17th 2024
  Purpose: Renders a form for adding a new course.
  Props: 
    - None
*/


const CourseForm = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white ">

      <div>
        <div >
        <h1 className="font-bold text-2xl text-center mb-2">Add Course</h1>
        </div>
        <label className="block font-medium">Course Title:</label>
        <input
          type="text"
          placeholder="Enter course title"
          className="border w-full p-2"
        />
      </div>
      <div>
        <label className="block font-medium">Course Description:</label>
        <textarea
          placeholder="Enter course description"
          className="border w-full p-2 resize-none"
        />
      </div>
      <div>
        <label className="block font-medium">Technologies:</label>
        <input
          type="text"
          placeholder="Enter technologies"
          className="border w-full p-2"
        />
      </div>
      <div>
        <label className="block font-medium">Duration:</label>
        <select className="border w-full p-2">
          <option value="1 Month">1 Month</option>
          <option value="3 Months">3 Months</option>
          <option value="6 Months">6 Months</option>
        </select> 
      </div>
      <div>
        <label className="block font-medium">Course Fee:</label>
        <input
          type="text"
          placeholder="Enter course fee"
          className="border w-full p-2"
        />
      </div>
      <div>
        <label className="block font-medium">Cover Image:</label>
        <input type="file" className="border w-full p-2" />
      </div>
      <div className="flex justify-end mt-4">
        <Button
          type="button"
        //   onClick={onClose}
          className="mr-2 p-2 white"
          label="Cancel"
        />
        <Button
          type="submit"
          className="p-2 bg-green-500 text-white rounded"
          label="Add Course"
        />
      </div>
    </form>
  );
};

export default CourseForm;
