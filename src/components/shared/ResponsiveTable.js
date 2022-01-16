import React, { useEffect, useRef, useState } from 'react'
import shortid from 'shortid';
import { Button, CardButton, RippledButton, CheckButton } from '../../styled-components/Button';
import { isArrNullOrEmpty } from '../../utils';
import { MovieTableHeaderNames, MovieTableHeaderVisibles } from '../movie/defaults';
import { ListTypes } from './synthetic-enums';
import { getManagedArr, updateLocalStorage } from './utils';
import { BsBookmarkStar, BsBookmarkPlus } from 'react-icons/bs';
import { AiFillHeart, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import DarkImgFilter from '../../styled-components/DarkImgFilter';
import { ImgContainer, ImgLabels, ImgBottomLeftBar, ResponsiveImage, ImgTopLeftBar, ImgBottomRightBar, ImgTopRightBar } from '../../styled-components/ResponsiveImage';
import { constants } from '../../constants';
import { Table } from '../../styled-components/Table';
import { Paginator } from './Paginator';
import { colors } from '../../styled-components/Variables';
import { Container } from '../../styled-components/FlexBox';
import { Badge } from '../../styled-components/Badge';

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
    const keys = Object.keys(MovieTableHeaderVisibles);
    const visibleKeys = keys.filter(key => MovieTableHeaderVisibles[key]);

    const tableHeaders = visibleKeys.map(key => MovieTableHeaderVisibles[key] && <th key={shortid.generate()}> {MovieTableHeaderNames[key]} </th>);

    let tableRows = [];


    dataList.forEach(data => {


        tableRows.push(<tr key={shortid.generate()}>
            {keys.map(key => {

                let cellVal = "";

                switch (key) {
                    case "genres":
                        //cellVal = data[key].join();
                        genresRef.current = data[key]?.map(genre => <Badge>{genre}</Badge>);
                        break;
                    case "vote_average":
                        rateRef.current = <> {`${data[key]}/10`} </>
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
                                        <CheckButton color={colors.primaryColor} active={state.favIds?.includes(data["id"])}
                                            onClick={() => {
                                                let managedArr = getManagedArr(state.favIds, data["id"]);
                                                setState({ ...state, ...{ favIds: managedArr } });
                                                updateLocalStorage(managedArr, ListTypes.favorite);
                                            }}> <AiFillStar size={18} />
                                            <br /> Favorite
                                        </CheckButton>
                                        <CheckButton color={colors.primaryColor} active={state.watchLaterIds?.includes(data["id"])}
                                            onClick={() => {
                                                let managedArr = getManagedArr(state.watchLaterIds, data["id"]);
                                                setState({ ...state, ...{ watchLaterIds: managedArr } });
                                                updateLocalStorage(managedArr, ListTypes.watchLater);
                                            }}> <AiFillHeart size={18} /> <br />
                                            Watch Later
                                        </CheckButton>
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

export default ResponsiveTable
