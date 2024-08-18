import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });

  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    if (validate()) {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            console.log("SUCCESS!");
            alert("Email enviado com sucesso!");
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert("Erro ao enviar o email.");
          }
        );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Nome é obrigatório";
    if (!formData.email) tempErrors.email = "Email é obrigatório";
    if (!formData.phone) tempErrors.phone = "Telefone é obrigatório";
    if (!formData.subject) tempErrors.subject = "Assunto é obrigatório";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <div>
        <h1 className="titleForm">Fale comigo</h1>
        <label>Nome</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label>Telefone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>
      <div>
        <label>Assunto</label>
        <textarea
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        {errors.subject && <p className="error">{errors.subject}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
