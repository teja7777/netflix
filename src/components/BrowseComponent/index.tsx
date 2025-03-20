import { useSelector } from "react-redux";
import useNowPlayingMovies from "../../customHooks/useNowPlayingMovies";
import Header from "../Header";
import { RootState } from "../../utils/store/appStore";

const BrowseComponent = () => {
    const movies = useSelector((store: RootState) => store.movies?.nowPlayingMovies);
    const oneMainMovie = movies?.[0];
    console.log(oneMainMovie);
    /*To fetch now playing movies */
    useNowPlayingMovies();

    return (
        <div>
            <Header />
        </div>
    )
};
export default BrowseComponent
