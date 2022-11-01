import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div>
        <footer className="pie-pagina">
        <div className="grupo-1">
            <div className="box">
                <figure>
                    <a href="#">
                        <img src="logo-ingelaf.png" alt="Logo de Ingelaf"/>
                    </a>
                </figure>
            </div>
            <div className="box">
                <h2>Acerca de nosotros</h2>
                <p>Nuestra dedicación en el trabajo que ofrecemos en la instalación
                    de tablero eléctricos,electricidad y metalurgía en las empresas y hogares
                    de Chile es de excelencia.
                </p>
               
            </div>
            <div className="box">
                <h2>REDES SOCIALES</h2>
                <div className="red-social">
                    <a href="#" > <img className='facebook' src="https://www.rpc.ox.ac.uk/wp-content/uploads/2021/10/Facebook-Logo.png" alt="" /></a>
                    <a href="#" ><img className="instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" /></a>
                    <a href="#" ><img className="linkedin" src="https://pbs.twimg.com/media/FgfJovbXgAMJpqG?format=png&name=small" alt="" /></a>
                </div>
            </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2022 <b>INGELAF</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
    </div>
  )
}

export default Footer