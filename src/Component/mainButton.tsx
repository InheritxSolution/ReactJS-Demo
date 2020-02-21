import React from 'react';
import '../App.css';
import {
    Button,
} from '@material-ui/core';

interface IProps {
    onClick: any,
    buttonname: any
}

export default class MainButton extends React.Component<IProps>  {
    render() {
        const { onClick, buttonname } = this.props;
        return (
            <Button
                className="buttonContainer"
                variant="contained"
                color="primary"
                type="submit"
                onClick={onClick}
            >
                {buttonname}
            </Button>
        )
    }
}


