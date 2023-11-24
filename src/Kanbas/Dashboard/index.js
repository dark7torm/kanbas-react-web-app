import db from "../Database";
import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function Dashboard({
  addCourse,
  deleteCourse,
  updateCourse,
  courses,
  course,
  setCourse,
  setCourses,
}) {
  const colorPaths = ["backgrounds/green.png", "backgrounds/neu.png", "backgrounds/orange.png",
  "backgrounds/red.png", "backgrounds/black.png", "backgrounds/blue.png"];
  return (
    <div className = "wd-dashboard-content">
      <h1>Dashboard</h1>
      <input
        type="text"
        value={course.name}
        onChange={(e) => {
          setCourse({ ...course, name: e.target.value });
        }}
      />
      <button className ="blue-button" onClick={() => updateCourse(course)}>Update</button>
      <button className = "green-button" onClick={addCourse}>Add</button>

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

      <div className="wd-dashboard-grid d-flex flex-wrap flex-row ">
        <div className="wd-card-dimensions row rows-col-4">
        {courses.map((course, index) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id.$oid}`}
            className="list-group-item"
          >
            <div className="col">
             <div className="card h-100">
                  <h5 className="card-title">{course.name}</h5>
                  <p className="card-text">{course.number}, {course.startDate} to {course.endDate}</p>
                  <button className = "red-button"
              onClick={(e) => {
                e.preventDefault();
                deleteCourse(course);
              }}
            >
              Delete
            </button>
            <button className = "yellow-button"
              onClick={(e) => {
                e.preventDefault();
                setCourse(course);
              }}
            >
              Edit
            </button>
                </div>
          </div>
          </Link>
          
        ))}
      </div>
    </div>
    </div>
  );
}

export default Dashboard;