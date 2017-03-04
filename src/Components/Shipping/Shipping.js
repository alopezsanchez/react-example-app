import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Shipping extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.updateShipping = this.updateShipping.bind(this);

        this.state = {
            name: '',
            address: '',
            postalCode: '',
            location: ''
        }
    }

    updateShipping(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

        console.log(this.props);
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <Card className="card">
                <CardTitle title="Shipping Information"></CardTitle>
                <form onSubmit={this.onSubmit}>
                    <TextField name="name" onInput={this.updateShipping} hintText="Name"/><br/>
                    <TextField name="address" onInput={this.updateShipping} hintText="Address"/><br/>
                    <TextField name="postalCode" onInput={this.updateShipping} hintText="Postal Code"/><br/>
                    <TextField name="location" onInput={this.updateShipping} hintText="Location"/><br/>
                    <CardActions>
                        <RaisedButton type="submit" label="Send order" primary={true}/>
                    </CardActions>
                </form>
            </Card>
        );
    }
}

export default Shipping;