import React, { useEffect, useState } from 'react'
import shortid from 'shortid';
import { Button } from '../../styled-components/Button';
import { isArrNullOrEmpty } from '../../utils';
import { MovieTableHeaderNames, MovieTableHeaderVisibles } from '../movie/defaults';
import { ListTypes } from './synthetic-enums';
import { getManagedArr, updateLocalStorage } from './utils';
import { BsBookmarkStar, BsBookmarkPlus } from 'react-icons/bs';
import DarkImgFilter from '../../styled-components/DarkImgFilter';
import { ResponsiveImage } from '../../styled-components/ResponsiveImage';
import { constants } from '../../constants';
import { Table } from '../../styled-components/Table';
import { Paginator } from './Paginator';

const ResponsiveTable = ({ tableData, handlePaginationChange, totalPages }) => {
    const [state, setState] = useState({ favIds: [], watchLaterIds: [] });

    const { headers, dataList } = tableData;
    useEffect(() => {
        const moviesStorage = JSON.parse(window.localStorage.getItem('movies-api'));
        if (moviesStorage) {
            state.favIds = moviesStorage[ListTypes.favorite];
            state.watchLaterIds = moviesStorage[ListTypes.watchLater];
        }
        setState({ ...state, ...{ favIds: state.favIds }, ...{ watchLaterIds: state.watchLaterIds } });
        return () => {
        }
    }, [])
    // if (isArrNullOrEmpty(dataList) || isArrNullOrEmpty(headers)) {
    //     return <>Type a movie to list... </> // <Error msg="Data empty!" />
    // }
    if (isArrNullOrEmpty(dataList) || isArrNullOrEmpty(headers)) {
        return <>  </> // <Error msg="Data empty!" />
    }
    const keys = Object.keys(MovieTableHeaderVisibles);
    const visibleKeys = keys.filter(key => MovieTableHeaderVisibles[key]);

    const tableHeaders = visibleKeys.map(key => MovieTableHeaderVisibles[key] && <th key={shortid.generate()}> {MovieTableHeaderNames[key]} </th>);

    let tableRows = [];
    dataList.forEach(data => {

        tableRows.push(<tr key={shortid.generate()}>
            {visibleKeys.map(key => {

                let cellVal = "";

                switch (key) {
                    case "genres":
                        cellVal = data[key].join();
                        break;
                    case "poster_path":
                        if (data[key]) {
                            cellVal = <DarkImgFilter>
                                <ResponsiveImage src={data[key]} size="small" rounded alt="movie_poster" />
                            </DarkImgFilter>
                        } else {
                            cellVal =
                                <ResponsiveImage src={constants.imagePreviewUrl} size="small" rounded alt="movie_poster" />
                        }
                        break;
                    case "title":
                        cellVal = <>
                            <Button
                                onClick={() => {
                                    let managedArr = getManagedArr(state.favIds, data["id"]);
                                    setState({ ...state, ...{ favIds: managedArr } });
                                    updateLocalStorage(managedArr, ListTypes.favorite);

                                }}>
                                Add to Favorites <BsBookmarkStar />

                            </Button>
                            <Button
                                onClick={() => {
                                    let managedArr = getManagedArr(state.watchLaterIds, data["id"]);
                                    setState({ ...state, ...{ watchLaterIds: managedArr } });
                                    updateLocalStorage(managedArr, ListTypes.watchLater);
                                }}>
                                Add to Watch Laters <BsBookmarkPlus />
                            </Button>

                        </>
                        break;
                    case "genre_ids":
                        break;
                    case "overview":
                        cellVal = data[key];
                        break;
                    default:
                        cellVal = data[key];
                        break;
                }



                return <td key={shortid.generate()}> {cellVal} </td>;
            })}

        </tr>);

    });

    return !tableData || tableData.length === 0 ? "Loading" : (
        <div style={{ overflowX: "auto" }}>
            <Table>
                <thead>
                    <tr>
                        {tableHeaders}
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>
            <Paginator defaultActivePage={1} totalPages={totalPages} handlePaginationChange={handlePaginationChange} />
        </div>
    )
}

export default ResponsiveTable
