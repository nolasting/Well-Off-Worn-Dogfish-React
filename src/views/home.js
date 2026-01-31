import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Well Off Worn Dogfish</title>
        <meta property="og:title" content="Well Off Worn Dogfish" />
        <link
          rel="canonical"
          href="https://well-off-worn-dogfish-6fj5il.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation: none !important;
  transition: none !important;
  transform: none !important;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <section
        id="hero-section"
        role="region"
        aria-label="Hero — core value proposition"
        className="hero-section"
      >
        <div className="hero-container">
          <div className="hero__copy">
            <h1 className="home-hero-title">
              {' '}
              TechNest Solutions — Trusted IT consulting for modern offices
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <p className="home-hero-subtitle">
              {' '}
              Secure, scalable IT infrastructure tailored for your business.
              From network design and VPNs to cybersecurity and cloud migration,
              we deliver reliable solutions that keep your operations running
              and your data protected.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="hero-services">
              <span className="service-label">Key services:</span>
              <a href="#services-section">
                <div className="service-link">
                  <span>Network Setup</span>
                </div>
              </a>
              <a href="#services-section">
                <div className="service-link">
                  <span>
                    {' '}
                    VPN &amp; Remote Access
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
              <a href="#services-section">
                <div className="service-link">
                  <span>Cybersecurity</span>
                </div>
              </a>
              <a href="#services-section">
                <div className="service-link">
                  <span>Cloud Services</span>
                </div>
              </a>
              <a href="#services-section">
                <div className="service-link">
                  <span>IT Support</span>
                </div>
              </a>
            </div>
            <a href="#contact-section">
              <div
                role="button"
                aria-label="Get started with TechNest Solutions"
                className="hero-cta btn-primary btn"
              >
                <span>
                  {' '}
                  Schedule a consultation
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </a>
          </div>
          <div
            role="img"
            aria-label="Professional IT consulting environment"
            className="hero__media"
          >
            <div className="hero-media-overlay"></div>
            <img
              alt="Network infrastructure and technology"
              src="https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="hero-media-image"
            />
            <div aria-labelledby="trust-card-heading" className="trust-card">
              <h3 id="trust-card-heading" className="trust-card-title">
                {' '}
                Trusted by businesses nationwide
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h3>
              <div className="trust-badges">
                <div className="trust-badge">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
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
                  <span>ISO 27001</span>
                </div>
                <div className="trust-badge">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle r="6" cx="12" cy="8"></circle>
                    </g>
                  </svg>
                  <span>CompTIA Certified</span>
                </div>
                <div className="trust-badge">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle r="4" cx="9" cy="7"></circle>
                    </g>
                  </svg>
                  <span>50+ Clients</span>
                </div>
              </div>
              <p className="trust-note">
                {' '}
                15+ years delivering enterprise-grade solutions
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about-section"
        aria-labelledby="about-heading"
        className="about-section"
      >
        <div className="about-container">
          <div className="about-content">
            <div className="about-header">
              <h1 id="about-heading" className="about-name">
                Alex Mercer
              </h1>
              <p className="about-role">
                Founder &amp; Principal IT Consultant
              </p>
            </div>
            <div className="about-intro">
              <p>
                {' '}
                I&apos;m the founder of TechNest Solutions — a dedicated IT
                consultant with 15+ years delivering secure, scalable technology
                for small to mid-size enterprises. My background blends
                enterprise network engineering, cybersecurity operations, and
                cloud architecture, gained working with professional services
                firms, distributed offices, and regulated organizations.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="about-approach">
              <h2 className="about-section-title">Approach</h2>
              <p>
                {' '}
                I take a pragmatic, risk-focused approach: assess current
                systems, identify gaps in security and reliability, then design
                clear, prioritized plans that minimize disruption and maximize
                ROI. Communication is central — I translate technical trade-offs
                into business decisions and provide executive-ready reports,
                implementation roadmaps, and transparent project governance.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="about-capabilities">
              <h2 className="about-section-title">Capabilities Snapshot</h2>
              <ul role="list" className="capabilities-list">
                <li role="listitem">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Network design and management</span>
                </li>
                <li role="listitem">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>VPN &amp; secure remote access</span>
                </li>
                <li role="listitem">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Endpoint security &amp; threat prevention</span>
                </li>
                <li role="listitem">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Cloud migration (AWS/Azure)</span>
                </li>
                <li role="listitem">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Backup &amp; disaster recovery</span>
                </li>
                <li role="listitem">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Compliance readiness &amp; audits</span>
                </li>
              </ul>
            </div>
            <div className="about-why">
              <h2 className="about-section-title">Why Work With Me</h2>
              <p>
                {' '}
                Single-point accountability, enterprise-caliber practices
                tailored for growing businesses, and a commitment to long-term
                partnerships. Whether you need a one-time audit, a migration
                plan, or ongoing managed support, I aim to deliver dependable,
                professional results that build trust and reduce operational
                risk.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="about-credentials">
            <h3 className="credentials-title">
              Certifications &amp; Recognition
            </h3>
            <div className="credentials-grid">
              <div aria-hidden="true" className="credential-badge">
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
                <span>CISSP</span>
              </div>
              <div aria-hidden="true" className="credential-badge">
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
                <span>AWS Certified</span>
              </div>
              <div aria-hidden="true" className="credential-badge">
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
                <span>CCNP</span>
              </div>
              <div aria-hidden="true" className="credential-badge">
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
                    <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                    <circle r="6" cx="12" cy="8"></circle>
                  </g>
                </svg>
                <span>CompTIA Security+</span>
              </div>
            </div>
            <div
              role="list"
              aria-label="Professional timeline"
              className="credentials-timeline"
            >
              <div role="listitem" className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">2008</span>
                  <span className="timeline-event">Started IT consulting</span>
                </div>
              </div>
              <div role="listitem" className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">2015</span>
                  <span className="timeline-event">
                    Founded TechNest Solutions
                  </span>
                </div>
              </div>
              <div role="listitem" className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">2020</span>
                  <span className="timeline-event">50+ enterprise clients</span>
                </div>
              </div>
            </div>
            <div className="credentials-clients">
              <p className="clients-label">Trusted by organizations across:</p>
              <div className="clients-industries">
                <span className="industry-tag">Finance</span>
                <span className="industry-tag">Healthcare</span>
                <span className="industry-tag">Legal</span>
                <span className="industry-tag">Manufacturing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="services-section"
        role="region"
        aria-labelledby="services-heading"
        className="services-section"
      >
        <div className="services-container">
          <div className="services-featured">
            <div className="featured-content">
              <h1 id="services-heading" className="section-title">
                {' '}
                Services Overview — Strategic IT that keeps your business moving
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <p className="section-subtitle">
                {' '}
                Enterprise-grade solutions tailored for growing businesses
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <a href="#contact-section">
              <div
                role="button"
                aria-label="Explore our IT consulting services"
                className="btn-primary btn"
              >
                <span>
                  {' '}
                  Get started
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </a>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
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
              <h3 className="service-title">
                Network Architecture &amp; Management
              </h3>
              <p className="service-description">
                {' '}
                Design, deployment, and ongoing optimization of resilient
                LAN/WAN infrastructures. We ensure scalable performance,
                minimize downtime, and deliver clear documentation for IT
                governance and audits.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="11"
                      rx="2"
                      ry="2"
                      width="18"
                      height="11"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </g>
                </svg>
              </div>
              <h3 className="service-title">Secure Remote Access &amp; VPNs</h3>
              <p className="service-description">
                {' '}
                Enterprise-grade VPN design and implementation for secure,
                reliable remote connectivity. Includes multi-factor
                authentication, policy-driven access controls, and performance
                tuning to support distributed teams.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
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
              </div>
              <h3 className="service-title">Cybersecurity &amp; Compliance</h3>
              <p className="service-description">
                {' '}
                Proactive threat assessment, intrusion prevention, endpoint
                protection, and incident response planning. We align security
                controls with industry standards and regulatory requirements to
                protect data and reputations.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
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
              </div>
              <h3 className="service-title">Cloud Strategy &amp; Migration</h3>
              <p className="service-description">
                {' '}
                Cloud readiness assessments, cost-optimized migration plans, and
                hybrid cloud deployments across leading platforms. We focus on
                availability, backup and recovery, and operational efficiency to
                accelerate business outcomes.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                    <circle r="3" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="service-title">
                Managed IT Support &amp; SLA Services
              </h3>
              <p className="service-description">
                {' '}
                Priority helpdesk, proactive monitoring, patch management, and
                monthly reporting. Custom service-level agreements ensure
                predictable support, fast resolution times, and measurable
                improvement in uptime.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      rx="2"
                      ry="2"
                      width="20"
                      height="8"
                    ></rect>
                    <rect
                      x="2"
                      y="14"
                      rx="2"
                      ry="2"
                      width="20"
                      height="8"
                    ></rect>
                    <path d="M6 6h.01M6 18h.01"></path>
                  </g>
                </svg>
              </div>
              <h3 className="service-title">IT Infrastructure Modernization</h3>
              <p className="service-description">
                {' '}
                Server consolidation, virtualization, storage optimization, and
                lifecycle planning to reduce complexity and total cost of
                ownership while improving agility.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="services-trust">
              <h3 className="trust-heading">Why choose TechNest Solutions</h3>
              <ul role="list" className="trust-points">
                <li role="listitem">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Single-source accountability</span>
                </li>
                <li role="listitem">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Senior-level expertise</span>
                </li>
                <li role="listitem">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Business-focused outcomes</span>
                </li>
                <li role="listitem">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Protect assets, reduce risk</span>
                </li>
              </ul>
              <div className="trust-cta">
                <p className="trust-cta-text">
                  {' '}
                  Prefer a technical review or a tailored proposal?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#contact-section">
                  <div className="btn btn-secondary">
                    <span>
                      {' '}
                      Request assessment
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="testimonials-section"
        role="region"
        aria-labelledby="testimonials-heading"
        className="testimonials-section"
      >
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 id="testimonials-heading" className="section-title">
              {' '}
              What our clients say
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="section-subtitle">Real results, real partnerships</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div aria-label="5 star rating" className="testimonial-stars">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <p className="testimonial-quote">
                {' '}
                &quot;Alex transformed our network infrastructure and security
                posture. The migration was seamless, and our team now works more
                efficiently than ever. His professionalism and expertise are
                unmatched.&quot;
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonial-author">
                <img
                  alt="Sarah Mitchell"
                  src="https://images.pexels.com/photos/8124393/pexels-photo-8124393.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="author-image"
                />
                <div className="author-info">
                  <p className="author-name">Sarah Mitchell</p>
                  <p className="author-title">COO, Westfield Legal Partners</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div aria-label="5 star rating" className="testimonial-stars">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <p className="testimonial-quote">
                {' '}
                &quot;We needed a comprehensive security audit and compliance
                framework. Alex delivered a clear roadmap that met all
                regulatory requirements and significantly improved our security
                posture. Highly recommend!&quot;
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonial-author">
                <img
                  alt="Michael Chen"
                  src="https://images.pexels.com/photos/6931384/pexels-photo-6931384.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="author-image"
                />
                <div className="author-info">
                  <p className="author-name">Michael Chen</p>
                  <p className="author-title">CTO, FinServe Capital</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div aria-label="5 star rating" className="testimonial-stars">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <p className="testimonial-quote">
                {' '}
                &quot;Outstanding cloud migration service. Alex helped us move
                to AWS with zero downtime and provided training for our team.
                The ongoing support has been invaluable for our growth.&quot;
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonial-author">
                <img
                  alt="Jennifer Rodriguez"
                  src="https://images.pexels.com/photos/5971287/pexels-photo-5971287.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="author-image"
                />
                <div className="author-info">
                  <p className="author-name">Jennifer Rodriguez</p>
                  <p className="author-title">
                    Operations Director, Apex Manufacturing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact-section"
        role="region"
        aria-labelledby="contact-heading"
        className="contact-section"
      >
        <div className="contact-container">
          <div className="contact-intro">
            <h2 id="contact-heading" className="contact-heading">
              Need a hand with your tech? I’ve got you.
            </h2>
            <p className="contact-subheading">
              Easy ways to get in touch—email, voicemail, or a quick form.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
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
                <div className="contact-details">
                  <p className="contact-label">Voicemail</p>
                  <a href="tel:+15550123456">
                    <div className="contact-link">
                      <span> +1 (425) 552-2390</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
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
                <div className="contact-details">
                  <p className="contact-label">Email</p>
                  <a href="mailto:hello@technestsolutions.com?subject=">
                    <div className="contact-link">
                      <span> contact@adflictus.com</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
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
                      <path d="M12 6v6l4 2"></path>
                      <circle r="10" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                </div>
                <div className="contact-details">
                  <p className="contact-label">Office hours</p>
                  <p className="contact-text">
                    <span>Mon–Fri, 6:00 PM–8:00 PM (PST)</span>
                    <br></br>
                    <span>Sat–Sun, 8:00 AM–8:00 PM (PST)</span>
                    <br></br>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
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
                      <path d="M8 2v4m8-4v4"></path>
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                </div>
                <div className="contact-details">
                  <p className="contact-label">Schedule a meeting</p>
                  <a href="#">
                    <div className="contact-link">
                      <span>Book a quick 30-minute consult.</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-promise">
              <p className="promise-text">
                {' '}
                We reply to all inquiries within one business day.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="contact-card">
            <h3 className="form-title">Request Consultation</h3>
            <form
              id="contact-form"
              role="form"
              aria-describedby="privacy-note"
              data-form-id="2522ba77-df51-489b-98f9-0ebd7922c45f"
              className="contact-form"
            >
              <div className="form-group">
                <label htmlFor="full-name" className="form-label">
                  Full name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  required="true"
                  aria-required="true"
                  data-form-field-id="full-name"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="company" className="form-label">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required="true"
                  aria-required="true"
                  data-form-field-id="company"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required="true"
                  aria-required="true"
                  data-form-field-id="email"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  data-form-field-id="phone"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="needs" className="form-label">
                  {' '}
                  Brief description of needs
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </label>
                <textarea
                  id="needs"
                  name="needs"
                  rows="4"
                  required="true"
                  aria-required="true"
                  data-form-field-id="needs"
                  className="form-textarea"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="contact-time" className="form-label">
                  {' '}
                  Preferred contact time
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </label>
                <input
                  type="text"
                  id="contact-time"
                  name="contact-time"
                  placeholder="e.g., Weekdays 2-4 PM"
                  data-form-field-id="contact-time"
                  className="form-input"
                />
              </div>
              <button
                name="button xidr356l7n"
                type="submit"
                className="btn-primary btn form-submit"
              >
                {' '}
                Request Consultation
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <p id="privacy-note" className="privacy-note">
                <span>
                  {' '}
                  Your information is confidential and used only to evaluate
                  your re
                </span>
                <span>
                  quirements.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                Your information is confidential and used only to evaluate your
                IT requirements.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </form>
          </div>
        </div>
      </section>
      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<style>
        @keyframes fadeInUp {from {opacity: 0;
transform: translateY(12px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container6">
        <div className="home-container7">
          <Script
            html={`<script defer data-name="homepage-interactions">
(function(){
  // Form submission handler
  const contactForm = document.getElementById("contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData.entries())

      console.log("Form submitted with data:", data)

      // Show success message
      alert(
        "Thank you for your inquiry! We will respond within one business day."
      )

      // Reset form
      contactForm.reset()
    })
  }

  // Smooth reveal animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe sections
  const sections = document.querySelectorAll(
    ".about-section, .services-section, .testimonials-section, .contact-section"
  )
  sections.forEach(function (section) {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    observer.observe(section)
  })

  // Animate service cards on scroll
  const serviceCards = document.querySelectorAll(".service-card")
  serviceCards.forEach(function (card, index) {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition =
      "opacity 0.5s ease-out " +
      index * 0.1 +
      "s, transform 0.5s ease-out " +
      index * 0.1 +
      "s"

    observer.observe(card)
  })

  // Animate testimonial cards
  const testimonialCards = document.querySelectorAll(".testimonial-card")
  testimonialCards.forEach(function (card, index) {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition =
      "opacity 0.5s ease-out " +
      index * 0.15 +
      "s, transform 0.5s ease-out " +
      index * 0.15 +
      "s"

    observer.observe(card)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
