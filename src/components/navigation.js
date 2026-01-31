import React from 'react'

import Script from 'dangerous-html/react'

import AppComponent from './component'
import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav
        id="main-navigation"
        role="navigation"
        aria-label="Main Navigation"
        className="navigation-wrapper"
      >
        <div className="navigation-container">
          <div className="navigation-inner">
            <a href="index.html">
              <div
                aria-label="TechNest Solutions Home"
                className="navigation-logo"
              >
                <div className="navigation-thq-navigation-logo-icon-elm navigation-logo-icon">
                  <AppComponent></AppComponent>
                </div>
                <span className="navigation-logo-text">
                  <span className="navigation-text1">TechNest</span>
                  <span className="navigation-text2">Solutions</span>
                </span>
              </div>
            </a>
            <div id="navigation-links" className="navigation-links">
              <ul role="menubar" className="navigation-menu">
                <li role="none" className="navigation-menu-item">
                  <a href="#about">
                    <div role="menuitem" className="navigation-link">
                      <span className="navigation-link-text">About</span>
                      <span className="navigation-link-indicator"></span>
                    </div>
                  </a>
                </li>
                <li role="none" className="navigation-menu-item">
                  <a href="#services">
                    <div role="menuitem" className="navigation-link">
                      <span className="navigation-link-text">Services</span>
                      <span className="navigation-link-indicator"></span>
                    </div>
                  </a>
                </li>
                <li role="none" className="navigation-menu-item">
                  <a href="#expertise">
                    <div role="menuitem" className="navigation-link">
                      <span className="navigation-link-text">Expertise</span>
                      <span className="navigation-link-indicator"></span>
                    </div>
                  </a>
                </li>
                <li role="none" className="navigation-menu-item">
                  <a href="#testimonials">
                    <div role="menuitem" className="navigation-link">
                      <span className="navigation-link-text">Testimonials</span>
                      <span className="navigation-link-indicator"></span>
                    </div>
                  </a>
                </li>
                <li role="none" className="navigation-menu-item">
                  <a href="#contact">
                    <div role="menuitem" className="navigation-link">
                      <span className="navigation-link-text">Contact</span>
                      <span className="navigation-link-indicator"></span>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="navigation-cta">
                <a href="#contact">
                  <div className="btn-primary btn">
                    <span>Get Started</span>
                  </div>
                </a>
              </div>
            </div>
            <button
              id="navigation-toggle"
              aria-label="Toggle Navigation Menu"
              aria-controls="navigation-links"
              aria-expanded="false"
              className="navigation-toggle"
            >
              <span className="navigation-thq-navigation-toggle-icon-elm1">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 5h16M4 12h16M4 19h16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <span className="navigation-thq-navigation-toggle-icon-elm2">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div id="navigation-overlay" className="navigation-overlay"></div>
      </nav>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-wrapper, .navigation-logo, .navigation-logo-icon, .navigation-link, .navigation-link-indicator, .navigation-toggle, .navigation-toggle-icon, .navigation-links, .navigation-overlay {
  transition: none;
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  // Navigation functionality
  const navigationToggle = document.getElementById("navigation-toggle")
  const navigationLinks = document.getElementById("navigation-links")
  const navigationOverlay = document.getElementById("navigation-overlay")
  const navigationWrapper = document.querySelector(".navigation-wrapper")
  const navigationMenuLinks = document.querySelectorAll(".navigation-link")

  // Toggle mobile menu
  if (navigationToggle) {
    navigationToggle.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true"
      this.setAttribute("aria-expanded", !isExpanded)

      if (navigationLinks) {
        navigationLinks.classList.toggle("navigation-links-active")
      }

      if (navigationOverlay) {
        navigationOverlay.classList.toggle("navigation-overlay-active")
      }

      // Prevent body scroll when menu is open
      document.body.style.overflow = isExpanded ? "" : "hidden"
    })
  }

  // Close mobile menu when overlay is clicked
  if (navigationOverlay) {
    navigationOverlay.addEventListener("click", function () {
      if (navigationToggle) {
        navigationToggle.setAttribute("aria-expanded", "false")
      }
      if (navigationLinks) {
        navigationLinks.classList.remove("navigation-links-active")
      }
      this.classList.remove("navigation-overlay-active")
      document.body.style.overflow = ""
    })
  }

  // Close mobile menu when a link is clicked
  navigationMenuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 991) {
        if (navigationToggle) {
          navigationToggle.setAttribute("aria-expanded", "false")
        }
        if (navigationLinks) {
          navigationLinks.classList.remove("navigation-links-active")
        }
        if (navigationOverlay) {
          navigationOverlay.classList.remove("navigation-overlay-active")
        }
        document.body.style.overflow = ""
      }
    })
  })

  // Handle window resize - close mobile menu if resized to desktop
  let resizeTimer
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(function () {
      if (window.innerWidth > 991) {
        if (navigationToggle) {
          navigationToggle.setAttribute("aria-expanded", "false")
        }
        if (navigationLinks) {
          navigationLinks.classList.remove("navigation-links-active")
        }
        if (navigationOverlay) {
          navigationOverlay.classList.remove("navigation-overlay-active")
        }
        document.body.style.overflow = ""
      }
    }, 250)
  })

  // Scroll behavior - add shadow on scroll
  let lastScrollTop = 0
  let scrollTimeout

  window.addEventListener("scroll", function () {
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(function () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      // Add scrolled class for shadow effect
      if (scrollTop > 20) {
        navigationWrapper.classList.add("navigation-scrolled")
      } else {
        navigationWrapper.classList.remove("navigation-scrolled")
      }

      lastScrollTop = scrollTop
    }, 10)
  })

  // Active link tracking based on scroll position
  const sections = document.querySelectorAll("section[id], div[id]")
  const navLinks = document.querySelectorAll(".navigation-link")

  function setActiveLink() {
    let currentSection = ""
    const scrollPosition = window.pageYOffset + 100

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = sectionId
      }
    })

    navLinks.forEach(function (link) {
      link.classList.remove("navigation-link-active")
      const href = link.getAttribute("href")
      if (href === "#" + currentSection) {
        link.classList.add("navigation-link-active")
      }
    })
  }

  window.addEventListener("scroll", setActiveLink)
  window.addEventListener("load", setActiveLink)
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
