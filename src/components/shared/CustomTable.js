import React from 'react'
import { Image, Table } from 'semantic-ui-react';
import shortid from 'shortid';
import { isArrNullOrEmpty } from '../../utils';
import { MovieTableHeaderNames, MovieTableHeaderVisibles } from '../movie/defaults';
import { Error } from './Error';

export const CustomTable = ({ tableData }) => {
    const { headers, dataList } = tableData;
    if (isArrNullOrEmpty(dataList) || isArrNullOrEmpty(headers)) {
        return <>Type a movie to list... </> // <Error msg="Data empty!" />
    }


    const keys = Object.keys(MovieTableHeaderVisibles);
    const visibleKeys = keys.filter(key => MovieTableHeaderVisibles[key]);

    const tableHeaders = visibleKeys.map(key => MovieTableHeaderVisibles[key] && <Table.HeaderCell key={shortid.generate()}> {MovieTableHeaderNames[key]} </Table.HeaderCell>);


    let tableRows = [];
    dataList.forEach(data => {

        tableRows.push(<Table.Row key={shortid.generate()}>
            {visibleKeys.map(key => {

                let cellVal = "";
                if (key === "genre_ids") {
                    return;
                } else if (key === "genres") {
                    cellVal = data[key].join();
                } else if (key === "poster_path") {
                    cellVal = <Image src={data[key]} size="medium" rounded />
                }
                else {
                    cellVal = data[key];
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
