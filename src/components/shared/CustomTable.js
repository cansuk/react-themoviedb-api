import React from 'react'
import { Table } from 'semantic-ui-react';
import shortid from 'shortid';
import { isArrNullOrEmpty } from '../../utils';
import { Error } from './Error';

export const CustomTable = ({ tableData }) => {
    const { headers, dataList } = tableData;
    if (isArrNullOrEmpty(dataList) || isArrNullOrEmpty(headers)) {
        return <>empty...</> // <Error msg="Data empty!" />
    }

    const rows = dataList.map((data) => {
        <Table.Row key={shortid.generate()}>
            {data[0]}
        </Table.Row>
    });


    const tableHeaders = headers.map(header => <Table.HeaderCell key={shortid.generate()} name={header["name"]}> {header["displayAs"]} </Table.HeaderCell>);


    return (
        <Table basic>
            <Table.Header>
                <Table.Row>
                    {tableHeaders}
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {rows}
            </Table.Body>
        </Table>
    )
}
