import React, { useEffect, useState } from 'react'
import { Image, Table, Button, Icon } from 'semantic-ui-react';
import shortid from 'shortid';
import { genreServices, searchServices } from '../../../api';
import { isArrNullOrEmpty } from '../../../utils';
import TablePagination from '../../shared/pagination';
import { ListTypes } from '../../shared/synthetic-enums';
import { getManagedArr, updateLocalStorage } from '../../shared/utils';
import { MovieTableHeaderNames, MovieTableHeaderVisibles } from '../defaults';
import { getTableData } from '../helper';

const MovieTable = (props) => {
    const { results, genres } = props;
    const [state, setState] = useState({ favIds: [], watchLaterIds: [], paginationResults: results });
    let tableData = getTableData(state.paginationResults, genres);
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

    const tableHeaders = visibleKeys.map(key => MovieTableHeaderVisibles[key] && <Table.HeaderCell key={shortid.generate()}> {MovieTableHeaderNames[key]} </Table.HeaderCell>);

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
    const handlePaginationChange = (e, { activePage }) => {

        const criteria = { query: state.value, page: activePage };

        searchServices.getMoviesByCriteria(criteria).then(movies => {

        }).catch(err => {
            // TODO handle error
            debugger;
        });
    }
    return (
        <>
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
            <TablePagination defaultActivePage={1} totalPages={45} handlePaginationChange={handlePaginationChange} />

        </>
    )

}

export default MovieTable;
