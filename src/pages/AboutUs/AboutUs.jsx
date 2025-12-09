import React, { useEffect } from "react";
import TeamMember from "../../components/TeamMember/TeamMember";
import DownloadButton from "../../components/DownloadButton/DownloadButton";
import "./AboutUs.css";

import estatuto from "../../assets/estatuto.pdf";
import hernandezImg from "../../assets/Finales/Personal-2.jpg";
import salahImg from "../../assets/Finales/Personal-1.jpg";
import ananiasImg from "../../assets/equipo/ananias.jpg";
import pauletteImg from "../../assets/Finales/Personal-6.png";
import marcelaImg from "../../assets/equipo/marcela.jpg";
import nicoleImg from "../../assets/equipo/nicole.jpg";
import vicenteImg from "../../assets/equipo/vicente.jpg";
import titleImg from "../../assets/DSC_3151.jpg";

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
          style={{ objectPosition: "0% 30%" }}
        />
        <div className="title-dark-tint"></div>
        <div className="page-title-container">
          <h1 className="page-title">Nosotros</h1>
        </div>
      </div>
      <div className="title-break"></div>
      <div className="row alt-bg">
        <div className="section">
          <h2>
            Fundación Ñamku nace del compromiso de médicos veterinarios con la
            conservación de la fauna silvestre, desarrollando rescate,
            rehabilitación, investigación y educación ambiental en Chile.
          </h2>
        </div>
      </div>
      <div className="section">
        <h2>¿Quiénes somos?</h2>
        <p>
          Hace más de 30 años, dos estudiantes de Medicina Veterinaria, Pablo
          Salah Jaar y Eduardo Hernández Antolisei iniciaron un camino que los
          llevaría a dedicar su vida a la protección de la fauna silvestre. Tras
          reencontrarse años después como Director y Subdirector del Hospital
          Clínico Veterinario de la Universidad Santo Tomás de Viña del Mar,
          asumen el desafío de crear el primer Centro de Rescate y
          Rehabilitación de Fauna Silvestre de la Región de Valparaíso.
        </p>
        <p>
          En 2013 nació Ñamku, y en 2014 se constituyó oficialmente la Fundación
          para la Fauna Silvestre Ñamku, trabajando junto al SAG y diversas
          instituciones. Hoy desarrollamos programas de rescate, rehabilitación,
          reinserción, investigación y educación ambiental, con un propósito
          claro:{" "}
          <b>
            proteger la biodiversidad y conservar la fauna silvestre de Chile.
          </b>
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
