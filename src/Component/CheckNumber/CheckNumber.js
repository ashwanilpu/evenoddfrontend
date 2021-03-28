import React, { Component } from 'react' ;
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import checkEvenOrOdd from '../../Services/evenOddService';
import NumberTable from './NumberTable';

export class CheckNumber extends Component {
    state = {
        numberString : "" ,
        numberResult : [] ,
    }
    
    handleChange = ( newval ) => {
        this.setState({numberString:newval.currentTarget.value});
    }
    
    handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await checkEvenOrOdd(this.state.numberString);
        debugger
        this.setState({numberResult:response.data.data})
        console.log(response)
        debugger
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <InputLabel htmlFor="component-outlined">Name</InputLabel>
                    <OutlinedInput id="component-outlined"  onChange = {this.handleChange} label="Name" />
                    <Button type="submit">Check</Button>
                </form>
                {this.state.numberResult && this.state.numberResult.length > 0 && 
                    <NumberTable rows= {this.state.numberResult}/>
                }
            </div>
        )
    }
}

export default CheckNumber
