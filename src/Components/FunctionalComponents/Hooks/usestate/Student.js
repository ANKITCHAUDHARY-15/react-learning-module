import React, { useState } from "react";

export default function Student() {
  const [student, setStudent] = useState({
    Name: "ANKIT",
    Collage: "MANIT",
    RollNo: 111,
  });
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <label>Roll No</label>
          <input
            type="number"
            placeholder="Roll No"
            value={student.RollNo}
            onChange={(e) => {
              setStudent({ ...student, RollNo: e.target.value });
            }}
          />
          <br />
          <label>Name </label>
          <input
            type="text"
            placeholder="Name"
            value={student.Name}
            onChange={(e) => {
              setStudent({ ...student, Name: e.target.value });
            }}
          />
          <br />
          <label>Collage </label>
          <input
            type="text"
            placeholder="Collage Name"
            value={student.Collage}
            onChange={(e) => {
              setStudent({ ...student, Collage: e.target.value });
            }}
          />
        </div>
        <div className="col-sm-6">
          <div>Name : {student.Name}</div>
          <div>Roll No : {student.RollNo}</div>
          <div>Collage : {student.Collage}</div>
        </div>
      </div>
    </div>
  );
}
