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

/*import ShippingRefs from '../Shipping/ShippingRefs';*/
import Shipping from '../Shipping/Shipping';


class Cart extends Component {
    render() {
        return (
            <div>
                <Card className="card">
                    <CardTitle
                        title="Cart">
                    </CardTitle>
                    <Table selectable={false}>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Prize</TableHeaderColumn>
                                <TableHeaderColumn>Quantity</TableHeaderColumn>
                                <TableHeaderColumn>Total</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Object.keys(this.props.cart).map(id => {
                                //const item = this.props.cart[id];
                                //const item = this.props.products[id];
                                const item = this.props.products.find(product => product.id === +id);
                                const quantity = this.props.cart[id];
                                const totalLine = item.prize * quantity;
                                return (<TableRow key={item.id}>
                                    <TableRowColumn>{item.name}</TableRowColumn>
                                    <TableRowColumn>{item.prize}</TableRowColumn>
                                    <TableRowColumn onClick={e => {this.props.updateCart(id, +this.props.cart[id] + 1)}}>{this.props.cart[id]}</TableRowColumn>
                                    <TableRowColumn>{totalLine}</TableRowColumn>
                                </TableRow>)
                            })}
                        </TableBody>
                    </Table>
                </Card>
                {/* <ShippingRefs></ShippingRefs> */}
                <Shipping></Shipping>
            </div>);
    }
}

export default Cart;