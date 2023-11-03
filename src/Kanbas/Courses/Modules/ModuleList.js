import React, {useState} from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
function ModuleList() {
    const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

      
    return (
      <ul className="list-group">
        <li className="list-group-item">
        <button class = "green-button"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
           Add
        </button>
        <div class = "divider"></div>
        <button class = "blue-button"
          onClick={() => dispatch(updateModule(module))}>
                Update
        </button>

        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        <textarea value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </li>

        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
                <button class = "yellow-button"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <div class = "divider"></div>
            <button class = "red-button"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>

              <h3>{module.name}</h3>
              <p>{module.description}</p>
              <p>{module._id}</p>
            </li>))}
      </ul>
    );
  }
  export default ModuleList;
// function ModuleList() {
//   const { courseId } = useParams();
//   const [modules, setModules] = useParams(db.modules);
//   const [module, setModule] = useState({
//     name: "New Module",
//     description: "New Description",
//     course: courseId,
//   });

//   return (
//     <ul className="list-group">
//       {modules
//         .filter((module) => module.course === courseId)
//         .map((module, index) => (
//           <li key={index} className="list-group-item">
//             <h3>{module.name}</h3>
//             <p>{module.description}</p>
//             {module.lessons &&
//               module.lessons.map((lesson, index) => (
//                 <div key={index}>
//                   <h4>{lesson.name}</h4>
//                   <p>{lesson.description}</p>
//                 </div>
//               ))}
//           </li>
//         ))}
//     </ul>
//   );
// }
// export default ModuleList;