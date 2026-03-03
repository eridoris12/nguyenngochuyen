import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Search, ClipboardList, Code, BarChart3, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.process-item'),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
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

  const steps = [
    { number: '01', icon: Building2, title: 'Business Understanding', desc: 'Hiểu rõ mục tiêu, margin, đối tượng khách hàng' },
    { number: '02', icon: Search, title: 'Audit & Research', desc: 'Kiểm tra kỹ thuật, nội dung, đối thủ, từ khóa' },
    { number: '03', icon: ClipboardList, title: 'Strategy Planning', desc: 'Ưu tiên, lộ trình, quick wins' },
    { number: '04', icon: Code, title: 'Implementation', desc: 'Triển khai on-page, content, phối hợp dev' },
    { number: '05', icon: BarChart3, title: 'Measurement', desc: 'KPIs, dashboard, attribution' },
    { number: '06', icon: Rocket, title: 'Optimization', desc: 'Tối ưu liên tục, mở rộng, nhân rộng' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="process" 
      className="w-full py-20 lg:py-28 bg-white"
    >
      <div className="px-6 lg:px-[8vw]">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-[#7AA7D9] mb-3">Quy Trình</p>
          <h2 
            className="text-3xl lg:text-4xl font-bold text-[#0B1E3F]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            SEO Process
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="process-item bg-[#E6F0FA] rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#7AA7D9]/20 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-[#7AA7D9]" />
                </div>
                <span className="text-xs font-bold text-[#7AA7D9]">{step.number}</span>
              </div>
              <h3 
                className="text-lg font-bold text-[#0B1E3F] mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-[#6B7280]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
