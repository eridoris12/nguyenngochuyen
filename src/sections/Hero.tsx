import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TrendingUp, DollarSign, Search, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.fade-in'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: TrendingUp, value: '+250%', label: 'Organic Traffic' },
    { icon: DollarSign, value: '+200%', label: 'Organic Revenue' },
    { icon: Search, value: '500+', label: 'Keywords Top 10' },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-screen bg-[#F4F6F8] pt-20 lg:pt-0"
    >
      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center px-6 lg:px-[8vw] py-12 lg:py-0">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <h1 
            className="fade-in text-4xl lg:text-6xl font-bold text-[#0B1A2F] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            NGUYEN NGOC HUYEN
          </h1>

          <p className="fade-in text-lg text-[#6B7280] mb-4">
            SEO Specialist | Data-Driven Growth Strategist
          </p>

          <p className="fade-in text-[#6B7280] max-w-lg mb-8 leading-relaxed">
            Tôi giúp doanh nghiệp tăng trưởng Organic Traffic và Revenue bằng chiến lược SEO bền vững, 
            dựa trên dữ liệu và mục tiêu kinh doanh rõ ràng.
          </p>

          {/* Stats */}
          <div className="fade-in flex flex-wrap gap-4 mb-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-[#D8A7B1]/20 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-[#D8A7B1]" />
                </div>
                <div>
                  <p className="text-lg font-bold text-[#0B1A2F]">{stat.value}</p>
                  <p className="text-xs text-[#6B7280]">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="fade-in flex flex-wrap gap-4">
            <a 
              href="#case-studies"
              className="inline-flex items-center gap-2 bg-[#D8A7B1] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#c996a3] transition-colors"
            >
              Xem Case Study
              <ArrowRight className="w-4 h-4" />
            </a>
            <button 
              className="inline-flex items-center gap-2 border border-[#0B1A2F] text-[#0B1A2F] px-6 py-3 rounded-lg font-medium hover:bg-[#0B1A2F] hover:text-white transition-colors"
            >
              <Download className="w-4 h-4" />
              Tải CV
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="fade-in w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0 lg:pl-12">
          <img 
            src="/images/hero-portrait.jpg" 
            alt="Nguyen Ngoc Huyen"
            className="w-full max-w-md mx-auto lg:max-w-none lg:w-full lg:h-[70vh] object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
