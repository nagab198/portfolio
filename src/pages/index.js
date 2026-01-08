import * as React from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaAws, FaReact, FaDatabase, FaCode, FaMobile, FaCloud, FaServer, FaDownload, FaBrain, FaHospital, FaCubes, FaShoppingCart, FaSun, FaMoon } from "react-icons/fa"
import { SiLaravel, SiTypescript, SiNestjs } from "react-icons/si"

const IndexPage = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isDarkMode, setIsDarkMode] = React.useState(true)

    // Theme toggle effect
    React.useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'light') {
            setIsDarkMode(false)
            document.documentElement.setAttribute('data-theme', 'light')
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = !isDarkMode
        setIsDarkMode(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light')
        localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    }

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible")
                    }
                })
            },
            { threshold: 0.1 }
        )
        document.querySelectorAll(".animate-fade-up").forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
    }

    return (
        <>
            {/* Navigation */}
            <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
                <div className="container">
                    <a href="#" className="logo">Nagababu Medisetti</a>
                    <div className="nav-links">
                        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about") }}>About</a>
                        <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection("skills") }}>Skills</a>
                        <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection("experience") }}>Experience</a>
                        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects") }}>Projects</a>
                        <a href="#certifications" onClick={(e) => { e.preventDefault(); scrollToSection("certifications") }}>Certifications</a>
                        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact") }}>Contact</a>
                    </div>
                    <div className="nav-actions">
                        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                            {isDarkMode ? <FaSun /> : <FaMoon />}
                        </button>
                        <button className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            <span></span><span></span><span></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about") }}>About</a>
                <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection("skills") }}>Skills</a>
                <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection("experience") }}>Experience</a>
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects") }}>Projects</a>
                <a href="#certifications" onClick={(e) => { e.preventDefault(); scrollToSection("certifications") }}>Certifications</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact") }}>Contact</a>
            </div>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="orb orb-1"></div>
                    <div className="orb orb-2"></div>
                    <div className="orb orb-3"></div>
                    {/* Floating Particles */}
                    <div className="particle" style={{ top: '15%', left: '5%', animationDelay: '0s' }}></div>
                    <div className="particle" style={{ top: '25%', left: '15%', animationDelay: '1s' }}></div>
                    <div className="particle" style={{ top: '45%', left: '85%', animationDelay: '2s' }}></div>
                    <div className="particle" style={{ top: '65%', left: '75%', animationDelay: '3s' }}></div>
                    <div className="particle" style={{ top: '35%', left: '92%', animationDelay: '4s' }}></div>
                    <div className="particle" style={{ top: '75%', left: '25%', animationDelay: '5s' }}></div>
                    <div className="particle" style={{ top: '85%', left: '45%', animationDelay: '6s' }}></div>
                    <div className="particle" style={{ top: '10%', left: '70%', animationDelay: '7s' }}></div>
                </div>
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="dot"></span>
                        Available for opportunities
                    </div>
                    <h1 className="hero-title">
                        <span>Hi, I'm </span>
                        <span className="gradient-text">Nagababu Medisetti</span>
                    </h1>
                    <p className="hero-subtitle">
                        AWS Certified Developer Associate & ML Engineer with 5 years in frontend-driven Full Stack development on cloud-native/serverless architectures. Building scalable web apps with 99.9% uptime.
                    </p>
                    <div className="hero-cta">
                        <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection("contact") }}>Get In Touch</a>
                        <a href="#projects" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection("projects") }}>View Projects</a>
                        <a href="/~partytown/Nagababu_Senior_Software_Developer_Resume_5years.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary"><FaDownload /> Resume</a>
                    </div>
                    <div className="hero-social">
                        <a href="https://github.com/nagababu-medisetti" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/nagababu-medisetti/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><FaLinkedin /></a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <div className="container">
                    <div className="section-header animate-fade-up">
                        <span className="section-tag">About Me</span>
                        <h2 className="section-title">Passionate Developer & Cloud Enthusiast</h2>
                    </div>
                    <div className="about-content">
                        <div className="about-image animate-fade-up">
                            <div className="about-image-wrapper">
                                <img src="/~partytown/image.png" alt="Nagababu Medisetti" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", objectPosition: "center top" }} />
                            </div>
                        </div>
                        <div className="about-text animate-fade-up">
                            <h3>Building Digital Excellence</h3>
                            <p>I'm a passionate Software Developer based in Hyderabad, Telangana, with 5 years of experience creating robust, scalable, and user-friendly web applications with 99.9% uptime.</p>
                            <p>As a <strong>Senior Software Developer</strong>, I specialize in full-stack development using TypeScript, React.js, Next.js, Vue.js, NestJS, and AWS serverless architecture. I'm passionate about integrating <strong>AI/ML capabilities</strong> using AWS Bedrock, SageMaker, and Generative AI to build intelligent, scalable applications.</p>
                            <p>I'm an AWS Certified Developer Associate & Machine Learning Engineer Associate, passionate about building AI-integrated cloud-native solutions using AWS Bedrock, SageMaker, and serverless architectures.</p>
                            <div className="about-info">
                                <div className="info-card">
                                    <div className="number">5</div>
                                    <div className="label">Years Experience</div>
                                </div>
                                <div className="info-card">
                                    <div className="number">1M+</div>
                                    <div className="label">Users Supported</div>
                                </div>
                                <div className="info-card">
                                    <div className="number">2x</div>
                                    <div className="label">AWS Certified</div>
                                </div>
                                <div className="info-card">
                                    <div className="number">B.Tech</div>
                                    <div className="label">KIET Graduate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills">
                <div className="container">
                    <div className="section-header animate-fade-up">
                        <span className="section-tag">Skills</span>
                        <h2 className="section-title">Technologies I Work With</h2>
                        <p className="section-description">Expertise across the full stack with a focus on modern web technologies, cloud solutions, and AI integration.</p>
                    </div>
                    <div className="skills-grid">
                        <div className="skill-category animate-fade-up">
                            <div className="skill-category-icon"><FaReact /></div>
                            <h4>Frontend Development</h4>
                            <div className="skill-tags">
                                <span className="skill-tag">React.js</span>
                                <span className="skill-tag">Next.js</span>
                                <span className="skill-tag">Vue.js</span>
                                <span className="skill-tag">TypeScript</span>
                                <span className="skill-tag">Tailwind CSS</span>
                                <span className="skill-tag">Shadcn/UI</span>
                                <span className="skill-tag">React Native</span>
                            </div>
                        </div>
                        <div className="skill-category animate-fade-up">
                            <div className="skill-category-icon"><FaServer /></div>
                            <h4>Backend Development</h4>
                            <div className="skill-tags">
                                <span className="skill-tag">Node.js</span>
                                <span className="skill-tag">NestJS</span>
                                <span className="skill-tag">Laravel</span>
                                <span className="skill-tag">PHP</span>
                                <span className="skill-tag">REST APIs</span>
                                <span className="skill-tag">GraphQL</span>
                                <span className="skill-tag">Microservices</span>
                            </div>
                        </div>
                        <div className="skill-category animate-fade-up">
                            <div className="skill-category-icon"><FaAws /></div>
                            <h4>AWS Cloud & AI Services</h4>
                            <div className="skill-tags">
                                <span className="skill-tag">AWS Amplify</span>
                                <span className="skill-tag">Lambda</span>
                                <span className="skill-tag">AppSync</span>
                                <span className="skill-tag">Cognito</span>
                                <span className="skill-tag">Bedrock</span>
                                <span className="skill-tag">SageMaker</span>
                                <span className="skill-tag">S3</span>
                            </div>
                        </div>
                        <div className="skill-category animate-fade-up">
                            <div className="skill-category-icon"><FaDatabase /></div>
                            <h4>Database & Storage</h4>
                            <div className="skill-tags">
                                <span className="skill-tag">DynamoDB</span>
                                <span className="skill-tag">PostgreSQL</span>
                                <span className="skill-tag">MySQL</span>
                                <span className="skill-tag">MongoDB</span>
                                <span className="skill-tag">Redis</span>
                            </div>
                        </div>
                        <div className="skill-category animate-fade-up">
                            <div className="skill-category-icon"><FaCode /></div>
                            <h4>DevOps & Tools</h4>
                            <div className="skill-tags">
                                <span className="skill-tag">Git</span>
                                <span className="skill-tag">Docker</span>
                                <span className="skill-tag">CI/CD</span>
                                <span className="skill-tag">Monorepo (Nx)</span>
                                <span className="skill-tag">AWS CLI</span>
                                <span className="skill-tag">Postman</span>
                            </div>
                        </div>
                        <div className="skill-category animate-fade-up">
                            <div className="skill-category-icon"><FaCubes /></div>
                            <h4>Architecture & Patterns</h4>
                            <div className="skill-tags">
                                <span className="skill-tag">Serverless</span>
                                <span className="skill-tag">Microservices</span>
                                <span className="skill-tag">OAuth 2.0</span>
                                <span className="skill-tag">JWT</span>
                                <span className="skill-tag">Keycloak</span>
                                <span className="skill-tag">Multi-tenancy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="experience">
                <div className="container">
                    <div className="section-header animate-fade-up">
                        <span className="section-tag">Experience</span>
                        <h2 className="section-title">My Professional Journey</h2>
                    </div>
                    <div className="timeline">
                        <div className="timeline-item animate-fade-up">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">Feb 2022 - Present</span>
                                <h4 className="timeline-title">Senior Software Developer</h4>
                                <div className="timeline-description">
                                    <ul>
                                        <li>Architected Multi-Tenancy CRM using NestJS microservices and React.js with Keycloak, Okta, and Casbin for secure access control</li>
                                        <li>Built and deployed scalable microservices, RESTful and GraphQL APIs using Node.js, TypeScript, and AWS Amplify</li>
                                        <li>Optimized user experience with Next.js, increasing page load speed by 30%, supporting 1M+ users</li>
                                        <li>Reduced deployment time by 40% through custom AWS CLI migration tools and CI/CD pipelines</li>
                                        <li>Mentored 10+ developers on frontend architecture, AWS, and clean coding best practices</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item animate-fade-up">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">Jun 2021 - Jan 2022</span>
                                <h4 className="timeline-title">PHP Web Developer</h4>
                                <div className="timeline-description">
                                    <ul>
                                        <li>Developed responsive web applications using Core PHP, MySQL, HTML, CSS, and JavaScript</li>
                                        <li>Implemented object-oriented design (OOP) and optimized database queries for scalability</li>
                                        <li>Supported back-end improvements and front-end integrations to enhance user experience</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item animate-fade-up">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">2017 - 2021</span>
                                <h4 className="timeline-title">B.Tech in Electrical Engineering</h4>
                                <p className="timeline-company">Kakinada Institute of Engineering & Technology, Andhra Pradesh</p>
                                <div className="timeline-description">
                                    <ul>
                                        <li>Graduated with strong foundation in engineering and programming fundamentals</li>
                                        <li>Developed multiple academic projects showcasing problem-solving skills</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects">
                <div className="container">
                    <div className="section-header animate-fade-up">
                        <span className="section-tag">Projects</span>
                        <h2 className="section-title">Featured Work</h2>
                        <p className="section-description">A selection of projects showcasing my expertise in full-stack development, cloud architecture, and AI integration.</p>
                    </div>
                    <div className="projects-grid">
                        <div className="project-card animate-fade-up">
                            <div className="project-icon"><FaCubes /></div>
                            <h4 className="project-title">Multi-Tenancy CRM Application</h4>
                            <p className="project-description">Enterprise CRM with NestJS microservices, Next.js (Refine), AWS, GCP, Keycloak, Casbin, and Monorepo enterprise architecture for multi-tenant access control.</p>
                            <div className="project-tech">
                                <span>NestJS</span> • <span>Next.js</span> • <span>AWS</span> • <span>Keycloak</span>
                            </div>
                        </div>
                        <div className="project-card animate-fade-up">
                            <div className="project-icon"><FaHospital /></div>
                            <h4 className="project-title">Healthcare Data Driven AWS App</h4>
                            <p className="project-description">Internal healthcare application using Node.js, React.js, Next.js, AWS CLI, DynamoDB, Cognito, TypeScript, Amplify stack with Lambda, Step Functions, S3, AppSync, and OpenSearch.</p>
                            <div className="project-tech">
                                <span>React.js</span> • <span>AWS Amplify</span> • <span>DynamoDB</span> • <span>Lambda</span>
                            </div>
                        </div>
                        <div className="project-card animate-fade-up">
                            <div className="project-icon"><FaCloud /></div>
                            <h4 className="project-title">AWS Migration Automation Tool</h4>
                            <p className="project-description">Custom migration tool built with Node.js, AWS CLI, DynamoDB, Cognito, and TypeScript to automate cloud migrations, reducing deployment time by 40%.</p>
                            <div className="project-tech">
                                <span>Node.js</span> • <span>AWS CLI</span> • <span>DynamoDB</span> • <span>TypeScript</span>
                            </div>
                        </div>
                        <div className="project-card animate-fade-up">
                            <div className="project-icon"><FaShoppingCart /></div>
                            <h4 className="project-title">E-commerce Enhancement</h4>
                            <p className="project-description">Shopify e-commerce platform enhancement with JavaScript, Payment Gateway APIs integration, and performance optimization for better conversions.</p>
                            <div className="project-tech">
                                <span>Shopify</span> • <span>JavaScript</span> • <span>Payment APIs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="certifications">
                <div className="container">
                    <div className="section-header animate-fade-up">
                        <span className="section-tag">Certifications & Activities</span>
                        <h2 className="section-title">Professional Credentials</h2>
                    </div>
                    <div className="cert-grid">
                        <a href="https://www.credly.com/earner/earned/badge/5502ee43-7480-4d1a-8c17-264fbfe8d33a" target="_blank" rel="noopener noreferrer" className="cert-card animate-fade-up">
                            <div className="cert-badge"><FaAws /></div>
                            <div className="cert-info">
                                <h4>AWS Certified Developer - Associate</h4>
                                <p className="cert-issuer">Amazon Web Services</p>
                                <p className="cert-date">Verified ↗</p>
                            </div>
                        </a>
                        <a href="https://www.credly.com/badges/5e484fbf-6b56-4ada-a2cb-f36b2bc7f3f1" target="_blank" rel="noopener noreferrer" className="cert-card animate-fade-up">
                            <div className="cert-badge"><FaBrain /></div>
                            <div className="cert-info">
                                <h4>AWS Certified Machine Learning Engineer - Associate</h4>
                                <p className="cert-issuer">Amazon Web Services</p>
                                <p className="cert-date">Verified ↗</p>
                            </div>
                        </a>
                        <div className="cert-card animate-fade-up">
                            <div className="cert-badge"><FaCloud /></div>
                            <div className="cert-info">
                                <h4>AWS Community Builders Program</h4>
                                <p className="cert-issuer">Amazon Web Services</p>
                                <p className="cert-date">Active Contributor | Ongoing</p>
                            </div>
                        </div>
                        <div className="cert-card animate-fade-up">
                            <div className="cert-badge"><FaAws /></div>
                            <div className="cert-info">
                                <h4>AWS Innovate – AI/ML Edition</h4>
                                <p className="cert-issuer">Virtual Event</p>
                                <p className="cert-date">Participant | 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact">
                <div className="container">
                    <div className="contact-content animate-fade-up">
                        <span className="section-tag">Contact</span>
                        <h2 className="contact-title">Let's Work Together</h2>
                        <p className="contact-text">I'm currently available for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
                        <a href="mailto:nagababu@medisetti.in" className="contact-email">nagababu@medisetti.in</a>
                        <div className="contact-social">
                            <a href="https://github.com/nagababu-medisetti" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/nagababu-medisetti/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="https://nagababu.medisetti.in" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Website"><FaCloud /></a>
                            <a href="mailto:nagababu@medisetti.in" className="social-link" aria-label="Email"><FaEnvelope /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p className="footer-text">
                        © {new Date().getFullYear()} <span>Nagababu Medisetti</span>. Built with Gatsby & React.
                    </p>
                </div>
            </footer>
        </>
    )
}

export default IndexPage

export const Head = () => (
    <>
        <title>Nagababu Medisetti | Senior Software Developer & AWS Certified</title>
        <meta name="description" content="Portfolio of Nagababu Medisetti, a Senior Software Developer with 5+ years of experience in React, Vue.js, Next.js, AWS, and cloud technologies." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </>
)
