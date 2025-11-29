// Note: In this simple CDN/Babel setup, we will access React hooks 
// from the global scope (window) where they are typically exposed by their CDNs.

const { useState, useEffect } = window.React;

// --- INLINE SVG ICON DEFINITIONS (Replaces window.lucide Destructuring) ---
// Defining custom components for robustness, eliminating dependency on the global lucide object structure.

const IconSVG = ({ children, size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {children}
  </svg>
);

const Phone = (props) => (
  <IconSVG {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.73 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6.09 10.9a16 16 0 0 0 6 6l2.24-2.24a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></IconSVG>
);
const BookOpen = (props) => (
  <IconSVG {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></IconSVG>
);
const GraduationCap = (props) => (
  <IconSVG {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></IconSVG>
);
const Award = (props) => (
  <IconSVG {...props}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></IconSVG>
);
const Clock = (props) => (
  <IconSVG {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></IconSVG>
);
const MapPin = (props) => (
  <IconSVG {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></IconSVG>
);
const Globe = (props) => (
  <IconSVG {...props}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></IconSVG>
);
const ChevronRight = (props) => (
  <IconSVG {...props}><path d="m9 18 6-6-6-6"/></IconSVG>
);
const Star = (props) => (
  <IconSVG {...props} fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></IconSVG>
);
const Menu = (props) => (
  <IconSVG {...props}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></IconSVG>
);
const X = (props) => (
  <IconSVG {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></IconSVG>
);


// Sub-components
const FeatureItem = ({ icon, title, text }) => (
    <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
        <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-inner">
            {icon}
        </div>
        <div>
            <h3 className="text-white font-bold text-lg">{title}</h3>
            <p className="text-slate-400 text-sm">{text}</p>
        </div>
    </div>
);

const ServiceCard = ({ title, icon, image, link, btnText, isRTL, featured = false }) => (
    <div className={`relative group overflow-hidden rounded-[2rem] border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 ${featured ? 'bg-white/10 backdrop-blur-md' : 'bg-white/5 backdrop-blur-sm'}`}>
        {/* Image Overlay */}
        <div className="h-48 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/334155/ffffff?text=Image+Missing"; }}
            />
            <div className="absolute bottom-4 left-4 z-20 p-3 rounded-xl bg-slate-900/50 backdrop-blur-md text-amber-400 border border-white/10">
                {icon}
            </div>
        </div>

        <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
            <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 font-medium transition-all ${featured ? 'bg-amber-500 text-white hover:bg-amber-600' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
                {btnText}
                <ChevronRight size={18} className={isRTL ? 'rotate-180' : ''} />
            </a>
        </div>
    </div>
);

const App = () => {
  const [lang, setLang] = useState('en');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Content Data
  const content = {
    en: {
      name: "Mr. Mohamed Atef",
      role: "Premium English Tutor",
      heroTitle: "Master English with Confidence",
      heroSubtitle: "Middle School, High School & University Levels. Expert guidance for the Kuwaiti Curriculum.",
      cta: "Book Your Lesson Now",
      experience: "16+ Years Experience",
      curriculum: "Kuwait Curriculum Expert",
      notes: "Explanatory Notes & Reviews",
      servicesTitle: "Education Levels",
      intermediate: "Intermediate School",
      secondary: "Secondary School",
      university: "Universities & Institutes",
      contactTitle: "Get in Touch",
      open: "Open 24/7",
      location: "Kuwait",
      rights: "All rights reserved.",
      whatsapp: "Contact on WhatsApp",
      navHome: "Home",
      navServices: "Levels",
      navContact: "Contact"
    },
    ar: {
      name: "أ. محمد عاطف",
      role: "مدرس لغة إنجليزية",
      heroTitle: "أتقن اللغة الإنجليزية بثقة",
      heroSubtitle: "للمراحل المتوسطة، الثانوية والجامعية. خبرة طويلة في المناهج الكويتية.",
      cta: "احجز درسك الآن",
      experience: "أكثر من ١٦ سنة خبرة",
      curriculum: "خبير بالمناهج الكويتية",
      notes: "مذكرات شرح ومراجعات",
      servicesTitle: "المراحل الدراسية",
      intermediate: "المرحلة المتوسطة",
      secondary: "المرحلة الثانوية",
      university: "الجامعات والمعاهد",
      contactTitle: "تواصل معنا",
      open: "متاح ٢٤ ساعة",
      location: "الكويت",
      rights: "جميع الحقوق محفوظة.",
      whatsapp: "تواصل عبر واتساب",
      navHome: "الرئيسية",
      navServices: "المراحل",
      navContact: "اتصل بنا"
    }
  };

  const t = content[lang];
  const isRTL = lang === 'ar';
  const whatsappNumber = "96550875409";
  
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // Image URLs
  const heroImage = "Gemini_Generated_Image_7rinbh7rinbh7rin.png"; 
  
  const imgIntermediate = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800&h=400&crop=entropy";
  const imgSecondary = "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800&h=400&crop=entropy";
  const imgUniversity = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=400&crop=entropy";

  // Helper for glass classes
  const glassCard = "backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl rounded-3xl";
  const glassBtn = "backdrop-blur-md bg-amber-500/90 hover:bg-amber-500 text-white shadow-lg shadow-amber-500/30 transition-all duration-300";

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={`min-h-screen font-sans selection:bg-amber-500 selection:text-white ${isRTL ? 'font-arabic' : ''}`}>
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-[-1] bg-slate-900">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 opacity-100"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-slate-900/80 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              M
            </div>
            <span className="text-xl font-bold text-white tracking-tight">{t.name}</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white/80 hover:text-amber-400 transition-colors">{t.navHome}</a>
            <a href="#services" className="text-white/80 hover:text-amber-400 transition-colors">{t.navServices}</a>
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm transition-all flex items-center gap-2"
            >
              <Globe size={14} />
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-medium shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
            >
              <Phone size={18} />
              <span>{t.navContact}</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-sm"
            >
                {lang === 'en' ? 'العربية' : 'EN'}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              <span className='w-6 h-6 flex items-center justify-center'>{mobileMenuOpen ? <X /> : <Menu />}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-2xl text-white font-bold">{t.navHome}</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-2xl text-white font-bold">{t.navServices}</a>
            <a 
              href={whatsappLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-amber-400 font-bold flex items-center gap-2"
            >
                <Phone /> {t.whatsapp}
            </a>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className={`space-y-8 ${isRTL ? 'md:order-2' : ''} z-10`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-amber-400 text-sm font-medium backdrop-blur-sm">
              <Star size={16} fill="currentColor" />
              <span>{t.role}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              {isRTL ? (
                <>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">تميز</span> في اللغة الإنجليزية
                </>
              ) : (
                <>
                  Master English <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">With Confidence</span>
                </>
              )}
            </h1>
            
            <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${glassBtn} px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 group`}
              >
                <span>{t.cta}</span>
                <ChevronRight className={`group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>
            </div>

            <div className="flex items-center gap-4 text-slate-400 text-sm pt-4">
                <div className="flex items-center gap-1">
                    <Clock size={16} className="text-amber-500" />
                    <span>{t.open}</span>
                </div>
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-amber-500" />
                    <span>{t.location}</span>
                </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`relative ${isRTL ? 'md:order-1' : ''} flex justify-center`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 rounded-full blur-3xl transform scale-90"></div>
            
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl bg-slate-800">
               <img 
                src={heroImage} 
                alt="Mr Mohamed Atef" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x500/334155/ffffff?text=Prof.+Atef"; }}
               />
               
               <div className={`absolute bottom-6 ${isRTL ? 'left-6' : 'right-6'} ${glassCard} p-4 flex items-center gap-3 max-w-[200px]`}>
                 <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white">
                    <Award size={20} />
                 </div>
                 <div>
                    <p className="text-white font-bold text-sm leading-tight">{t.experience}</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Stripe */}
      <section className="py-10 border-y border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureItem icon={<Award className="text-amber-400" size={32} />} title={t.experience} text={t.role} />
                <FeatureItem icon={<BookOpen className="text-amber-400" size={32} />} title={t.curriculum} text="Kuwaiti Syllabus" />
                <FeatureItem icon={<GraduationCap className="text-amber-400" size={32} />} title={t.notes} text="Exam Preparation" />
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative">
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.servicesTitle}</h2>
                <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <ServiceCard 
                    title={t.intermediate} 
                    icon={<BookOpen size={40} />} 
                    image={imgIntermediate}
                    link={whatsappLink}
                    btnText={t.cta}
                    isRTL={isRTL}
                />
                <ServiceCard 
                    title={t.secondary} 
                    icon={<Award size={40} />} 
                    image={imgSecondary}
                    link={whatsappLink}
                    btnText={t.cta}
                    isRTL={isRTL}
                    featured={true}
                />
                <ServiceCard 
                    title={t.university} 
                    icon={<GraduationCap size={40} />} 
                    image={imgUniversity}
                    link={whatsappLink}
                    btnText={t.cta}
                    isRTL={isRTL}
                />
            </div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
            <div className={`${glassCard} p-8 md:p-12 text-center relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.contactTitle}</h2>
                    <p className="text-slate-300 mb-8 text-xl dir-ltr">+965 50875409</p>
                    <a 
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
                    >
                        <Phone size={24} />
                        {t.whatsapp}
                    </a>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} {t.name}. {t.rights}</p>
        <div className="flex justify-center gap-4 mt-4">
            <span className="flex items-center gap-1"><MapPin size={12} /> {t.location}</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {t.open}</span>
        </div>
      </footer>
    </div>
  );
};

// Make App available globally
window.App = App;
