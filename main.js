// Portfolio Application - Junior System & Network Administrator
class PortfolioApp {
  constructor() {
    this.currentTheme = localStorage.getItem("theme") || "light";
    this.portfolioData = null;
    this.typingTexts = ["Junior System & Network Administrator"];
    this.typingSpeed = 70;
    this.typingDelay = 1200;
    this.currentTextIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.isTyping = false;

    this.dom = {
      loadingOverlay: document.getElementById("loadingOverlay"),
      menuToggle: document.getElementById("menuToggle"),
      navLinks: document.getElementById("navLinks"),
      themeToggle: document.getElementById("themeToggle"),
      skillsContainer: document.getElementById("skillsContainer"),
      skillsFilter: document.getElementById("skillsFilter"),
      projectsContainer: document.getElementById("projectsContainer"),
      certsContainer: document.getElementById("certsContainer"),
      contactForm: document.getElementById("contactForm"),
      downloadCVBtn: document.getElementById("downloadCV"),
      backToTop: document.getElementById("backToTop"),
      currentYear: document.getElementById("currentYear"),
      typingText: document.getElementById("typingText"),
      newsletterForm: document.getElementById("newsletterForm"),
    };

    this.init();
  }

  async init() {
    this.setCurrentYear();
    await this.loadPortfolioData();
    this.initTheme();
    this.initNavigation();
    this.initTypingEffect();
    this.initAnimations();
    this.initEventListeners();
    this.initFormValidation();
    this.renderSkills();
    this.renderProjects();
    this.renderCertifications();

    setTimeout(() => {
      this.hideLoading();
      this.startAnimations();
    }, 1000);
  }

  async loadPortfolioData() {
    this.loadLocalData();
  }

  loadLocalData() {
    this.portfolioData = {
      skills: [
        {
          id: 1,
          icon: "fas fa-server",
          title: "System Administration",
          tags: [
            "Windows Server",
            "Active Directory Domain Services (AD DS)",
            "DNS",
            "DHCP",
            "Group Policy",
            "OU Design",
            "RSAT",
            "File Server",
            "DFS",
            "WSUS",
            "WDS",
            "Hyper-V",
            "Backup & Recovery",
          ],
          category: "system",
        },
        {
          id: 2,
          icon: "fas fa-network-wired",
          title: "Networking",
          tags: [
            "TCP/IP",
            "IPv4/IPv6",
            "Subnetting",
            "VLANs",
            "Inter-VLAN Routing",
            "OSPF",
            "ACLs",
            "NAT",
            "PAT",
            "SSH",
            "Wireless Basics",
            "Router & Switch Configuration",
          ],
          category: "network",
        },
        {
          id: 3,
          icon: "fas fa-shield-alt",
          title: "Infrastructure & Security Fundamentals",
          tags: [
            "Firewall Fundamentals",
            "Zone-Based Policy Firewall (ZPF)",
            "Port Security",
            "Secure Management Access",
            "Patch Management",
            "Access Control",
            "Monitoring & Logging",
            "Infrastructure Troubleshooting",
          ],
          category: "security",
        },
        {
          id: 4,
          icon: "fas fa-tools",
          title: "Technical Tools",
          tags: [
            "Cisco Packet Tracer",
            "VMware Workstation",
            "Wireshark",
            "PowerShell",
            "ADUC",
            "GPMC",
            "DNS Manager",
            "DHCP Console",
            "Server Manager",
          ],
          category: "tools",
        },
        {
          id: 5,
          icon: "fas fa-microchip",
          title: "IoT & Applied Integration",
          tags: [
            "ESP32",
            "Environmental Sensors",
            "Dashboard Monitoring",
            "Mobile App Control",
            "YOLO-based Video Analysis",
            "Real-time Hazard Detection",
          ],
          category: "tools",
        },
      ],

      projects: [
        {
          id: 1,
          title: "Windows Server Administration Lab",
          description:
            "Built and administered a Windows Server lab environment from scratch including AD DS, DNS, DHCP, OU design, users and groups, Group Policy, File Server, DFS, WSUS, WDS, Hyper-V, and backup and recovery.",
          technologies: [
            "Windows Server",
            "AD DS",
            "DNS",
            "DHCP",
            "Group Policy",
            "WSUS",
            "WDS",
            "Hyper-V",
            "PowerShell",
          ],
          icon: "fas fa-server",
          year: "2026",
          link: "#contact",
          linkLabel: "Ask for Lab Details",
          details:
            "Troubleshot real issues involving DNS resolution, GPO application, WSUS behavior, remote management, multi-NIC domain controller misconfiguration, RSAT setup, DFS, and FSMO role operations.",
        },
        {
          id: 2,
          title: "Enterprise Network Infrastructure Project",
          description:
            "Designed and implemented a secure enterprise network simulation connecting headquarters and branches using Cisco Packet Tracer. Configured structured subnetting, VLAN segmentation, Inter-VLAN Routing, centralized DHCP, SSH management, multi-area OSPF, Static NAT, PAT, ACLs, wireless connectivity, and Zone-Based Policy Firewall.",
          technologies: [
            "Cisco Packet Tracer",
            "VLANs",
            "Inter-VLAN Routing",
            "OSPF",
            "DHCP",
            "ACLs",
            "NAT/PAT",
            "ZPF",
            "SSH",
          ],
          icon: "fas fa-network-wired",
          year: "2026",
          link: "project1.mp4",
          linkLabel: "View Demo Video",
          details:
            "Applied enterprise networking practices including segmentation, access control, traffic filtering, and secure management to reflect a realistic infrastructure deployment.",
        },
        {
          id: 3,
          title: "Intelligent Hybrid AI Safety System",
          description:
            "Co-developed an intelligent safety system integrating computer vision, environmental sensors, ESP32, dashboard monitoring, and mobile application control for real-time hazard detection and response.",
          technologies: [
            "ESP32",
            "Computer Vision",
            "Environmental Sensors",
            "Dashboard Monitoring",
            "Mobile App Control",
            "Hazard Detection",
          ],
          icon: "fas fa-temperature-high",
          year: "2026",
          link: "#contact",
          linkLabel: "Project Media Coming Soon",
          details:
            "Combined YOLO-based video analysis with gas, flame, and temperature sensors to detect fire, smoke, gas leakage, and abnormal events. Achieved 2nd place in the Geniuses Forum competition.",
        },
      ],

      certifications: [
        {
          id: 1,
          name: "Cybersecurity Academy",
          issuer: "NTI / EG-CERT / NTRA",
          icon: "fas fa-user-shield",
          year: "2025",
          credential: "NTI Program",
          verified: true,
          file: "https://drive.google.com/file/d/1QXtFEyiZcKWIZYGHqqzohQjE_Nw1nBmx/view?usp=sharing",
          cta: "Open Certificate",
        },
        {
          id: 2,
          name: "Network Security Program",
          issuer: "NTI / Digital Egypt Youth",
          icon: "fas fa-shield-alt",
          year: "2025",
          credential: "NTI Program",
          verified: true,
          file: "https://drive.google.com/file/d/1kh_vs9Xfy58sPu5rGnjlkEc-xwkUunrc/view?usp=sharing",
          cta: "Open Certificate",
        },
        {
          id: 3,
          name: "CCNAv7 Program",
          issuer: "NTI / Digital Egypt Youth",
          icon: "fas fa-network-wired",
          year: "2026",
          credential: "NTI Program",
          verified: true,
          file: "https://drive.google.com/file/d/15qDPeJMppcR0yBalJdNTrR17hdQfbBwE/view?usp=sharing",
          cta: "Open Certificate",
        },
        {
          id: 4,
          name: "CompTIA Security+ SY0-601 Prep",
          issuer: "Netriders Academy",
          icon: "fas fa-certificate",
          year: "2026",
          credential: "Netriders Certificate",
          verified: true,
          file: "https://drive.google.com/file/d/1LLR8y-zsG_CwWB7gb2jcNv37zrgeyrGc/view?usp=sharing",
          cta: "Open Certificate",
        },
        {
          id: 5,
          name: "Network Infrastructure Summer Training",
          issuer: "NTI / ITIDA",
          icon: "fas fa-server",
          year: "2025",
          credential: "Summer Training",
          verified: true,
          file: "https://drive.google.com/file/d/1tT5q8Sus7HUv_Hnc90sbhoHyf8cbbuO2/view?usp=sharing",
          cta: "Open Certificate",
        },
        {
          id: 6,
          name: "Windows Server Administration (MCSA Track)",
          issuer: "Udemy",
          icon: "fab fa-microsoft",
          year: "2026",
          credential: "Listed in CV",
          verified: true,
          file: "https://drive.google.com/file/d/1Yk9Oi43f9PXbP8ncuO_13Srej8AQYEnx/view?usp=sharing",
          cta: "Open Certificate",
        },
      ],
    };
  }

  renderSkills() {
    if (!this.portfolioData?.skills.length) return;

    const skillsHTML = this.portfolioData.skills
      .map(
        (skill) => `
            <div class="skill-card" data-id="${skill.id}" data-category="${skill.category}">
                <div class="skill-header">
                    <i class="${skill.icon}" aria-hidden="true"></i>
                    <h3>${skill.title}</h3>
                </div>
                <div class="skill-tags">
                    ${skill.tags.map((tag) => `<span class="skill-tag">${tag}</span>`).join("")}
                </div>
            </div>
        `,
      )
      .join("");

    this.dom.skillsContainer.innerHTML = skillsHTML;
  }

  renderProjects() {
    if (!this.portfolioData?.projects.length) return;

    const projectsHTML = this.portfolioData.projects
      .map(
        (project) => `
            <div class="project-card" data-id="${project.id}">
                <div class="project-img">
                    <i class="${project.icon}" aria-hidden="true"></i>
                </div>
                <div class="project-content">
                    <div class="project-meta">
                        <span class="project-year">${project.year}</span>
                        <span class="project-type">Technical Project</span>
                    </div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    ${project.details ? `<p class="project-impact"><strong>Impact:</strong> ${project.details}</p>` : ""}
                    <div class="project-tech">
                        ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
                    </div>
                    <a href="${project.link}" class="project-link" target="_blank" rel="noopener">
                        <span>${project.linkLabel || "View Details"}</span>
                        <i class="fas fa-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        `,
      )
      .join("");

    this.dom.projectsContainer.innerHTML = projectsHTML;
  }

  renderCertifications() {
    if (!this.portfolioData?.certifications.length) return;

    const certsHTML = this.portfolioData.certifications
      .map((cert) => {
        const tag = cert.file ? "a" : "div";
        const href = cert.file ? `href="${cert.file}" target="_blank" rel="noopener"` : "";
        const clickableClass = cert.file ? "cert-card cert-card-link" : "cert-card";
        const badge = cert.file
          ? '<span class="cert-open-badge"><i class="fas fa-arrow-up-right-from-square"></i></span>'
          : '<span class="cert-pending">Certificate will be added later</span>';

        return `
            <${tag} class="${clickableClass}" data-id="${cert.id}" ${href}>
                <i class="${cert.icon} cert-icon" aria-hidden="true"></i>
                <div class="cert-info">
                    <h3>${cert.name}</h3>
                    <p class="cert-issuer">${cert.issuer}</p>
                    ${badge}
                </div>
            </${tag}>
        `;
      })
      .join("");

    this.dom.certsContainer.innerHTML = certsHTML;
  }

  initTheme() {
    document.documentElement.setAttribute("data-theme", this.currentTheme);
    this.updateThemeIcon();
    setTimeout(() => {
      document.body.classList.add("theme-transition");
    }, 100);
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", this.currentTheme);
    localStorage.setItem("theme", this.currentTheme);
    this.updateThemeIcon();
  }

  updateThemeIcon() {
    const icon = this.dom.themeToggle.querySelector("i");
    if (this.currentTheme === "dark") {
      icon.className = "fas fa-sun";
      icon.setAttribute("aria-label", "Switch to light mode");
    } else {
      icon.className = "fas fa-moon";
      icon.setAttribute("aria-label", "Switch to dark mode");
    }
  }

  initTypingEffect() {
    if (!this.dom.typingText) return;

    const fullText = this.typingTexts[0];
    let index = 0;

    const type = () => {
      if (index <= fullText.length) {
        this.dom.typingText.textContent = fullText.slice(0, index);
        index += 1;
        setTimeout(type, this.typingSpeed);
      } else {
        setTimeout(() => {
          this.dom.typingText.textContent = fullText;
        }, this.typingDelay);
      }
    };

    this.dom.typingText.textContent = "";
    setTimeout(type, 250);
  }

  initNavigation() {
    this.dom.menuToggle.addEventListener("click", () => {
      const isExpanded = this.dom.menuToggle.getAttribute("aria-expanded") === "true";
      this.dom.menuToggle.setAttribute("aria-expanded", !isExpanded);
      this.dom.navLinks.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!this.dom.navLinks.contains(e.target) && !this.dom.menuToggle.contains(e.target) && this.dom.navLinks.classList.contains("active")) {
        this.dom.navLinks.classList.remove("active");
        this.dom.menuToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          if (this.dom.navLinks.classList.contains("active")) {
            this.dom.navLinks.classList.remove("active");
            this.dom.menuToggle.setAttribute("aria-expanded", "false");
          }

          const navbarHeight = document.querySelector(".navbar").offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

          window.scrollTo({ top: targetPosition, behavior: "smooth" });
          history.pushState(null, null, targetId);
        }
      });
    });

    window.addEventListener("scroll", () => {
      this.updateActiveNavLink();
    });
  }

  updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  initAnimations() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".section-header, .skill-card, .project-card, .cert-card, .contact-card, .detail-card").forEach((el) => {
      this.observer.observe(el);
    });
  }

  startAnimations() {
    document.querySelectorAll(".stat-number").forEach((el) => this.animateCounter(el));
    document.querySelectorAll(".progress-fill").forEach((bar) => {
      const width = bar.getAttribute("data-width");
      setTimeout(() => {
        bar.style.width = `${width}%`;
      }, 400);
    });
  }

  animateCounter(element) {
    const target = parseInt(element.getAttribute("data-target"), 10);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const updateCounter = () => {
      current += step;
      if (current >= target) {
        element.textContent = target;
      } else {
        element.textContent = current;
        requestAnimationFrame(updateCounter);
      }
    };
    updateCounter();
  }

  initEventListeners() {
    this.dom.themeToggle?.addEventListener("click", () => this.toggleTheme());

    document.querySelectorAll(".filter-btn").forEach((button) => {
      button.addEventListener("click", () => this.filterSkills(button));
    });

    this.dom.contactForm?.addEventListener("submit", (e) => {
      if (!this.validateForm()) {
        e.preventDefault();
      }
    });

    window.addEventListener("scroll", () => {
      const backToTop = document.getElementById("backToTop");
      if (backToTop) {
        backToTop.classList.toggle("visible", window.scrollY > 400);
      }
    });
  }

  filterSkills(button) {
    const filter = button.getAttribute("data-filter");
    document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll(".skill-card").forEach((card) => {
      const category = card.getAttribute("data-category");
      card.style.display = filter === "all" || filter === category ? "block" : "none";
    });
  }

  initFormValidation() {
    const inputs = this.dom.contactForm?.querySelectorAll("input, textarea");
    inputs?.forEach((input) => {
      input.addEventListener("blur", () => this.validateField(input));
    });
  }

  validateField(field) {
    if (!field) return true;
    if (field.hasAttribute("required") && !field.value.trim()) {
      field.classList.add("error");
      return false;
    }
    field.classList.remove("error");
    return true;
  }

  validateForm() {
    const fields = this.dom.contactForm?.querySelectorAll("[required]") || [];
    return Array.from(fields).every((field) => this.validateField(field));
  }

  setCurrentYear() {
    if (this.dom.currentYear) {
      this.dom.currentYear.textContent = new Date().getFullYear();
    }
  }

  hideLoading() {
    if (this.dom.loadingOverlay) {
      this.dom.loadingOverlay.classList.add("hidden");
      setTimeout(() => {
        this.dom.loadingOverlay.style.display = "none";
      }, 400);
    }
  }
}

function copyEmail() {
  const email = "eng.youssefmohammed80@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    alert("Email copied successfully.");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  new PortfolioApp();
});
