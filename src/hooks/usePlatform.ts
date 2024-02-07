import usePlatforms from "./usePlatforms.ts";
import {Platform} from "../models/GameUtils.ts";

const usePlatform = (platformId?: number): Platform | undefined => {
    const {data: platforms} = usePlatforms();
    return platforms?.results.find((p) => p.id === platformId);
}

export default usePlatform;