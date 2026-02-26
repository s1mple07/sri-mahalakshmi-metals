import React, { useState } from 'react';

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const phoneNumber = "918637446196";

    const text = `
Name: ${name}
Email: ${email}
Message: ${message}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <section className='container' id='contact-us'>
        <div className="contact-section">
          <h3>Contact Us</h3>

          <div className="contact-info">
            <div className="info-content">
              <h5>get in touch</h5>

              <li>
                <a href="tel:+918637446196">
                  <div className='get-touch-icon'>
                    <span><i className="fa fa-phone"></i></span>
                    <h6>phone</h6>
                  </div>

                  <h6 className='get-touch-link'>+91 8637446196</h6>
                </a>
              </li>

              <li>
                <a href="mailto:Prabhakaran12257@gmail.com">
                <div className='get-touch-icon'>
                  <span><i className="fa fa-envelope-o"></i></span>
                  <h6>Email</h6>
                </div>
                
                <h6 className='get-touch-link'>Prabhakaran12257@gmail.com</h6>
                </a>
              </li>

              <li>
                <div className='get-touch-icon'>
                  <span><i className="fa fa-map-marker"></i></span>
                  <h6>Address</h6>
                </div>
                <h6 className='get-touch-link address'>
                  35, muthu kanan nagar, Thalluka police station back side,
                  Kumbakonam - 612 001.
                </h6>
              </li>

              <div className="bussiness-time">
                <h5>bussiness hours</h5>
                <h6>monday - saturday : 9:00 Am - 7:00 PM</h6>
                <h6>sunday : 10:00 Am - 5:00 PM</h6>
              </div>
            </div>

            <div className="contact-form">
              <form onSubmit={handleWhatsApp}>
                <h6>Name</h6>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <h6>Email</h6>
                <input
                  type="email"
                  placeholder="Your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <h6>Message</h6>
                <textarea
                  placeholder="Tell us about your requirements"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>

                <button type="submit" className="mess-button">
                  <span className="mess-text">send message</span>
                  <span className="mess-icon">
                    <svg viewBox="0 0 512 512" width="20px">
                      <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 
                      2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 
                      13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 
                      28.5 32.9 42.5 15.8L282 426l124.6 
                      52.2c14.2 6 30.4-2.9 33-18.2l72-432
                      C515 7.8 493.3-6.8 476 3.2z"
                        fill="currentColor" />
                    </svg>
                  </span>
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
