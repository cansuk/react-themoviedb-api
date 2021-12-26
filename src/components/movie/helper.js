import { constants } from "../../constants";
import { isArrNullOrEmpty } from "../../utils";

export const getTableData = (movies, genres) => {
    if (isArrNullOrEmpty(movies) || isArrNullOrEmpty(genres)) {
        return [];
    }
    const headers = [
        { name: "adult", displayAs: "Adult", visible: true },
        { name: "backdrop_path", displayAs: "Backdrop Path", visible: true },
        { name: "genre_ids", displayAs: "Genre Ids", visible: true },
        { name: "id", displayAs: "Id", visible: true },
        { name: "original_language", displayAs: "Original Language", visible: true },
        { name: "original_title", displayAs: "Original Title", visible: true },
        { name: "overview", displayAs: "Overview", visible: true },
        { name: "popularity", displayAs: "Popularity", visible: true },
        { name: "poster_path", displayAs: "Poster Path", visible: true },
        { name: "release_date", displayAs: "Release Date", visible: true },
        { name: "title", displayAs: "Title", visible: true },
        { name: "video", displayAs: "Video", visible: true },
        { name: "vote_average", displayAs: "Vote Average", visible: true },
        { name: "vote_count", displayAs: "Vote Count", visible: true },
        { name: "genres", displayAs: "Genres", visible: true }
    ];



    var result = movies.map(data => {
        data["poster_path"] = constants.imgRoot.concat(data["poster_path"]);
        let genreList = data["genre_ids"].map(id => genres.filter(genre => genre["id"] === id)[0]["name"])
        return { ...data, ...{ genres: genreList } };
    });

    return { ...{ headers: headers }, ...{ dataList: result } }
}
