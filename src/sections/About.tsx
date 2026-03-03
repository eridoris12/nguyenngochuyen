import aboutPortrait from '../assets/images/about-portrait.jpg'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.reveal'),
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

  const experiences = [
    {
      year: '2025',
      role: 'SEO Executive',
      company: 'Đồng Phục Huy Hoàng',
      description: 'Quản lý 1 website/dự án, tối ưu cấu trúc & internal linking, đạt 10 Key Top 3.'
    },
    {
      year: '2025',
      role: 'SEO Specialist',
      company: 'AuVietRack',
      description: 'Quản lý 2 dự án SEO, xử lý các vấn đề technical SEO, xây dựng & điều chỉnh chiến lược.'
    },
    {
      year: '2025 - 2026',
      role: 'SEO Specialist',
      company: 'Ecomkey',
      description: 'Quản lý 10+ dự án SEO, tăng traffic từ 0 lên 30.000 trong 3 tháng, 1.000+ lượt nhấp/ngày.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="w-full py-20 lg:py-28 bg-[#F4F6F8]"
    >
      <div className="px-6 lg:px-[8vw]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="reveal text-xs font-medium tracking-widest uppercase text-[#D8A7B1] mb-3">Về Tôi</p>
            <h2 
              className="reveal text-3xl lg:text-4xl font-bold text-[#0B1A2F]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tôi là ai?
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Image & Bio */}
            <div>
              <img 
                src={aboutPortrait}
                alt="About"
                className="reveal w-full h-80 object-cover rounded-xl mb-6"
              />
              <p className="reveal text-[#6B7280] leading-relaxed mb-4">
                Tôi là một SEO Specialist với hơn 1 năm kinh nghiệm trong việc xây dựng và tối ưu 
                chiến lược SEO cho các doanh nghiệp thuộc lĩnh vực: May Mặc, Cơ Khí, Dịch Vụ, Giải Trí.
              </p>
              <p className="reveal text-[#6B7280] leading-relaxed">
                Tôi tập trung vào: Technical SEO vững chắc, Content Strategy dựa trên Search Intent, 
                Phân tích dữ liệu để đưa ra quyết định tối ưu, SEO gắn liền với mục tiêu kinh doanh.
              </p>
            </div>

            {/* Right - Experience */}
            <div>
              <h3 className="reveal text-xl font-semibold text-[#0B1A2F] mb-6">Hành trình nghề nghiệp</h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div 
                    key={index}
                    className="reveal flex gap-4 bg-white rounded-xl p-5 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#D8A7B1]/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-[#D8A7B1]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-[#D8A7B1]">{exp.year}</span>
                        <span className="text-xs text-[#6B7280]">|</span>
                        <span className="text-xs text-[#6B7280]">{exp.company}</span>
                      </div>
                      <h4 className="font-semibold text-[#0B1A2F] mb-1">{exp.role}</h4>
                      <p className="text-sm text-[#6B7280]">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
