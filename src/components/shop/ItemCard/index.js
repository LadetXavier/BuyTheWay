import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';


const ItemCard = ({ item, match }) => {
  const {picture,name,price,description} = item;
  console.log(item);
  return (
    <Link to={`${match.url}/${item._id}`}>
      <Card
        style={{
          width: 200, height: 270, margin: 10, display: 'inline-block'
        }}
      >
        <CardActionArea
          onClick={() => {
          }}
        >
          <CardMedia
                style={{ height: 140 }}
                image={picture.picture1} 
          />
            <CardContent style={{ height: 50 }}>
              <div
                style={{
                  marginLeft: 5,
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {name}
              </div>
              <div style={{ margin: 5 }}>Price: {price} $</div>
              <div style={{ color: "#1a9349", fontWeight: "bold", margin: 5 }}>
              EN STOCK
              </div>
              <div style={{ margin: 5 }}>
                {description}
              </div>
            </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default ItemCard;
