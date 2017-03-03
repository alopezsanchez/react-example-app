import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import {
    Card,
    CardTitle
} from 'material-ui/Card';


class Cart extends Component {

    constructor(props) {
        super(props);

        console.log(props.cart);
    }

    render() {
        return (
            <Card className="card">
                <CardTitle
                    title="Cart">
                </CardTitle>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Prize</TableHeaderColumn>
                            <TableHeaderColumn>Quantity</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Object.keys(this.props.cart).map(id => {
                            //const item = this.props.cart[id];
                            //const item = this.props.products[id];
                            const item = this.props.products.find(product => product.id === +id);
                            return (<TableRow key={item.id}>
                                <TableRowColumn>{item.name}</TableRowColumn>
                                <TableRowColumn>{item.prize}</TableRowColumn>
                                <TableRowColumn>{this.props.cart[id]}</TableRowColumn>
                            </TableRow>)
                        })}
                    </TableBody>
                </Table>
            </Card>);
    }
}

export default Cart;