import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import './Trailer.css'


function Trailer() {

    const { ytKey } = useParams();

    return(
        <div className="react-player-container">
            {(ytKey != null)?<ReactPlayer controls="true" playing={true} url={`https://youtube.com/watch?v=${ytKey}`} width="100%"
            height="100%" />:null}
        </div>
    );
}

export default Trailer