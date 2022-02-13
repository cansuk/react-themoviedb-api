import React, { useEffect, useRef, useState } from 'react'
import shortid from 'shortid';
import { isArrNullOrEmpty } from '../../utils';
import { MovieTableHeaders } from '../movie/defaults';
import { ListTypes } from './synthetic-enums';
import DarkImgFilter from '../../styled-components/DarkImgFilter';
import { constants } from '../../constants';
import { Table } from '../../styled-components/Table';
import { Paginator } from './Paginator';
import { Badge } from '../../styled-components/Badge';
import AddToList from '../add-to-list';
import { ImgContainer, ResponsiveImage, ImgTopLeftBar, ImgBottomRightBar, ImgTopRightBar } from '../../styled-components/ResponsiveImage';

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
    }, []);

    const genresRef = useRef(<></>);
    const rateRef = useRef(<></>);
    const releaseDateRef = useRef(<></>); // TODO CANSU BURADA KALDIM

    // if (isArrNullOrEmpty(dataList) || isArrNullOrEmpty(headers)) {
    //     return <>Type a movie to list... </> // <Error msg="Data empty!" />
    // }
    if (isArrNullOrEmpty(dataList) || isArrNullOrEmpty(headers)) {
        return <>  </> // <Error msg="Data empty!" />
    }
    const keys = Object.keys(MovieTableHeaders);
    const visibleKeys = keys.filter(key => key["visible"]);

    const tableHeaders = visibleKeys.map(key => MovieTableHeaders[key] && <th key={shortid.generate()}> {MovieTableHeaders[key]} </th>);

    let tableRows = [];

    const handleClick = (type, ids) => {
        if (type === ListTypes.watchLater)
            setState({ ...state, ...{ watchLaterIds: ids } });
        else if (type === ListTypes.favorite)
            setState({ ...state, ...{ favIds: ids } });
    }

    dataList.forEach(data => {

        tableRows.push(<tr key={shortid.generate()}>
            {keys.map(key => {

                let cellVal = "";

                switch (key) {
                    case "genres":
                        //cellVal = data[key].join();
                        genresRef.current = data[key]?.map(genre => <Badge key={shortid.generate()}>{genre}</Badge>);
                        break;
                    case "vote_average":
                        if (data[key] !== 0 && data[key] !== "") {
                            rateRef.current = <> {`${data[key]}/10`} </>
                        }
                        break;
                    case "poster_path":
                        if (data[key]) {
                            cellVal = <DarkImgFilter>
                                <ImgContainer>
                                    <ResponsiveImage src={data[key]} size="small" rounded alt="movie_poster" />
                                    <ImgTopLeftBar>
                                        {genresRef.current}
                                    </ImgTopLeftBar>
                                    <ImgBottomRightBar>

                                        <AddToList type={ListTypes.favorite} id={data["id"]} ids={state.favIds}
                                            handleClick={(ids) => handleClick(ListTypes.favorite, ids)} />

                                        <AddToList type={ListTypes.watchLater} id={data["id"]} ids={state.watchLaterIds}
                                            handleClick={(ids) => handleClick(ListTypes.watchLater, ids)} />

                                    </ImgBottomRightBar>
                                    <ImgTopRightBar>
                                        {<Badge> {rateRef.current}</Badge>}
                                    </ImgTopRightBar>
                                </ImgContainer>

                            </DarkImgFilter>
                        } else {
                            cellVal =
                                <ResponsiveImage src={constants.imagePreviewUrl} size="small" rounded alt="movie_poster" />
                        }
                        break;

                    case "genre_ids":
                        break;
                    case "overview":
                        cellVal = data[key];
                        break;
                    default:
                        // cellVal = data[key];
                        break;
                }



                return <td key={shortid.generate()}> {cellVal} </td>;
            })}

        </tr >);

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

export default ResponsiveTable;
