import Header from "./Header"
import Content from "./Content"
import Total from "./Total"


function App() {
  let course = "Aplicaciones para Internet";
  let part1 = "Introduction to React";
  let exercises1 = 100;
  let part2 = "Using props";
  let exercises2 = 700;
  let part3 = "Component state";
  let exercises3 = 154;
  let partsArray =[part1,part2, part3]
  let excercisesArray =[exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course = {course} />
      <Content partsArray={partsArray} excercisesArray={excercisesArray} />
      <Total excercisesArray ={excercisesArray}/>
    </div>
  );
}

export default App;
