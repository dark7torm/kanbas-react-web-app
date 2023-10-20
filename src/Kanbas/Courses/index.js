import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { LuAlignJustify } from "react-icons/fa";
import React from "react";


function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      <h1>Course {course.name}</h1>
    </div>
    
  );
}
export default Courses;