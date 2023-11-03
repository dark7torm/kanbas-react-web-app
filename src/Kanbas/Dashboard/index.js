import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { React, useState } from "react";

function Dashboard(
  { courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse } 
  ) {
  return (
    <div>
      <h1>Dashboard</h1>
      <button class="green-button" onClick={addNewCourse}>Add</button>
      <div class="divider"></div>
      <button class="blue-button" onClick={updateCourse}>Update</button>
      <h5>Course</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />

      <div className="list-group">
        {courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item"
          >
            <button class = "yellow-button"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}
            >
              Edit
            </button>
            <div class="divider"></div>
            <button class="red-button"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}
            >
              Delete
            </button>
            <div class="divider"></div>

            

            {course.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;