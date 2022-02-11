import { genreServices, movieServices, searchServices } from ".";

test('Api call : getMoviesByCriteria', async () => {
    const searchTxt = 'fight';
    const criteria = { query: searchTxt, page: 1 };
    return searchServices.getMoviesByCriteria(criteria).then(({ movies }) => {
        const index = movies.findIndex(m => m.title.toLowerCase().includes(searchTxt));
        expect(index).not.toBe(-1);
    });
});

test('Api call : getGenres', async () => {
    return genreServices.getGenres().then(genres => {
        const length = genres.length;
        expect(length).toBeGreaterThan(1);
    })
});

test('Api call : getMovieById', async () => {
    const searchTxt = 'fight';
    const criteria = { movieId: 550 };
    return movieServices.getMovieById(criteria).then((movie) => {
        const found = movie.title.toLowerCase().includes(searchTxt);
        expect(found).toBe(true);
    });
});