import { useState } from "react";
import { StudentTable } from "./components/StudentTable";
import { AddStudent } from "./components/AddStudent";
import { data } from "./utils/data";
function App() {
 
 const [students, setStudent] = useState(data)

  return ( 
    <>
      <StudentTable students={students} />
      <AddStudent students={students} setStudents={setStudent}/>
    </>
  );
}

            export default App
  