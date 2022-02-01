import { genreServices, movieServices, searchServices } from ".";

test('Api call : getMoviesByCriteria', async () => {
    const criteria = { query: 'fight', page: 1 };
    return searchServices.getMoviesByCriteria(criteria).then(movies => {
        const index = movies.results?.findIndex(m => m.title.includes(/fight/i));
        expect(index).not.toBe(-1);
    });
});

test('Api call : getGenres', async () => {
    return genreServices.getGenres().then((genres) => {
        const length = genres.length;
        expect(length).toBeGreaterThan(1);
    })
});

test('Api call : getMovieById', async () => {
    const criteria = { movieId: 550 };
    return movieServices.getMovieById(criteria).then(movies => {
        const index = movies.results?.findIndex(m => m.title.includes(/fight/i));
        expect(index).not.toBe(-1);
    });
});