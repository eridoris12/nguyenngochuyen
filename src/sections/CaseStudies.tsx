import caseEcommerce from '../assets/images/case-ecommerce.jpg'
import caseEntertainment from '../assets/images/case-entertainment.jpg'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Search, DollarSign } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.case-card'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
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

  const caseStudies = [
    {
      title: 'Giải Trí',
      image: caseEntertainment,
      goal: 'Tăng trưởng traffic và nâng cao thứ hạng từ khóa có search volume cao.',
      problem: 'Site mới chưa có tín hiệu, cạnh tranh cao trên thị trường, giao diện chưa tối ưu UX/UI.',
      solution: 'Tăng tốc độ tải trang, tối ưu Sitemap & Schema Article + FAQ, lên plan từ khóa theo từng giai đoạn, tạo Author & Social Entity.',
      results: [
        { icon: TrendingUp, value: '+100%', label: 'Organic Traffic' },
        { icon: Search, value: '+200%', label: 'Keywords Top 10' },
        { icon: DollarSign, value: '+70%', label: 'Doanh thu SEO' }
      ]
    },
    {
      title: 'Ecommerce',
      image: caseEcommerce,
      goal: 'Tăng trưởng organic revenue cho cửa hàng đa sản phẩm.',
      problem: 'Nội dung mỏng, canonical, trang danh mục chậm.',
      solution: 'Mở rộng nội dung danh mục, sửa navigation, thêm product schema & review markup.',
      results: [
        { icon: TrendingUp, value: '+180%', label: 'Organic Traffic' },
        { icon: DollarSign, value: '+90%', label: 'Giao dịch' },
        { icon: DollarSign, value: '+120%', label: 'Doanh thu SEO' }
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="case-studies" 
      className="w-full py-20 lg:py-28 bg-[#E6F0FA]"
    >
      <div className="px-6 lg:px-[8vw]">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-[#7AA7D9] mb-3">Case Studies</p>
          <h2 
            className="text-3xl lg:text-4xl font-bold text-[#0B1E3F]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Kết Quả Nổi Bật
          </h2>
        </div>

        {/* Case Study Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="case-card bg-white rounded-xl overflow-hidden shadow-sm"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img 
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 
                  className="text-2xl font-bold text-[#0B1E3F] mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {study.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-sm font-medium text-[#0B1E3F]">Mục tiêu: </span>
                    <span className="text-sm text-[#6B7280]">{study.goal}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#0B1E3F]">Thách thức: </span>
                    <span className="text-sm text-[#6B7280]">{study.problem}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#0B1E3F]">Giải pháp: </span>
                    <span className="text-sm text-[#6B7280]">{study.solution}</span>
                  </div>
                </div>

                {/* Results */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-[#E6F0FA]">
                  {study.results.map((result, rIndex) => (
                    <div 
                      key={rIndex}
                      className="flex items-center gap-2 bg-[#E6F0FA] rounded-lg px-3 py-2"
                    >
                      <result.icon className="w-4 h-4 text-[#7AA7D9]" />
                      <div>
                        <p className="text-sm font-bold text-[#0B1E3F]">{result.value}</p>
                        <p className="text-xs text-[#6B7280]">{result.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
