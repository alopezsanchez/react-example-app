import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Shipping extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this
            .onSubmit
            .bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const orderData = {
            name: this.inputName.value,
            address: this.inputAddress.value,
            postalCode: this.inputPC.value,
            location: this.inputLocation.value
        };

        console.log(orderData);
    }

    render() {
        return (
            <Card className="card">
                <CardTitle title="Shipping Information"></CardTitle>
                <form onSubmit={this.onSubmit}>
                    <TextField ref={(textField) => {this.inputName = textField.input;}} hintText="Name"/><br/>
                    <TextField ref={(textField) => {this.inputAddress = textField.input;}} hintText="Address"/><br/>
                    <TextField ref={(textField) => {this.inputPC = textField.input;}} hintText="Postal Code"/><br/>
                    <TextField ref={(textField) => {this.inputLocation = textField.input;}} hintText="Location"/><br/>
                    <CardActions>
                        <RaisedButton type="submit" label="Send order" primary={true}/>
                    </CardActions>
                </form>
            </Card>
        );
    }
}

export default Shipping;