import contactPortrait from '../assets/images/contact-portrait.jpg'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Download } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.contact-item'),
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

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'nnhuyenn12@gmail.com', href: 'mailto:nnhuyenn12@gmail.com' },
    { icon: Phone, label: 'Số điện thoại', value: '0392093286', href: 'tel:0392093286' },
    { icon: MapPin, label: 'Vị trí', value: 'Việt Nam', href: null },
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="w-full py-20 lg:py-28 bg-[#0B1A2F]"
    >
      <div className="px-6 lg:px-[8vw]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="contact-item text-xs font-medium tracking-widest uppercase text-[#D8A7B1] mb-4">
                Liên Hệ
              </p>
              
              <h2 
                className="contact-item text-3xl lg:text-4xl font-bold text-white leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Hãy cùng xây dựng chương tăng trưởng tiếp theo của bạn.
              </h2>

              <p className="contact-item text-white/70 mb-8">
                Chia sẻ mục tiêu của bạn. Tôi sẽ phản hồi trong 1-2 ngày làm việc.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-[#D8A7B1]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-white hover:text-[#D8A7B1] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Education & Experience */}
              <div className="contact-item flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Kinh nghiệm</p>
                  <p className="text-white font-medium">+1 Năm</p>
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Học vấn</p>
                  <p className="text-white font-medium">Cử Nhân - FPT Polytechnic</p>
                </div>
              </div>

              {/* CTA Button */}
              <button className="contact-item inline-flex items-center gap-2 bg-[#D8A7B1] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#c996a3] transition-colors">
                <Download className="w-4 h-4" />
                Download CV PDF
              </button>
            </div>

            {/* Right Image */}
            <div className="contact-item hidden lg:block">
              <img 
                src={contactPortrait}
                alt="Contact"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
