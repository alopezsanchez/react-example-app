import React, { Component } from 'react';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class Product extends Component {
    
    constructor(props) {
        super(props);
        
        this.select = this.select.bind(this);
        this.setFavorite = this.setFavorite.bind(this);
    }

    select(e) {
        e.preventDefault();
        this.props.selectThis();
    }

    setFavorite() {
        console.log('Favorite!!');
    }

    render() {
        return (
            <GridTile className="grid-item" title={this.props.product.name} onClick={this.select} 
                subtitle={<span><b>{this.props.product.prize} € </b></span>}
                actionIcon={<IconButton onClick={this.setFavorite}><StarBorder color="white"/></IconButton>}>
                <img src={`/f/${this.props.product.img}`} alt={this.props.product.name} />
            </GridTile>
        );
    }
}

export default Product;