import React, { useEffect } from "react";
import TeamMember from "../../components/TeamMember/TeamMember";
import estatuto from "../../assets/estatuto.pdf";
import "./AboutUs.css";
import DownloadButton from "../../components/DownloadButton/DownloadButton";

function AboutUs() {
  useEffect(() => {
    document.title = "Ñamku - Nosotros";
  }, []);

  return (
    <div className="content">
      <h1 className="page-title">Nosotros</h1>
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
        <div className="team">
          <TeamMember
            name="Dr. Eduardo Hernández Antolisei"
            title="Director"
            imageName="hernandez.jpg"
          >
            Médico Veterinario UST, doctor en Medicina y Sanidad Animal por la
            Universidad de Córdoba España. Docente en el área de cirugía de la
            Universidad Santo Tomás Viña del Mar.
          </TeamMember>
          <TeamMember
            name="Dr. Pablo Salah Jaar"
            title="Director"
            imageName="salah.jpg"
          >
            Médico Veterinario UST, Magíster en Ciencias Veterinarias de la
            Universidad de Chile. Docente en el área de clínica equina de la
            Universidad Santo Tomás Viña del Mar.
          </TeamMember>
          <TeamMember
            name="Julio Ananías Cattan"
            title="Director"
            imageName="ananias.jpg"
          >
            Ingeniero Civil de la Pontificia Universidad Católica de Chile.
            Oficial de Enlace en Chile para World Animal Protection. Se ha
            desempeñado en importantes empresas chilenas de la industria
            alimenticia, farmacéutica, productos escolares y educación superior,
            desarrollando funciones en Marketing, Ventas, Relaciones
            Institucionales y Creación de Valor Compartido.
          </TeamMember>
          <TeamMember
            name="Paulette Abarca Mora"
            title=""
            imageName="paulette.jpg"
          >
            Médico Veterinario, especialista en fauna silvestre con experiencia
            en manejo y bienestar animal en fauna silvestre, participante de
            proyectos de investigación del Museo de Historia Natural en fauna
            silvestre endémica. Encargada del Área de Salud del Centro de
            Rescate Ñamku.
          </TeamMember>
          <TeamMember
            name="Marcela Maturana Tealdo"
            title=""
            imageName="marcela.jpg"
          >
            Licenciada en ciencias veterinarias con formación en ecología y
            ambiente, participación activa en centro de rehabilitación de aves
            rapaces Ñamku. Coordinadora de medios audiovisuales, redes y
            comunicación externa de Fundación para la Fauna Silvestre Ñamku.
          </TeamMember>
          <TeamMember name="Nicole Heck Madina" title="" imageName="nicole.jpg">
            Licenciada en Ciencias Veterinarias con experiencia nacional e
            internacional en rescate, manejo y rehabilitación de fauna marina.
            Participación activa en siniestros marinos acontecidos en la V
            región. Coordinadora de Voluntariado en Fundación Ñamku.
          </TeamMember>
          <TeamMember
            name="Vicente González Olivares"
            title=""
            imageName="vicente.jpg"
          >
            Médico Veterinario, Especialista en Fauna Silvestre y Monitor de
            Humedales, encargado del Área de Salud del Centro de Rescate Ñamku,
            con Formación en Ecología y Ambiente, con experiencia nacional e
            internacional en Rescate y Rehabilitación de Fauna Marina y
            participación activa en siniestros marinos acontecidos en la V
            región.
          </TeamMember>
        </div>
        <div>
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
