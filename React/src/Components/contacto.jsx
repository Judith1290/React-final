import React from 'react'

const Contacto = () => {
  
  return (
    
    <div className="todo">
    <div className="contenedor">
      <h2 className="titulo">Get In Touch</h2>
      <form>
        <div className="centrar">
          <input type="text" placeholder="First Name" className="inputContacto" />
          <input type="text" placeholder="Last Name" className="inputContacto" />
        </div>
        <div className="centrar">
          <input type="email" placeholder="Email" className="inputContacto" />
          <input type="tel" placeholder="Phone" className="inputContacto" />
        </div>
        <div className="centrar">
          <input type="text" placeholder="Address" className="inputContacto" />
        </div>
        <div className="centrar">
          <textarea placeholder="Type your message here" className="inputContacto"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p className="gracias">Thanks for submitting!</p>
          </div>
        </div>
      )
    }

export default Contacto
