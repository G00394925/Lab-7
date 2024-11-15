import { useEffect } from "react";
import Card from "react-bootstrap/Card";

const MovieItem = (props) => {

    useEffect(()=>{
            
        console.log("Movie Item: ", props.mymovie);
        }, [props.mymovie]);
    return(

        <div>
            <Card>
                <Card.Header>{props.mymovie.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.mymovie.poster} alt={props.mymovie.title}></img>
                        <footer>{props.mymovie.year}</footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieItem;