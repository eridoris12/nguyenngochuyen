import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Settings, FileText, Lightbulb, BarChart3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.service-card'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Settings,
      title: 'Technical SEO',
      description: 'Thực hiện Technical Audit toàn diện, tối ưu cấu trúc website, cải thiện Core Web Vitals, xử lý crawl errors, triển khai Schema Markup.',
      items: ['Technical Audit', 'Cấu trúc Website', 'Core Web Vitals', 'Schema Markup']
    },
    {
      icon: FileText,
      title: 'Onpage SEO',
      description: 'Nghiên cứu từ khóa theo Search Intent, xây dựng cấu trúc nội dung, tối ưu Title & Meta, chiến lược Internal Linking.',
      items: ['Nghiên cứu từ khóa', 'Cấu trúc nội dung', 'Tối ưu Meta', 'E-E-A-T']
    },
    {
      icon: Lightbulb,
      title: 'Content Strategy',
      description: 'Nghiên cứu từ khóa theo Topic Cluster, phân tích SERP behavior, xây dựng cấu trúc nội dung chuyển đổi, tối ưu nội dung cũ.',
      items: ['Topic Cluster', 'SERP Analysis', 'Content Brief', 'Content Refresh']
    },
    {
      icon: BarChart3,
      title: 'Data & Tracking',
      description: 'Thiết lập GA4 & GSC, phân tích hành vi ngườI dùng, theo dõi Conversion Funnel, báo cáo hiệu suất SEO định kỳ.',
      items: ['GA4 & GSC Setup', 'Phân tích hành vi', 'Conversion Tracking', 'SEO Reporting']
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="w-full py-20 lg:py-28 bg-white"
    >
      <div className="px-6 lg:px-[8vw]">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-[#7AA7D9] mb-3">Dịch Vụ</p>
          <h2 
            className="text-3xl lg:text-4xl font-bold text-[#0B1E3F]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Chuyên Môn CủA Tôi
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-[#E6F0FA] rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-[#7AA7D9]/20 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-[#7AA7D9]" />
              </div>

              <h3 
                className="text-xl font-bold text-[#0B1E3F] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {service.title}
              </h3>

              <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.items.map((item, itemIndex) => (
                  <span 
                    key={itemIndex}
                    className="text-xs px-3 py-1 rounded-full bg-white text-[#0B1E3F] font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
