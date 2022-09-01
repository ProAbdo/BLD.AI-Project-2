import React from "react";
import { courses_header, courses_data } from "./Data/db";
import Card from "./Components/Card";
import Courses_container from "./Components/Courses_container";
const App = () => {
  return (
    <div className="App">
      <Courses_container data={courses_header} />
      <Card data={courses_data} />
    </div>
  );
};

export default App;
