

function Total(props){

    return(
        <div>
            <h3>Numero de ejercicios: </h3><h1> {props.excercisesArray[0] + props.excercisesArray[1] + props.excercisesArray[2]} </h1>

        </div>
    );


}

export default Total