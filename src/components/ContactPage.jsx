import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiPaperAirplane } from "react-icons/hi";

function ContactPage() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
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
      link: "https://wa.me/916006280992",
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
    <section className="px-5 py-20 sm:px-8 lg:px-10" id="contact">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#81766b] dark:text-[#c9b99a]">
            05 / Contact / Start
          </div>
          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.95] tracking-tight text-[#151311] sm:text-5xl dark:text-[#f0ece4]">
            Got an interesting problem? Let's talk about it.
          </h2>
          <p className="mt-5 max-w-2xl font-mono text-xs uppercase tracking-[0.18em] text-[#81766b] dark:text-[#c9b99a]">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full border border-[#81766b]/25 bg-[#f8f4ec]/80 p-6 shadow-[5px_5px_0_rgba(139,115,85,0.14)] sm:p-8 dark:border-[#f0ece4]/12 dark:bg-[#1f1b17]/80 dark:shadow-[5px_5px_0_rgba(245,240,232,0.05)]">
              <h3 className="text-3xl font-bold text-[#151311] dark:text-[#f0ece4]">Let's Connect</h3>
              <p className="mt-4 text-base leading-7 text-[#6f665e] dark:text-[#d8cfc3]">
                I'd love to hear from you! Whether you have a question,
                collaboration opportunity, or just want to say hello, feel free to
                reach out. Simply drop me a message, and I'll get back to you as
                soon as possible.
              </p>
              <div className="mt-8 space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <div
                      className="grid h-11 w-11 shrink-0 place-items-center border border-[#81766b]/25 bg-[#f0ece4] text-xl text-[#b65b3a] dark:border-[#f0ece4]/12 dark:bg-[#151311] dark:text-[#d4622a]"
                      style={{ "--info-color": info.color }}
                    >
                      <info.icon />
                    </div>
                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-[#81766b] dark:text-[#c9b99a]">{info.label}</span>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-[#151311] hover:text-[#b65b3a] dark:text-[#f0ece4] dark:hover:text-[#d4622a]"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-[#151311] dark:text-[#f0ece4]">{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.a
                href="https://wa.me/916006280992"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 border border-[#151311] bg-[#151311] px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-[#f8f4ec] shadow-[4px_4px_0_rgba(184,66,10,0.35)] transition-colors hover:bg-[#b65b3a] dark:border-[#f0ece4] dark:bg-[#f0ece4] dark:text-[#151311] dark:hover:bg-[#d4622a]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IoLogoWhatsapp />
                <span>Say Hello on WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full border border-[#81766b]/25 bg-[#f8f4ec]/80 p-6 shadow-[5px_5px_0_rgba(139,115,85,0.14)] sm:p-8 dark:border-[#f0ece4]/12 dark:bg-[#1f1b17]/80 dark:shadow-[5px_5px_0_rgba(245,240,232,0.05)]">
              <h3 className="text-3xl font-bold text-[#151311] dark:text-[#f0ece4]">Send a Message</h3>
              <form
                action="https://getform.io/f/5a0211bc-584c-467a-98a1-e991caea1f39"
                method="POST"
                className="mt-6 space-y-5"
              >
                <div>
                  <label htmlFor="name" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-[#81766b] dark:text-[#c9b99a]">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full border border-[#81766b]/25 bg-[#f0ece4] px-4 py-3 text-[#151311] placeholder:text-[#81766b]/70 focus:border-[#b65b3a] dark:border-[#f0ece4]/12 dark:bg-[#151311] dark:text-[#f0ece4]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-[#81766b] dark:text-[#c9b99a]">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full border border-[#81766b]/25 bg-[#f0ece4] px-4 py-3 text-[#151311] placeholder:text-[#81766b]/70 focus:border-[#b65b3a] dark:border-[#f0ece4]/12 dark:bg-[#151311] dark:text-[#f0ece4]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-[#81766b] dark:text-[#c9b99a]">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="6"
                    required
                    className="w-full resize-none border border-[#81766b]/25 bg-[#f0ece4] px-4 py-3 text-[#151311] placeholder:text-[#81766b]/70 focus:border-[#b65b3a] dark:border-[#f0ece4]/12 dark:bg-[#151311] dark:text-[#f0ece4]"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 border border-[#151311] bg-[#151311] px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-[#f8f4ec] shadow-[4px_4px_0_rgba(184,66,10,0.35)] transition-colors hover:bg-[#b65b3a] dark:border-[#f0ece4] dark:bg-[#f0ece4] dark:text-[#151311] dark:hover:bg-[#d4622a]"
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

        <motion.footer
          className="mt-16 grid items-center gap-4 border-t border-[#81766b]/20 py-8 font-mono text-xs uppercase tracking-[0.18em] text-[#81766b] sm:grid-cols-[1fr_auto_1fr] dark:border-[#f0ece4]/10 dark:text-[#c9b99a]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-left text-lg leading-none">©</span>
          <p className="text-center">
            2025. Designed & Built by{" "}
            <span className="font-semibold tracking-[0.22em] text-[#151311] dark:text-[#f0ece4]">Sunil Kumar</span>
          </p>
          <div className="hidden justify-end gap-4 sm:flex">
            <a href="https://github.com/chthonn" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#b65b3a] dark:hover:text-[#d4622a]">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shunnu" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#b65b3a] dark:hover:text-[#d4622a]">
              LinkedIn
            </a>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}

export default ContactPage;
