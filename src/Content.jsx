import Part from "./Part";


function Content(props) {


    return (
        <div>
            <h3>Temas que comprende</h3>
            <Part courseName={props.partsArray[0]} excercisesNumber={props.excercisesArray[0]} />
            <Part courseName={props.partsArray[1]} excercisesNumber={props.excercisesArray[1]}/>
            <Part courseName={props.partsArray[2]} excercisesNumber={props.excercisesArray[2]}/>

        </div>
    );
}

export default Content