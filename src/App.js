import './App.css';
import Movies from './components/movie';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import FavoriteList from './components/list-favorite';
import WatchLaterList from './components/list-watch-later';
import MoviesMenu from './components/menu';
import { Grid, Segment } from 'semantic-ui-react';
import MoviesList from './components/list';
import { ListTypes } from './components/shared/synthetic-enums';
import BodyWrapper from './components/shared/styled-components/body-wrapper';

function App() {
  return (
    <>
      <Router>
        <BodyWrapper>
          <Grid columns={2}>
            <Grid.Row stretched>

              <Grid.Column width={4}>
                <MoviesMenu />
              </Grid.Column>

              <Grid.Column width={12}>
                <Segment>

                  <Routes>
                    <Route exact path="/" element={<Movies />} />
                    <Route path="/searchForMovies" element={<Movies />} />
                    {/* <Route exact path="/list/:type" element={<MoviesList />} /> */}
                    <Route exact path="/favoriteMovies" element={<MoviesList type={ListTypes.favorite} />} />
                    <Route exact path="/watchLaterMovies" element={<MoviesList type={ListTypes.watchLater} />} />
                    {/* <Route exact path="/category/:id" element={<Category />} /> */}

                    <Route
                      path="*"
                      element={
                        <main style={{ padding: "1rem" }}>
                          <p>There's nothing here!</p>
                        </main>
                      }
                    />
                  </Routes>

                </Segment>
              </Grid.Column>

            </Grid.Row>
          </Grid>

        </BodyWrapper>

      </Router>
    </>
  )
}

export default App;
