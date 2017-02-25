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
                            const item = this.props.cart[id];
                            return (<TableRow key={item.product.id}>
                                <TableRowColumn>{item.product.name}</TableRowColumn>
                                <TableRowColumn>{item.product.prize}</TableRowColumn>
                                <TableRowColumn>{item.quantity}</TableRowColumn>
                            </TableRow>)
                        })}
                    </TableBody>
                </Table>
            </Card>);
    }
}

export default Cart;