import React from 'react';
import '../App.css';
import {
    Typography,
} from '@material-ui/core';
import MainButton from './mainButton';

interface IProps {
    data: any;
    onClick: any;
}

export default class NameList extends React.Component<IProps>  {

    render() {
        const { data, onClick } = this.props;
        return (
            <div className="listMainContainer" >
                {data.length > 0 && data.map((val: any, index: number) => {
                    return (
                        <div key={index} className="listContainer">
                            <Typography>{val.name}</Typography>
                            <MainButton onClick={(e: any) => onClick(index, e)} buttonname="Remove" />
                        </div>
                    )
                })}
            </div>
        )
    }
}


