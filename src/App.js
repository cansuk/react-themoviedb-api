import './App.css';
import Movies from './components/movie';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MoviesMenu from './components/menu';
import MoviesList from './components/list';
import { ListTypes } from './components/shared/synthetic-enums';
import ErrorBoundry from './components/shared/error-boundry';
import { Column, Row } from './styled-components/FlexBox';
import { AppContainer } from './styled-components/AppContainer';


function App() {
  return (
    <>
      <Router>
        <ErrorBoundry>
          <AppContainer>
            <Row>

              <Column width={"25%"}>
                <MoviesMenu />
              </Column>

              <Column width={"75%"}>
                <div>

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

                </div>
              </Column>

            </Row>
          </AppContainer>
        </ErrorBoundry>
      </Router>
    </>
  )
}

export default App;
