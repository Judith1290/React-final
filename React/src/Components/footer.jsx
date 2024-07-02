
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Footer = () => {
    return (
        <div>
            <div className='contenedorFo'>
                <Card className='contenedor'>
                    <Card.Header className='footer1'>Informacion</Card.Header>
                    <Card.Body>
                        <Card.Title>MG TECHNOLOGY</Card.Title>
                        <Card.Text>
                            <h6>Nuestra misión en MG Technology es proporcionar productos de alta calidad que impulsen el crecimiento y
                                la eficiencia de nuestros clientes. Nos comprometemos a ofrecer productos y servicios excepcionales.</h6>

                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>




            </div>

        </div>
    )
}

export default Footer
