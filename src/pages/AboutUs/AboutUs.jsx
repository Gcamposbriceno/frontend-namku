import React, { useEffect } from "react";
import TeamMember from "../../components/TeamMember/TeamMember";
import DownloadButton from "../../components/DownloadButton/DownloadButton";
import "./AboutUs.css";

import estatuto from "../../assets/estatuto.pdf";
import alexisImg from "../../assets/Finales/AlexisHenriquez.jpg";
import anzineImg from "../../assets/Finales/AnzineSazo.jpg";
import catalinaImg from "../../assets/Finales/CatalinaAguilera.jpg";
import cristianImg from "../../assets/Finales/CristianHidalgo.jpg";
import davidImg from "../../assets/Finales/DavidRodriguez.jpg";
import diegoImg from "../../assets/Finales/DiegoVergara.jpg";
import eduardoImg from "../../assets/Finales/EduardoHernandez.jpg";
import julioImg from "../../assets/Finales/JulioAnanias.jpeg";
import karinaImg from "../../assets/Finales/KarinaHenriquez.jpg";
import nataliaImg from "../../assets/Finales/NataliaMorales.jpg";
import nicolasImg from "../../assets/Finales/NicolasEnriquez.jpg";
import pabloImg from "../../assets/Finales/PabloSalah.jpg";
import pauletteImg from "../../assets/Finales/PauletteAbarca.png";
import rodrigoImg from "../../assets/Finales/RodrigoGonzalez.jpg";
import sebastianZImg from "../../assets/Finales/SebastianZamorano.jpg";
import sebastianMImg from "../../assets/Finales/SebastianMoreno.jpeg";

import titleImg from "../../assets/Fotos para web/DSC_3151.jpg";

function AboutUs() {
  useEffect(() => {
    document.title = "Ñamku - Nosotros";
  }, []);

  const teamData = [
    {
      name: "Eduardo Hernández Antolisei",
      title: "Director",
      image: eduardoImg,
      // bio: "Médico Veterinario UST, doctor en Medicina y Sanidad Animal por la Universidad de Córdoba España. Docente en el área de cirugía de la Universidad Santo Tomás Viña del Mar.",
    },
    {
      name: "Pablo Salah Jaar",
      title: "Director",
      image: pabloImg,
      // bio: "Médico Veterinario UST, Magíster en Ciencias Veterinarias de la Universidad de Chile. Docente en el área de clínica equina de la Universidad Santo Tomás Viña del Mar.",
    },
    {
      name: "Julio Ananías Cattan",
      title: "Gerente de Administración",
      image: julioImg,
    },
    {
      name: "Paulette Abarca Mora",
      title: "Jefa Área Médica",
      image: pauletteImg,
    },
    {
      name: "Catalina Aguilera Vallejos",
      title: "Encargada de Bienestar Animal",
      image: catalinaImg,
    },
    {
      name: "Alexis Henriquez Salgado",
      title: "Médico Veterinaria",
      image: alexisImg,
    },
    {
      name: "David Rodriguez Jaque",
      title: "Médico Veterinario",
      image: davidImg,
    },
    {
      name: "Karina Henríquez Gómez",
      title: "Ingeniero Ambiental",
      image: karinaImg,
    },
    {
      name: "Natalia Morales Hernández",
      title: "Médico Veterinaria",
      image: nataliaImg,
    },
    {
      name: "Nicolás Enríquez Rentería",
      title: "Médico Veterinario División San Antonio",
      image: nicolasImg,
    },
    {
      name: "Diego Vergara Villar",
      title: "Médico Veterinario División San Antonio",
      image: diegoImg,
    },
    {
      name: "Sebastián Zamorano Santibáñez",
      title: "Técnico Veterinario División San Antonio",
      image: sebastianZImg,
    },
    {
      name: "Cristian Hidalgo Jara",
      title: "Ingeniero Ambiental División San Antonio",
      image: cristianImg,
    },
    {
      name: "Anzine Sazo Leyton",
      title: "Técnico Veterinaria División El Melón",
      image: anzineImg,
    },
    {
      name: "Sebastián Moreno Guerrero",
      title: "Asesor en Terreno División El Melón",
      image: sebastianMImg,
    },
    {
      name: "Rodrigo González González",
      title: "Encargado Mantención Centro Rescate Concón",
      image: rodrigoImg,
    },
  ];

  return (
    <div className="content">
      <div className="page-title-container">
        <img
          src={titleImg}
          alt="imagen de nuestro equipo"
          className="title-bg"
          style={{ objectPosition: "0% 30%" }}
        />
        <div className="title-dark-tint"></div>
        <h1 className="page-title">Nosotros</h1>
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

      <div className="section team-section">
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
