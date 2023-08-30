import { useState } from "react";

import { Form, Button, Card, Table} from "react-bootstrap" ;

export function Contacto (){

    
    const [formulario, setFormulario] = useState({nombre:'', correo:'', mensaje:''});

    function enviarInformacion(){
        alert(JSON.stringify(formulario));
    }

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <Card bg={'dark'} text={'white'} border="danger">
                        <Card.Body>
                            <Card.Title>Para más consultas</Card.Title>
                            
                            <Form onSubmit={enviarInformacion}>
                                <Form.Group className="mb-3" controlId="formBasicNombre">
                                    <Form.Label>Nombre y Apellido</Form.Label>
                                    <Form.Control type="text" onChange={(e) => setFormulario({ ...formulario, nombre:e.target.value })}/>
                                    <Form.Text className="text-muted">
                                        Tu correo no será compartido.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCorreo">
                                    <Form.Label>Correo Electrónico</Form.Label>
                                    <Form.Control type="email" onChange={(e) => setFormulario({ ...formulario, correo: e.target.value})}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicMensaje">
                                    <Form.Label>Mensaje</Form.Label>
                                    <Form.Control as="textarea" rows={5} onChange={(e) => setFormulario({ ...formulario, mensaje: e.target.value})}/>
                                </Form.Group>

                                <Button variant="danger" type="submit">
                                    Enviar
                                </Button>
                            </Form>  
                        </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-6">
                    <Card border="dark">
                        <Card.Body>
                            <Card.Title>Teléfonos Directos</Card.Title>
                            <Table striped bordered hover variant="success">
                                <thead>
                                    <tr>
                                    <th>SECTOR</th>
                                    <th>Teléfono</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Alumnado</td>
                                        <td>423 1421</td>
                                    </tr>
                                    <tr>
                                        <td>Bedelía</td>
                                        <td>423 1422</td>
                                    </tr>
                                    <tr>
                                        <td>Biblioteca</td>
                                        <td>423 1423</td>
                                    </tr>
                                    <tr>
                                        <td>Bienestar Estudiantil</td>
                                        <td>423 1437</td>
                                    </tr>
                                    <tr>
                                        <td>Centro de Estudiantes</td>
                                        <td>423 1419</td>
                                    </tr>
                                    <tr>
                                        <td>Decano</td>
                                        <td>423 1402</td>
                                    </tr>
                                </tbody>
                                </Table>
                                <Card.Title>Correos Electrónicos Institucionales</Card.Title>
                            <Table striped bordered hover variant="success">
                                <thead>
                                    <tr>
                                    <th>Departamento</th>
                                    <th>Correo electrónico</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Secretaria de Extensión Universitaria</td>
                                        <td>informes.fcad@uner.edu.ar</td>
                                    </tr>
                                    <tr>
                                        <td>Oficina de Becas</td>
                                        <td>estudiantes.fcad@uner.edu.ar</td>
                                    </tr>
                                    <tr>
                                        <td>Oficina de ciencia y Técnica</td>
                                        <td>oficinacyt.fcad@uner.edu.ar</td>
                                    </tr>
                                    <tr>
                                        <td>Oficina de Pasantías</td>
                                        <td>pasantias.fcad@uner.edu.ar</td>
                                    </tr>
                                </tbody>
                                </Table>  

                                <h6>Dirección:</h6>
                                <p>
                                Monseñor Tavella 1424. Concordia. CP(3200). | Provincia de Entre Ríos
Teléfono: (+54) (345) 423 1400 
                                </p>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            
        </>
    )
}