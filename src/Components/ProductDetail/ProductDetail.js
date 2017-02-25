import React, {Component} from 'react';
import {
    Card,
    CardActions,
    CardTitle,
    CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class ProductDetail extends Component {

    constructor(props) {
        super(props);

        this.addToCart = this.addToCart.bind(this);
    }

    addToCart() {
        this.props.addToCart(this.props.product);
    }

    render() {
        return (
            <Card className="card">

                <CardTitle
                    title={this.props.product.name}
                    subtitle={this.props.product.prize + '€'}/>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium
                    massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum
                    sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris,
                    mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <RaisedButton onClick={this.addToCart} label="Add to cart" primary={true} />
                </CardActions>
            </Card>
        );
    }
}

export default ProductDetail;