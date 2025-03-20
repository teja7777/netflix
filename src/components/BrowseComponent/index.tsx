import { useEffect } from "react";
import { APIOptions } from "../../utils/constants";
import Header from "../Header";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/store/Slices/movieSlice";

const BrowseComponent = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing", APIOptions);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
        console.log(json.results);
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    return (
        <div>
            <Header />
        </div>
    )
};
export default BrowseComponent
