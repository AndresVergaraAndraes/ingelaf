import React from "react";
import "../styles/WorkCard.css";
import electricista_domicilio from '../assets/services/electricista-domicilio.png'
import instalaciones_electricas from '../assets/services/instalaciones-electricas.png'
import mantecion_electrica from '../assets/services/mantencion-electrica.jpg'
import reparacion_electrica from '../assets/services/reparacion-electrica.png'
import instalacion_iluminacion from '../assets/services/instalacion-iluminacion.png'
import metalurgia_portones_electricos from '../assets/services/metalurgia-portones-electricos.png'

const services = [{id:1,title:'Electricista a domicilio',img:electricista_domicilio},
{id:2,title:'Instalaciones eléctricas',img:instalaciones_electricas},
{id:3,title:'Mantención eléctrica',img:mantecion_electrica},
{id:4,title:'Reparación eléctrica',img:reparacion_electrica},
{id:5,title:'Instalación de iluminación',img:instalacion_iluminacion},
{id:6,title:'Metalurgía y Portones Eléctricos',img:metalurgia_portones_electricos}]
const WorkCard = () => {
  return (
    <div className="work-container">
      <div className="services-container">
      {
          services.map(service =>{
            return(
            <div className="services-card" key={service.id}>
            <img src={service.img} alt="services" />
            <h2 className="service-title">{service.title}</h2>
        </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default WorkCard;
