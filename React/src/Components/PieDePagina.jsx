import Card from 'react-bootstrap/Card';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div className='contenedorFo'>
            <Card className='contenedor'>
                <Card.Header className='footer1'>Informacion</Card.Header>
                <Card.Body>
                    <Card.Title>MG TECHNOLOGY</Card.Title>
                    <Card.Text >
                        Nuestra misión en MG Technology es proporcionar productos de alta calidad que impulsen el crecimiento y
                        la eficiencia de nuestros clientes. Nos comprometemos a ofrecer productos y servicios excepcionales.
                    </Card.Text>
                    <Card.Text >
                         Estamos ubicado en puntarenas centro, frente a grupo mutual a un costado de la farmacia Don Gerardo
                </Card.Text>
                </Card.Body  >
                
                <p className='titulo'>siguenos en nuestras redes sociales</p>
                <div className='iconos'>
                    
                    <Link to={'https://web.whatsapp.com/' }><FaWhatsapp className='redes' /></Link>
                    <Link to={'https://www.facebook.com/MGtechnology2417?mibextid=ZbWKwL'}><FaFacebookF className='redes' /></Link>
                    <Link to={'https://www.instagram.com/mgtechnology2417?igsh=cjZhYjVwYzQyM3Rm'}><FaSquareInstagram className='redes' /></Link>

                </div>
                    </Card>
        </div>

    );
};

export default Footer
