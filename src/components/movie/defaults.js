// export const headers = [
//     { name: "adult", displayAs: "Adult", visible: true },
//     { name: "backdrop_path", displayAs: "Backdrop Path", visible: true },
//     { name: "genre_ids", displayAs: "Genre Ids", visible: true },
//     { name: "id", displayAs: "Id", visible: true },
//     { name: "original_language", displayAs: "Original Language", visible: true },
//     { name: "original_title", displayAs: "Original Title", visible: true },
//     { name: "overview", displayAs: "Overview", visible: true },
//     { name: "popularity", displayAs: "Popularity", visible: true },
//     { name: "poster_path", displayAs: "Poster Path", visible: true },
//     { name: "release_date", displayAs: "Release Date", visible: true },
//     { name: "title", displayAs: "Title", visible: true },
//     { name: "video", displayAs: "Video", visible: true },
//     { name: "vote_average", displayAs: "Vote Average", visible: true },
//     { name: "vote_count", displayAs: "Vote Count", visible: true },
//     { name: "genres", displayAs: "Genres", visible: true }
// ];

// export const MovieTableHeaderNames = {
//     poster_path: "",
//     title: "Title",
//     original_language: "Original Language",
//     release_date: "Release Date",
//     vote_count: "Vote Count",
//     vote_average: "Vote Average",
//     genres: "Genres",

//     adult: "Adult",
//     backdrop_path: "Backdrop Path",
//     genre_ids: "Genre Ids",
//     id: "Id",
//     original_title: "Original Title",
//     overview: "Overview",
//     popularity: "Popularity",
//     video: "Video"
// }

export const MovieTableHeaders = {
    poster_path: { displayName: "", visible: true },
    title: { displayName: "Title", visible: true },
    original_language: { displayName: "Language", visible: true },
    release_date: { displayName: "Release Date", visible: false },
    vote_count: { displayName: "Vote Count", visible: false },
    vote_average: { displayName: "Vote Average", visible: true },
    genres: { displayName: "Genres", visible: true },
    adult: { displayName: "Adult", visible: true },
    backdrop_path: { displayName: "Backdrop Path", visible: true },
    genre_ids: { displayName: "Genre Ids", visible: true },
    id: { displayName: "Id", visible: true },
    original_title: { displayName: "Original Title", visible: true },
    overview: { displayName: "Overview", visible: true },
    popularity: { displayName: "Popularity", visible: true },
    video: { displayName: "Video", visible: true }
}

// export const MovieTableHeaderVisibles = {
//     poster_path: true,
//     release_date: true,
//     vote_count: true,
//     vote_average: false,
//     genres: false,

//     original_language: false,
//     title: false,
//     popularity: false,
//     adult: false,
//     backdrop_path: false,
//     genre_ids: false,
//     id: false,
//     original_title: false,
//     overview: true,
//     video: false,
// }