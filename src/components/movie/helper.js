import { isArrNullOrEmpty } from "../../utils";
import { header } from "./defaults";

export const getTableData = (movies, genres) => {
    if (isArrNullOrEmpty(movies) || isArrNullOrEmpty(genres)) {
        return [];
    }

    var result = movies.map(data => {
        let genreList = data["genre_ids"].map(id => genres.filter(genre => genre["id"] === id));
        return { ...data, ...{ genres: genreList } };
    });

    return { ...header, ...{ dataList: result } }
}
