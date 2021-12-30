import React, {useState} from 'react'
import { Image, Table,Button,Icon } from 'semantic-ui-react';
import shortid from 'shortid';
import { isArrNullOrEmpty } from '../../utils';
import { MovieTableHeaderNames, MovieTableHeaderVisibles } from '../movie/defaults';
import { Error } from './Error';

export const CustomTable = ({ tableData }) => {
    const [state, setState] = useState({favIds:[], watchLaterIds:[]});

    const { headers, dataList } = tableData;
    if (isArrNullOrEmpty(dataList) || isArrNullOrEmpty(headers)) {
        return <>Type a movie to list... </> // <Error msg="Data empty!" />
    }


    const keys = Object.keys(MovieTableHeaderVisibles);
    const visibleKeys = keys.filter(key => MovieTableHeaderVisibles[key]);

    const tableHeaders = visibleKeys.map(key => MovieTableHeaderVisibles[key] && <Table.HeaderCell key={shortid.generate()}> {MovieTableHeaderNames[key]} </Table.HeaderCell>);

    const getToogleArr=(arr,data)=>{
        const predicate=(el)=>el===data["id"];
            let index=arr.findIndex((el)=>el===data["id"]);
            if(index===-1){
                arr.push(data["id"]);
            }else {
                arr.pop(data["id"]);
            }
        return arr;
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
                        <Button icon={ <Icon name='heart outline' /> } toggle active={state.favIds.includes(data["id"])} 
                            content={data[key]}
                            onClick={()=>{
                            //state.favIds.push(data["id"]);
                            setState({...state, ...{favIds:getToogleArr(state.favIds,data)}});

                            }} /> 
                        <Button icon={<Icon name='plus' />} toggle active={state.watchLaterIds.includes(data["id"])} 
                            content={"Watch later"}
                            onClick={()=>{
                            setState({...state, ...{watchLaterIds:getToogleArr(state.watchLaterIds,data)}});
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
