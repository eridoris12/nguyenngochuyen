import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.skill-block'),
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

  const skills = {
    seo: ['Nghiên cứu từ khóa', 'Content Strategy', 'Technical SEO', 'SEO Ecommerce', 'SEO Local', 'International SEO'],
    tools: ['Ahrefs', 'Screaming Frog', 'Google Search Console', 'Google Analytics 4', 'PageSpeed Insights'],
    technical: ['HTML/CSS', 'Schema & Structured Data', 'UX/UI cơ bản', 'Automation', 'AI trong SEO']
  };

  const achievements = [
    { value: '0 → 20K', label: 'Lượt truy cập/tháng trong 4 tháng' },
    { value: '300+', label: 'Từ khóa trong Top 10' },
    { value: '30K', label: 'Lượt truy cập/tháng sau 3 tháng' },
    { value: '1K+', label: 'Lượt nhấp mỗi ngày' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="w-full py-20 lg:py-28 bg-[#F4F6F8]"
    >
      <div className="px-6 lg:px-[8vw]">
        <div className="max-w-6xl mx-auto">
          {/* Skills Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <p className="text-xs font-medium tracking-widest uppercase text-[#D8A7B1] mb-3">Kỹ Năng & Công Cụ</p>
              <h2 
                className="text-3xl lg:text-4xl font-bold text-[#0B1A2F]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Năng Lực
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* SEO Skills */}
              <div className="skill-block bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0B1A2F] mb-4">SEO Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.seo.map((skill, i) => (
                    <span key={i} className="text-sm px-3 py-1.5 rounded-lg bg-[#F4F6F8] text-[#0B1A2F]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="skill-block bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0B1A2F] mb-4">Tools thành thạo</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, i) => (
                    <span key={i} className="text-sm px-3 py-1.5 rounded-lg bg-[#F4F6F8] text-[#0B1A2F]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical */}
              <div className="skill-block bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0B1A2F] mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((tech, i) => (
                    <span key={i} className="text-sm px-3 py-1.5 rounded-lg bg-[#F4F6F8] text-[#0B1A2F]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <div className="text-center mb-10">
              <p className="text-xs font-medium tracking-widest uppercase text-[#D8A7B1] mb-3">Thành Tựu</p>
              <h2 
                className="text-3xl lg:text-4xl font-bold text-[#0B1A2F]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Kết Quả Đạt Được
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  className="skill-block bg-white rounded-xl p-6 text-center shadow-sm"
                >
                  <p 
                    className="text-2xl lg:text-3xl font-bold text-[#0B1A2F] mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.value}
                  </p>
                  <p className="text-sm text-[#6B7280]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
