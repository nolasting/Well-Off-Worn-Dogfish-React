import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
a.footer-contact-value:hover {
  color: var(--color-primary);
}
@media (prefers-reduced-motion: no-preference) {
html {
  scroll-behavior: smooth;
}
}
@media (prefers-reduced-motion: reduce) {
.footer-logo-icon, .footer-cert-badge, .footer-contact-icon, .footer-social-link, .footer-scroll-top, .footer-link {
  transition: none;
}
.footer-decorative-top {
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <footer id="footer-main" className="footer-container">
        <div className="footer-decorative-top"></div>
        <div className="footer-content-wrapper">
          <div className="footer-grid">
            <div className="footer-brand-column">
              <div className="footer-brand-header">
                <div className="footer-logo-wrapper">
                  <div className="footer-logo-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="16" y="16" rx="1" width="6" height="6"></rect>
                        <rect x="2" y="16" rx="1" width="6" height="6"></rect>
                        <rect x="9" y="2" rx="1" width="6" height="6"></rect>
                        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="footer-logo-text">TechNest Solutions</h3>
                </div>
              </div>
              <p className="footer-brand-description">
                {' '}
                Your trusted partner for comprehensive IT consulting services.
                We deliver enterprise-grade solutions with personalized
                attention.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="footer-certifications">
                <div className="footer-cert-badge">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Certified Secure</span>
                </div>
                <div className="footer-cert-badge">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Cloud Expert</span>
                </div>
              </div>
            </div>
            <div className="footer-links-column">
              <h4 className="footer-column-title">Services</h4>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <a href="#network-setup">
                    <div className="footer-link">
                      <span>
                        {' '}
                        Network Infrastructure
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#vpn-config">
                    <div className="footer-link">
                      <span>VPN Configuration</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#cybersecurity">
                    <div className="footer-link">
                      <span>
                        {' '}
                        Cybersecurity Solutions
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#cloud-services">
                    <div className="footer-link">
                      <span>Cloud Services</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#it-support">
                    <div className="footer-link">
                      <span>
                        {' '}
                        IT Support &amp; Maintenance
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#consulting">
                    <div className="footer-link">
                      <span>
                        {' '}
                        Strategic IT Consulting
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4 className="footer-column-title">Company</h4>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <a href="#about">
                    <div className="footer-link">
                      <span>About Us</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#testimonials">
                    <div className="footer-link">
                      <span>Client Testimonials</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#case-studies">
                    <div className="footer-link">
                      <span>Case Studies</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#careers">
                    <div className="footer-link">
                      <span>Careers</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#blog">
                    <div className="footer-link">
                      <span>Tech Blog</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#privacy">
                    <div className="footer-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-contact-column">
              <h4 className="footer-column-title">Get In Touch</h4>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="footer-contact-text">
                    <span className="footer-contact-label">Phone</span>
                    <a href="tel:+15551234567">
                      <div className="footer-contact-value">
                        <span>
                          {' '}
                          +1 (555) 123-4567
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                  </div>
                  <div className="footer-contact-text">
                    <span className="footer-contact-label">Email</span>
                    <a href="mailto:contact@technestsolutions.com?subject=">
                      <div className="footer-contact-value">
                        <span>
                          {' '}
                          contact@technestsolutions.com
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                        <circle r="3" cx="10" cy="10"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="footer-contact-text">
                    <span className="footer-contact-label">Location</span>
                    <span className="footer-contact-value">
                      San Francisco, CA
                    </span>
                  </div>
                </li>
              </ul>
              <div className="footer-social-section">
                <p className="footer-social-label">Follow Us</p>
                <div className="footer-social-links">
                  <a href="https://linkedin.com">
                    <div aria-label="LinkedIn" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                          <circle r="2" cx="4" cy="4"></circle>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="https://twitter.com">
                    <div aria-label="Twitter" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="https://facebook.com">
                    <div aria-label="Facebook" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-newsletter-section">
            <div className="footer-newsletter-content">
              <div className="footer-newsletter-text">
                <h4 className="footer-newsletter-title">Stay Updated</h4>
                <p className="footer-newsletter-description">
                  {' '}
                  Subscribe to our newsletter for IT insights, security tips,
                  and technology trends.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <form
                aria-label="Newsletter signup"
                data-form-id="2dad1b73-79ae-4f27-ab6c-634f9b11578c"
                className="footer-newsletter-form"
              >
                <div className="footer-newsletter-input-wrapper">
                  <input
                    type="email"
                    id="newsletter-email"
                    name="newsletter-email"
                    required="true"
                    placeholder="Enter your email address"
                    data-form-field-id="newsletter-email"
                    className="footer-newsletter-input"
                  />
                  <button
                    name="button 90c1i79v77"
                    type="submit"
                    data-form-field-id="button 90c1i79v77"
                    className="btn-primary footer-newsletter-btn btn"
                  >
                    {' '}
                    Subscribe
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="footer-bottom-bar">
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                &amp;copy; 2025 TechNest Solutions. All rights reserved.
              </p>
              <div className="footer-bottom-links">
                <a href="#terms">
                  <div className="footer-bottom-link">
                    <span>Terms of Service</span>
                  </div>
                </a>
                <span aria-hidden="true" className="footer-divider"></span>
                <a href="#privacy">
                  <div className="footer-bottom-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <span aria-hidden="true" className="footer-divider"></span>
                <a href="#cookies">
                  <div className="footer-bottom-link">
                    <span>Cookie Policy</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          id="scroll-to-top"
          aria-label="Scroll to top"
          className="footer-scroll-top"
        >
          <svg
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="m5 12l7-7l7 7m-7 7V5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </footer>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<style>
        @keyframes footer-shimmer {0%,100% {opacity: 1;}
50% {opacity: 0.6;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container6">
        <div className="footer-container7">
          <Script
            html={`<script defer data-name="footer">
(function(){
  const scrollTopBtn = document.getElementById("scroll-to-top")

  function handleScroll() {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add("visible")
    } else {
      scrollTopBtn.classList.remove("visible")
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  window.addEventListener("scroll", handleScroll)
  scrollTopBtn.addEventListener("click", scrollToTop)

  const newsletterForm = document.querySelector(".footer-newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const emailInput = document.getElementById("newsletter-email")
      if (emailInput && emailInput.value) {
        alert(
          "Thank you for subscribing! We will keep you updated with the latest IT insights."
        )
        emailInput.value = ""
      }
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
