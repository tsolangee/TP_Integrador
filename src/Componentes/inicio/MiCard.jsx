import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function MiCard (props)  {

    const { articulo } = props;

    return (
        <div className='container mt-4'>
            <Card style={{width:'30rem'}}>
                <Card.Img variant="flush" src={articulo.urlToImage} />
                <Card.Body>
                    <Card.Title>{articulo.title}</Card.Title>
                    <Card.Text>
                        {articulo.description}
                    </Card.Text>
                    <Button variant='danger' as='a'
                        href={articulo.url}
                        target='_blank'>Ir a la nota
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}