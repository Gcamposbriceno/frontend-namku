import { useState, useRef } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import "./ContactForm.css";

function ContactForm() {
  const formRef = useRef(); // 1. Create a reference to the form HTML element
  const [formData, setFormData] = useState({
    name: "", // Changed to match typical EmailJS variable naming
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!formData.email.trim()) newErrors.email = "El correo es obligatorio.";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Correo inválido.";
    if (!formData.message.trim())
      newErrors.message = "El mensaje no puede estar vacío.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // 2. Start Sending Process
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current, // Pass the actual HTML form element
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("¡Mensaje enviado con éxito!");
          setFormData({ name: "", email: "", message: "" }); // Reset
          setIsSending(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Hubo un error al enviar el mensaje. Inténtalo más tarde.");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="contact-form-container">
      {/* 3. Attach ref={formRef} to the form tag */}
      <form
        className="contact-form"
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
      >
        <h2>Contáctanos</h2>

        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name" // MUST match variable name in EmailJS template
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
            placeholder="Tu nombre"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email" // MUST match variable name in EmailJS template
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
            placeholder="tucorreo@ejemplo.com"
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "error" : ""}
            placeholder="Envíanos un mensaje"
          ></textarea>
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>

        <button type="submit" className="submit-btn" disabled={isSending}>
          {isSending ? "Enviando..." : "Enviar Mensaje"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
