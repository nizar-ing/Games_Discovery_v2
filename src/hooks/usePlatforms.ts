import useData from "./useData.ts";
import {Platform} from "../models/GameUtils.ts";


const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;