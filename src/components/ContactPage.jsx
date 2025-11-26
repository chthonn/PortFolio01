import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCopyright } from "react-icons/fa";
import { HiPaperAirplane } from "react-icons/hi";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: HiMail,
      label: "Email",
      value: "skswork004@gmail.com",
      link: "mailto:skswork004@gmail.com",
      color: "#ea4335",
    },
    {
      icon: IoLogoWhatsapp,
      label: "WhatsApp",
      value: "+91 6006280992",
      link: "https://wa.me/6006280992",
      color: "#25d366",
    },
    {
      icon: HiLocationMarker,
      label: "Location",
      value: "India",
      link: null,
      color: "#6366f1",
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <HiMail className="section-icon" />
            <h2>Get In Touch</h2>
          </div>
          <p className="section-subtitle">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info-card">
              <h3>Let's Connect</h3>
              <p>
                I'd love to hear from you! Whether you have a question,
                collaboration opportunity, or just want to say hello, feel free to
                reach out. Simply drop me a message, and I'll get back to you as
                soon as possible.
              </p>
              <div className="contact-info-items">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <div
                      className="contact-info-icon"
                      style={{ "--info-color": info.color }}
                    >
                      <info.icon />
                    </div>
                    <div className="contact-info-details">
                      <span className="contact-info-label">{info.label}</span>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-info-value"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="contact-info-value">{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.a
                href="https://wa.me/6006280992"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IoLogoWhatsapp />
                <span>Say Hello on WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-form-card">
              <h3>Send a Message</h3>
              <form
                action="https://getform.io/f/5a0211bc-584c-467a-98a1-e991caea1f39"
                method="POST"
                className="contact-form"
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="6"
                    required
                    className="form-textarea"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <HiPaperAirplane />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            <FaCopyright /> 2025. Designed & Built by{" "}
            <span className="footer-name">Sunil Kumar</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactPage;
