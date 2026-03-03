import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.testimonial-card'),
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

  const testimonials = [
    {
      quote: "Huyen đã thay đổi traffic của chúng tôi trong 90 ngày—lộ trình rõ ràng, thực thi nhanh chóng, tác động doanh thu thực sự.",
      author: "Marketing Lead",
      company: "Entertainment Brand"
    },
    {
      quote: "Cô ấy kết nối technical SEO và content tốt hơn bất kỳ ai tôi từng làm việc. Rất đáng tin cậy!",
      author: "Head of Growth",
      company: "Ecommerce Studio"
    },
    {
      quote: "Đáng tin cậy, dựa trên dữ liệu, và luôn tập trung vào kết quả kinh doanh. Một chuyên gia thực thụ.",
      author: "Founder",
      company: "B2B Services Firm"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="w-full py-20 lg:py-28 bg-white"
    >
      <div className="px-6 lg:px-[8vw]">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-[#D8A7B1] mb-3">Đánh Giá</p>
          <h2 
            className="text-3xl lg:text-4xl font-bold text-[#0B1A2F]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Khách Hàng Nói Gì
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card bg-[#F4F6F8] rounded-xl p-6 relative"
            >
              <Quote className="w-8 h-8 text-[#D8A7B1]/30 mb-4" />
              
              <p className="text-[#0B1A2F] leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-[#E5E7EB] pt-4">
                <p className="font-semibold text-[#0B1A2F]">{testimonial.author}</p>
                <p className="text-sm text-[#6B7280]">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
