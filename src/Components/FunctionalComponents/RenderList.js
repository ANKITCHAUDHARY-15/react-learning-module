import React from "react";
import Student from "../../Components/ClassComponents/Student";

function RenderList() {
  const StudentList = [
    { id: 1, name: "Ankit", collage: "MANIT", skill: "react,java,python,c++" },
    { id: 2, name: "akt", collage: "NIT", skill: "c#,.netcore,MVC" },
    {
      id: 3,
      name: "chaudhary",
      collage: "MACT",
      skill: "OOPs,Coding,Algorithm Desing,DS",
    },
    {
      id: 4,
      name: "ankit",
      collage: "Manit",
      skill: "memcache, RabbitMQ,graylog,microservice,restapi,grpc,MYSQL",
    },
    {
      id: 5,
      name: "ak",
      collage: "mact",
      skill: "raect,JS,html,css,cypress,unittest,jest,redux",
    },
  ];
  //in console =>  Warning: Each child in a list should have a unique "key" prop.
  const students = StudentList.map((s) => (
    <Student name={s.name} collage={s.collage} skill={s.skill} />
  ));
  const students2 = StudentList.map((s) => (
    <Student key={s.id} name={s.name} collage={s.collage} skill={s.skill} />
  ));
  return (
    <div className="row m-4">
      <h3 className="align-text-center col-sm-12"> Rendering a List</h3>
      {StudentList.map((s) => (
        <div className="ml-2">{s.name} </div>
      ))}
      <hr/>
      {/* <div className="row">{students}</div> */}
      <div className="row">{students2}</div>
    </div>
  );
}

export default RenderList;
