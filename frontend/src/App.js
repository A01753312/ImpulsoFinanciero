import React, { useState, useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  DollarSign, 
  RefreshCw, 
  CreditCard, 
  Home,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Shield,
  Users,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Company Data
const COMPANY = {
  name: "Impulso Financiero",
  razonSocial: "Parque Ejecutivo Zona Norte",
  whatsapp: "5512961663",
  telefono: "5558684635",
  email: "contacto@impulsofinanciero.com",
  direccion: "Av. Primero de Mayo Mz1 Lte 12, Infonavit Tepalcapa, 54743, Cuautitlán Izcalli, Estado de México"
};

const SERVICES = [
  {
    icon: DollarSign,
    title: "Créditos para Pensionados IMSS Ley 73",
    description: "Créditos diseñados especialmente para pensionados del IMSS bajo la Ley 73, con las mejores tasas y plazos flexibles."
  },
  {
    icon: CreditCard,
    title: "Compra de Deuda",
    description: "Consolidamos tus deudas en un solo crédito con mejores condiciones y una sola mensualidad más baja."
  },
  {
    icon: RefreshCw,
    title: "Renovación de Crédito",
    description: "Renueva tu crédito actual y obtén efectivo adicional con condiciones mejoradas y proceso ágil."
  },
  {
    icon: Home,
    title: "Canje de Mejoravit",
    description: "Convierte tu crédito Mejoravit en efectivo disponible para lo que necesites, de forma rápida y segura."
  }
];

const REQUIREMENTS = [
  "Ser pensionado del IMSS bajo la Ley 73",
  "Contar con estado de cuenta de pensión reciente",
  "Identificación oficial vigente (INE/IFE)",
  "Comprobante de domicilio no mayor a 3 meses",
  "CURP",
  "Número de Seguro Social (NSS)"
];

const FAQ_ITEMS = [
  {
    question: "¿Cuánto tiempo tarda el proceso de aprobación?",
    answer: "El proceso de aprobación es muy rápido. Una vez que tenemos toda tu documentación completa, la aprobación puede tardar entre 24 y 48 horas hábiles."
  },
  {
    question: "¿Cuál es el monto máximo que puedo solicitar?",
    answer: "El monto máximo depende de tu pensión mensual y tu historial crediticio. Podemos ofrecerte hasta 12 meses de tu pensión en algunos casos. Contáctanos para una evaluación personalizada."
  },
  {
    question: "¿Necesito aval o garantía para el crédito?",
    answer: "No, nuestros créditos para pensionados no requieren aval ni garantía. Tu pensión respalda el crédito."
  },
  {
    question: "¿Puedo solicitar un crédito si ya tengo otro vigente?",
    answer: "Sí, podemos evaluar tu caso para una renovación o compra de deuda, lo cual te permitiría obtener mejores condiciones y efectivo adicional."
  },
  {
    question: "¿Qué sucede si me atraso en un pago?",
    answer: "Entendemos que pueden surgir imprevistos. Te recomendamos comunicarte con nosotros inmediatamente para encontrar una solución y evitar recargos."
  },
  {
    question: "¿El trámite tiene algún costo?",
    answer: "La cotización y asesoría inicial son completamente gratuitas. Los gastos de apertura y comisiones están claramente especificados en tu contrato antes de firmar."
  }
];

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#requisitos", label: "Requisitos" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacto", label: "Contacto" }
  ];

  return (
    <header 
      data-testid="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3" data-testid="logo-link">
            <div className="w-10 h-10 bg-[#B45309] rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-['Libre_Baskerville'] text-xl font-bold text-[#0F172A]">
                Impulso Financiero
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-[#0F172A] font-medium hover:text-[#B45309]"
                data-testid={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <a
              href={`https://wa.me/52${COMPANY.whatsapp}?text=Hola,%20me%20interesa%20información%20sobre%20créditos%20para%20pensionados`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="header-whatsapp-btn"
            >
              <Button className="bg-[#B45309] hover:bg-[#92400E] text-white rounded-full px-6 py-2 font-semibold">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contáctanos
              </Button>
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" data-testid="mobile-menu-trigger">
                <Menu className="w-6 h-6 text-[#0F172A]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white" data-testid="mobile-menu">
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-[#0F172A] hover:text-[#B45309]"
                    data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={`https://wa.me/52${COMPANY.whatsapp}?text=Hola,%20me%20interesa%20información%20sobre%20créditos%20para%20pensionados`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                  data-testid="mobile-whatsapp-btn"
                >
                  <Button className="w-full bg-[#B45309] hover:bg-[#92400E] text-white rounded-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contáctanos por WhatsApp
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="min-h-screen pt-20 flex items-center section-warm grain-overlay"
      data-testid="hero-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5 text-[#B45309]" />
              <span className="text-sm font-medium text-[#475569]">Oficina comercial autorizada Inbursa</span>
            </div>
            
            <h1 className="font-['Libre_Baskerville'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
              Créditos para{" "}
              <span className="text-[#B45309]">Pensionados</span>{" "}
              IMSS Ley 73
            </h1>
            
            <p className="text-lg sm:text-xl text-[#475569] mb-8 leading-relaxed max-w-xl">
              En <strong className="text-[#0F172A]">Impulso Financiero</strong> te ayudamos a obtener el crédito que necesitas con las mejores condiciones del mercado. Proceso rápido y sin complicaciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/52${COMPANY.whatsapp}?text=Hola,%20me%20interesa%20información%20sobre%20créditos%20para%20pensionados`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-whatsapp-btn"
              >
                <Button className="w-full sm:w-auto bg-[#B45309] hover:bg-[#92400E] text-white rounded-full px-8 py-6 text-lg font-semibold">
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Solicitar Información
                </Button>
              </a>
              <a href="#servicios">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white rounded-full px-8 py-6 text-lg font-semibold"
                  data-testid="hero-services-btn"
                >
                  Ver Servicios
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-[#E2E8F0]">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#B45309]" />
                <span className="text-sm text-[#475569]">Aprobación en 24-48 hrs</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#B45309]" />
                <span className="text-sm text-[#475569]">Sin aval requerido</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#B45309]" />
                <span className="text-sm text-[#475569]">+500 clientes satisfechos</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in-up stagger-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                alt="Pareja de pensionados felices"
                className="w-full h-auto object-cover aspect-[4/3]"
                data-testid="hero-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-float hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A]">Crédito Aprobado</p>
                  <p className="text-sm text-[#475569]">En solo 24 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 lg:py-28 section-light" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-['Libre_Baskerville'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-[#475569]">
            Ofrecemos soluciones financieras diseñadas especialmente para pensionados, con procesos simples y condiciones justas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <Card 
              key={index} 
              className="service-card bg-white border-0 shadow-lg rounded-2xl overflow-hidden"
              data-testid={`service-card-${index}`}
            >
              <div className="h-1 bg-[#B45309]"></div>
              <CardContent className="p-8">
                <div className="icon-container mb-6">
                  <service.icon className="w-8 h-8 text-[#B45309]" />
                </div>
                <h3 className="font-['Libre_Baskerville'] text-xl sm:text-2xl font-bold text-[#0F172A] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#475569] leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={`https://wa.me/52${COMPANY.whatsapp}?text=Hola,%20me%20interesa%20información%20sobre%20sus%20servicios`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="services-whatsapp-btn"
          >
            <Button className="bg-[#B45309] hover:bg-[#92400E] text-white rounded-full px-8 py-6 text-lg font-semibold">
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar Cotización Gratis
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 lg:py-28 section-warm grain-overlay" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1543282949-ffbf6a0f263c?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                alt="Equipo de asesores financieros"
                className="w-full h-auto object-cover aspect-[4/3]"
                data-testid="about-image"
              />
            </div>
            
            {/* Stats card */}
            <div className="absolute -bottom-6 -right-6 bg-[#0F172A] text-white rounded-xl shadow-xl p-6 hidden sm:block">
              <p className="text-3xl font-bold">+10</p>
              <p className="text-sm text-gray-300">Años de experiencia</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-['Libre_Baskerville'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
              ¿Quiénes Somos?
            </h2>
            <p className="text-lg text-[#475569] mb-6 leading-relaxed">
              <strong className="text-[#0F172A]">Impulso Financiero</strong> es una oficina comercial autorizada de <strong className="text-[#0F172A]">Inbursa</strong>, especializada en créditos para pensionados del IMSS bajo la Ley 73.
            </p>
            <p className="text-lg text-[#475569] mb-8 leading-relaxed">
              Nuestro compromiso es brindarte un servicio personalizado, transparente y de confianza. Entendemos tus necesidades y trabajamos para ofrecerte las mejores opciones de financiamiento con procesos claros y sin sorpresas.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#B45309]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-[#B45309]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A]">Respaldados por Inbursa</h4>
                  <p className="text-[#475569]">Operamos bajo los estándares de una institución financiera de prestigio</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#B45309]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[#B45309]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A]">Atención Personalizada</h4>
                  <p className="text-[#475569]">Te acompañamos en cada paso del proceso de tu crédito</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#B45309]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#B45309]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A]">Procesos Ágiles</h4>
                  <p className="text-[#475569]">Aprobación rápida para que obtengas tu dinero cuando lo necesitas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Requirements Section
const RequirementsSection = () => {
  return (
    <section id="requisitos" className="py-20 lg:py-28 section-light" data-testid="requirements-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-['Libre_Baskerville'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
              Requisitos
            </h2>
            <p className="text-lg text-[#475569] mb-8 leading-relaxed">
              Solicitar tu crédito es muy sencillo. Solo necesitas cumplir con los siguientes requisitos básicos:
            </p>

            <div className="space-y-4">
              {REQUIREMENTS.map((req, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 bg-[#F5F5F4] rounded-xl"
                  data-testid={`requirement-${index}`}
                >
                  <div className="w-8 h-8 bg-[#B45309] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-[#0F172A] font-medium pt-1">{req}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-[#0F172A] rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="font-['Libre_Baskerville'] text-2xl lg:text-3xl font-bold mb-4">
              ¿Tienes dudas sobre los requisitos?
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              No te preocupes, nuestro equipo de asesores está listo para ayudarte y resolver cualquier pregunta que tengas.
            </p>
            <a
              href={`https://wa.me/52${COMPANY.whatsapp}?text=Hola,%20tengo%20dudas%20sobre%20los%20requisitos%20para%20solicitar%20un%20crédito`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="requirements-whatsapp-btn"
            >
              <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-8 py-6 text-lg font-semibold">
                <MessageCircle className="w-6 h-6 mr-2" />
                Consultar por WhatsApp
              </Button>
            </a>
            <p className="text-center text-gray-400 text-sm mt-4">
              Respuesta inmediata en horario laboral
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 section-warm grain-overlay" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Libre_Baskerville'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-[#475569]">
            Respuestas a las dudas más comunes sobre nuestros servicios de crédito.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4" data-testid="faq-accordion">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-xl border-0 shadow-md overflow-hidden"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="px-6 py-5 text-left text-[#0F172A] font-semibold hover:no-underline hover:bg-[#F5F5F4] text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-[#475569] leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 lg:py-28 section-light" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-['Libre_Baskerville'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            Contáctanos
          </h2>
          <p className="text-lg text-[#475569]">
            Estamos listos para atenderte y ayudarte a obtener el crédito que necesitas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="contact-item bg-[#F5F5F4] rounded-xl" data-testid="contact-whatsapp">
              <div className="w-14 h-14 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0F172A] text-lg">WhatsApp</h4>
                <a 
                  href={`https://wa.me/52${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B45309] hover:underline text-lg"
                >
                  {COMPANY.whatsapp}
                </a>
                <p className="text-sm text-[#475569]">Respuesta inmediata</p>
              </div>
            </div>

            <div className="contact-item bg-[#F5F5F4] rounded-xl" data-testid="contact-phone">
              <div className="w-14 h-14 bg-[#0F172A] rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0F172A] text-lg">Teléfono</h4>
                <a 
                  href={`tel:${COMPANY.telefono}`}
                  className="text-[#B45309] hover:underline text-lg"
                >
                  {COMPANY.telefono}
                </a>
                <p className="text-sm text-[#475569]">Lunes a Viernes 9:00 - 18:00</p>
              </div>
            </div>

            <div className="contact-item bg-[#F5F5F4] rounded-xl" data-testid="contact-email">
              <div className="w-14 h-14 bg-[#B45309] rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0F172A] text-lg">Correo Electrónico</h4>
                <a 
                  href={`mailto:${COMPANY.email}`}
                  className="text-[#B45309] hover:underline text-lg break-all"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>

            <div className="contact-item bg-[#F5F5F4] rounded-xl" data-testid="contact-address">
              <div className="w-14 h-14 bg-[#475569] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0F172A] text-lg">Dirección</h4>
                <p className="text-[#475569]">{COMPANY.direccion}</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.7513!2d-99.23!3d19.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQwJzEyLjAiTiA5OcKwMTMnNDguMCJX!5e0!3m2!1sen!2smx!4v1620000000000!5m2!1sen!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Impulso Financiero"
              data-testid="contact-map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0F172A] text-white py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#B45309] rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="font-['Libre_Baskerville'] text-xl font-bold">
                Impulso Financiero
              </span>
            </div>
            <p className="text-gray-400 mb-2">
              {COMPANY.razonSocial}
            </p>
            <p className="text-gray-400 text-sm">
              Oficina comercial autorizada Inbursa
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <nav className="space-y-3">
              <a href="#inicio" className="block text-gray-400 hover:text-[#B45309] footer-link">Inicio</a>
              <a href="#servicios" className="block text-gray-400 hover:text-[#B45309] footer-link">Servicios</a>
              <a href="#nosotros" className="block text-gray-400 hover:text-[#B45309] footer-link">Nosotros</a>
              <a href="#requisitos" className="block text-gray-400 hover:text-[#B45309] footer-link">Requisitos</a>
              <a href="#faq" className="block text-gray-400 hover:text-[#B45309] footer-link">FAQ</a>
              <a href="#contacto" className="block text-gray-400 hover:text-[#B45309] footer-link">Contacto</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                {COMPANY.whatsapp}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                {COMPANY.telefono}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                {COMPANY.email}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} {COMPANY.name}. Todos los derechos reservados.
          </p>
          <p className="mt-2">
            {COMPANY.direccion}
          </p>
        </div>
      </div>
    </footer>
  );
};

// WhatsApp Floating Button
const WhatsAppButton = () => {
  return (
    <div className="whatsapp-float animate-pulse-glow" data-testid="whatsapp-float">
      <a
        href={`https://wa.me/52${COMPANY.whatsapp}?text=Hola,%20me%20interesa%20información%20sobre%20créditos%20para%20pensionados`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Contactar por WhatsApp"
        data-testid="whatsapp-float-btn"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
};

// Main Page Component
const LandingPage = () => {
  return (
    <div className="min-h-screen" data-testid="landing-page">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <RequirementsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
