import React, { useEffect } from "react";
import TeamMember from "../../components/TeamMember/TeamMember";
import DownloadButton from "../../components/DownloadButton/DownloadButton";
import "./AboutUs.css";

import estatuto from "../../assets/estatuto.pdf";
import hernandezImg from "../../assets/equipo/hernandez.jpg";
import salahImg from "../../assets/equipo/salah.jpg";
import ananiasImg from "../../assets/equipo/ananias.jpg";
import pauletteImg from "../../assets/equipo/paulette.jpg";
import marcelaImg from "../../assets/equipo/marcela.jpg";
import nicoleImg from "../../assets/equipo/nicole.jpg";
import vicenteImg from "../../assets/equipo/vicente.jpg";
import titleImg from "../../assets/Fotos para web/_AGS2779.jpg";

function AboutUs() {
  useEffect(() => {
    document.title = "Ñamku - Nosotros";
  }, []);

  const teamData = [
    {
      name: "Dr. Eduardo Hernández Antolisei",
      title: "Director",
      image: hernandezImg,
      bio: "Médico Veterinario UST, doctor en Medicina y Sanidad Animal por la Universidad de Córdoba España. Docente en el área de cirugía de la Universidad Santo Tomás Viña del Mar.",
    },
    {
      name: "Dr. Pablo Salah Jaar",
      title: "Director",
      image: salahImg,
      bio: "Médico Veterinario UST, Magíster en Ciencias Veterinarias de la Universidad de Chile. Docente en el área de clínica equina de la Universidad Santo Tomás Viña del Mar.",
    },
    {
      name: "Julio Ananías Cattan",
      title: "Director",
      image: ananiasImg,
      bio: "Ingeniero Civil de la PUC. Oficial de Enlace para World Animal Protection. Experto en Marketing, Ventas y Relaciones Institucionales.",
    },
    {
      name: "Paulette Abarca Mora",
      title: "",
      image: pauletteImg,
      bio: "Médico Veterinario, especialista en manejo y bienestar animal en fauna silvestre. Participante de proyectos del Museo de Historia Natural.",
    },
    {
      name: "Marcela Maturana Tealdo",
      title: "",
      image: marcelaImg,
      bio: "Licenciada en ciencias veterinarias. Coordinadora de medios audiovisuales, redes y comunicación externa de Fundación Ñamku.",
    },
    {
      name: "Nicole Heck Madina",
      title: "",
      image: nicoleImg,
      bio: "Licenciada en Ciencias Veterinarias con experiencia internacional en rescate y rehabilitación de fauna marina.",
    },
    {
      name: "Vicente González Olivares",
      title: "",
      image: vicenteImg,
      bio: "Médico Veterinario, Especialista en Fauna Silvestre y Monitor de Humedales. Experiencia en rescate de fauna marina.",
    },
  ];

  return (
    <div className="content">
      <div>
        <img
          src={titleImg}
          alt="imagen de nuestro equipo"
          className="title-bg"
          style={{ objectPosition: "center 70%" }}
        />
        <div className="title-dark-tint"></div>
        <div className="page-title-container">
          <h1 className="page-title">Nosotros</h1>
        </div>
      </div>
      <div className="title-break"></div>
      <div className="section">
        <h2>¿Quiénes somos?</h2>
        <p>
          Si alguien nos hubiese dicho hace 20 años que algún día la fauna
          silvestre se cruzaría en nuestros caminos, probablemente hubiésemos
          pensado que estábamos locos…
        </p>
        <p>
          El año 1990 Universidad Santo Tomás abre la primera Escuela de
          Medicina Veterinaria Privada en Chile. Ese mismo año, Pablo Salah Jaar
          y Eduardo Hernández Antolisei ingresan a la carrera, obteniendo sus
          títulos profesionales el año 1995. A partir de ese momento, siguen
          rumbos distintos, movidos por el interés en diferentes aéreas de la
          profesión.
        </p>
        <p>
          Veinte años más tarde, ambos veterinarios se reencuentran en su alma
          máter, a cargo de la Dirección y Subdirección del Hospital Clínico
          Veterinario Universidad Santo Tomás de Viña del Mar donde, por cosas
          del destino, asumen el desafío de crear y dirigir el primer Centro de
          Rescate y Rehabilitación de Fauna Silvestre de la Región de
          Valparaíso.
        </p>
        <p>
          Así comienza esta aventura, con la pasión y el compromiso por aportar
          en la conservación de la fauna silvestre.
        </p>
        <p>
          En los últimos años han tenido que enfrentar importantes desafíos
          ambientales, tales como el rescate y recuperación de aves
          empetroladas, la intoxicación de cóndores y un sinfín de otras aves y
          mamíferos que día a día llegan para ser tratados y recuperados.
        </p>
        <p>
          Luego, surge la necesidad de crear el primer Centro de Rehabilitación
          de Aves Rapaces de la región. Es así como el año 2013 nace Ñamku y
          comienza a trabajar, -de manera paralela- en conjunto con el Servicio
          Agrícola Ganadero (SAG) y el Centro de Rescate de Fauna Silvestre del
          HCV-UST.
        </p>
        <p>
          En 2014 se transforma en la Fundación para la Fauna Silvestre Ñamku,
          la cual entre sus objetivos, tiene la creación de programas de
          investigación aplicados a la conservación, -en conjunto con
          instituciones públicas y privadas, nacionales e internacionales-,
          capaces de generar cambios significativos mediante la educación
          medioambiental.
        </p>
      </div>

      <div className="section">
        <h2>Nuestro Equipo de Trabajo</h2>
        <div className="team-grid">
          {teamData.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              title={member.title}
              image={member.image}
            >
              {member.bio}
            </TeamMember>
          ))}
        </div>
      </div>

      <div className="row alt-bg">
        <div className="section">
          <h2>Estatuto</h2>
          <p>
            "Fundación para la Fauna Silvestre Ñamku" es una fundación de
            beneficencia, sin fines de lucro, que se rige por las normas de
            Título XXXIII del Libro Primero del Código. Entre nuestros objetivos
            se encuentran: el rescate y la rehabilitación de la fauna silvestre
            chilena -tanto marina como terrestre-; la promoción del desarrollo y
            la investigación en el área de la fauna silvestre; la promoción de
            la educación ambiental y de la conservación de las especies y; el
            apoyo para el desarrollo de políticas públicas relativas a la
            conservación del medio ambiente y de las especies animales nativas,
            entre otros.
          </p>
          <div className="estatuto-download">
            <h3>Si quieres conocer más, ¡revisa nuestro estatuto!</h3>
            <DownloadButton href={estatuto} download="estatuto-namku.pdf">
              Descargar Estatuto
            </DownloadButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
