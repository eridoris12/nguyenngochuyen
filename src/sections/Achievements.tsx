import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Search, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;

    if (!section || !header || !cards) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(header.children,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Cards animation
      const cardElements = cards.querySelectorAll('.achievement-card');
      gsap.fromTo(cardElements,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cards,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const achievements = [
    {
      icon: TrendingUp,
      value: '0 → 20,000',
      label: 'Monthly organic visits in 4 months',
      highlight: 'Traffic Growth'
    },
    {
      icon: Search,
      value: '300+',
      label: 'Keywords ranked in Top 10',
      highlight: 'Keyword Rankings'
    },
    {
      icon: Rocket,
      value: '30,000',
      label: 'Monthly visits achieved in 3 months (from zero)',
      highlight: 'Rapid Growth'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="achievements" 
      className="relative w-full py-20 lg:py-28 bg-[#F4F6F8] z-[70]"
    >
      {/* Dot Pattern */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[40%] dot-pattern opacity-[0.12]"
      />

      <div className="relative px-6 lg:px-[8vw]">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <p className="label-small mb-4">ACHIEVEMENTS</p>
          <h2 
            className="text-[clamp(32px,3.6vw,52px)] font-bold text-[#0B1A2F]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Results That Matter
          </h2>
        </div>

        {/* Achievement Cards */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="achievement-card bg-white rounded-[10px] p-6 lg:p-8 card-shadow text-center hover:shadow-xl transition-shadow"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-[#D8A7B1]/20 flex items-center justify-center mx-auto mb-5">
                <achievement.icon className="w-7 h-7 text-[#D8A7B1]" />
              </div>

              {/* Highlight Label */}
              <p className="text-xs font-medium text-[#D8A7B1] uppercase tracking-wider mb-3">
                {achievement.highlight}
              </p>

              {/* Value */}
              <p 
                className="text-[clamp(32px,4vw,48px)] font-bold text-[#0B1A2F] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {achievement.value}
              </p>

              {/* Description */}
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {achievement.label}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 lg:gap-10">
          {[
            { value: '1,000+', label: 'Daily Clicks' },
            { value: '20+', label: 'High-Volume Keywords in Top 10' },
            { value: '10+', label: 'Projects Managed' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl lg:text-3xl font-bold text-[#0B1A2F]">{stat.value}</p>
              <p className="text-sm text-[#6B7280]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
