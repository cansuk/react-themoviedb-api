import React, { useEffect, useState } from 'react'
import { Image, Table, Button, Icon } from 'semantic-ui-react';
import shortid from 'shortid';
import { isArrNullOrEmpty } from '../../utils';
import { MovieTableHeaderNames, MovieTableHeaderVisibles } from '../movie/defaults';
import { Error } from './Error';
import { ListTypes } from './synthetic-enums';

export const CustomTable = ({ tableData }) => {
    const [state, setState] = useState({ favIds: [], watchLaterIds: [] });

    const { headers, dataList } = tableData;
    useEffect(() => {
        // TODO CANSU get favs and watchlaters
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

    const tableHeaders = visibleKeys.map(key => MovieTableHeaderVisibles[key] && <Table.HeaderCell key={shortid.generate()}> {MovieTableHeaderNames[key]} </Table.HeaderCell>);

    const getManagedArr = (arr, id) => {
        if (!arr) return -1;
        const predicate = (el) => el === id;
        let index = arr.findIndex(predicate);
        if (index === -1) {
            debugger;
            arr.push(id);
        } else {
            arr.pop(id);
        }
        return arr;
    }

    const updateLocalStorage = (arr, type) => {

        const moviesStorage = JSON.parse(window.localStorage.getItem('movies-api')) || {};

        moviesStorage[type] = arr;

        window.localStorage.setItem('movies-api', JSON.stringify(moviesStorage));

    }

    let tableRows = [];
    dataList.forEach(data => {

        tableRows.push(<Table.Row key={shortid.generate()}>
            {visibleKeys.map(key => {

                let cellVal = "";

                switch (key) {
                    case "genres":
                        cellVal = data[key].join();
                        break;
                    case "poster_path":
                        cellVal = <Image src={data[key]} size="medium" rounded />
                        break;
                    case "title":
                        cellVal = <>
                            <Button icon={<Icon name='heart outline' />} toggle active={state.favIds?.includes(data["id"])}
                                content={data[key]}
                                onClick={() => {
                                    let managedArr = getManagedArr(state.favIds, data["id"]);
                                    setState({ ...state, ...{ favIds: managedArr } });
                                    updateLocalStorage(managedArr, ListTypes.favorite);

                                }} />
                            <Button icon={<Icon name='plus' />} toggle active={state.watchLaterIds?.includes(data["id"])}
                                content={"Watch later"}
                                onClick={() => {
                                    let managedArr = getManagedArr(state.watchLaterIds, data["id"]);
                                    setState({ ...state, ...{ watchLaterIds: managedArr } });
                                    updateLocalStorage(managedArr, ListTypes.watchLater);
                                }} />

                        </>
                        break;
                    case "genre_ids":
                        break;
                    default:
                        cellVal = data[key];
                        break;
                }



                return <Table.Cell key={shortid.generate()}> {cellVal} </Table.Cell>;
            })}

        </Table.Row>);

    });



    return (
        <Table basic>
            <Table.Header>
                <Table.Row>
                    {tableHeaders}
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {tableRows}
            </Table.Body>
        </Table>
    )
}
