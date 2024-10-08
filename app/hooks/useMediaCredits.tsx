import useMediaDetails from "./useMediaDetails";
import placeholderImg from "@/public/headshot-placeholder.png";

const posterPath = "https://image.tmdb.org/t/p/w500";

const useMediaCredits = (mediaId: string, mediaType: string) => {
  const { data } = useMediaDetails(mediaId, mediaType);

  const crewSlides =
    data?.credits.crew.map((crew, index) => ({
      id: index,
      name: crew?.name,
      src: crew.profile_path ? posterPath + crew.profile_path : placeholderImg,
      alt: crew.name,
    })) || [];

  const castSlides =
    data?.credits.cast.map((cast, index) => ({
      id: index,
      name: cast?.name,
      character: cast.character,
      src: cast.profile_path ? posterPath + cast.profile_path : placeholderImg,
      alt: cast.name,
    })) || [];

  return { castSlides, crewSlides };
};

export default useMediaCredits;
