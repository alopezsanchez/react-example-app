import React, { Component } from 'react';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';

class Product extends Component {
    
    constructor(props) {
        super(props);
        
        this.select = this.select.bind(this);
        this.toggleStar = this.toggleStar.bind(this);

        this.state = {
            starred: false
        }
    }

    toggleStar(e) {
        e.stopPropagation();

        this.props.toggleStar(this.props.product);
    }

    select(e) {
        e.preventDefault();
        this.props.selectThis();
    }

    render() {
        return (
            <GridTile className="grid-item" title={this.props.product.name} onClick={this.select} 
                subtitle={<span><b>{this.props.product.prize} € </b></span>}
                actionIcon={<IconButton onClick={this.toggleStar}>
                                {this.props.product.starred ? <Star color="white"></Star> : <StarBorder color="white"/>}
                            </IconButton>}>
                <img src={`/f/${this.props.product.img}`} alt={this.props.product.name} />
            </GridTile>
        );
    }
}

export default Product;