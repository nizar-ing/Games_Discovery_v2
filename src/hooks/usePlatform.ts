import usePlatforms from "./usePlatforms.ts";
import Platform from "../models/Platform.ts";


const usePlatform = (platformId?: number) => {
    const {data: platforms} = usePlatforms();
    return platforms?.results.find((p: Platform) => p.id === platformId);
}

export default usePlatform;