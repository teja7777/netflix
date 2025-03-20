import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/store/Slices/movieSlice";
import { useEffect } from "react";
import { APIOptions } from "../utils/constants";

const useNowPlayingMovies = () => {
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
};
export default useNowPlayingMovies;