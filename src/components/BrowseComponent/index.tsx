import useNowPlayingMovies from "../../customHooks/useNowPlayingMovies";
import Header from "../Header";

const BrowseComponent = () => {
    
    /*To fetch now playing movies */
    useNowPlayingMovies();

    return (
        <div>
            <Header />
        </div>
    )
};
export default BrowseComponent
