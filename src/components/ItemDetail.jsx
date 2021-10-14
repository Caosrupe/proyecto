
import React from 'react';
import {Card} from 'react-bootstrap';
import  ItemCount from './CountContainer';
import {Link} from 'react-router-dom';

const ItemDetail =({jsonpack})=>{
    console.log("Detalle de ItemDetail:",jsonpack);
    return(
      <>
        <div id="centerman" align="center">
          <Card className="card">
            <Card.Header>
              <Card.Img className="top"  src={jsonpack.pictureurl} />
            </Card.Header>
            <Card.Body className="body">
              <Link to={`/item/${jsonpack.id}`}>
                <Card.Link href="#" >{jsonpack.title}</Card.Link>
              </Link>
              <Card.Subtitle className="subtitulo">Precio:{jsonpack.price}</Card.Subtitle>
              <Card.Text>
                Cantidad disponible:{jsonpack.stock}
              </Card.Text>
            </Card.Body>
          </Card>
          <ItemCount product_name={jsonpack.title} stock={jsonpack.stock} initial={1}/>
        </div>
      </>
    )
};

export default ItemDetail;
