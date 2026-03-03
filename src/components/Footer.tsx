const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 bg-[#0B1A2F] border-t border-white/10">
      <div className="px-6 lg:px-[8vw] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm font-medium">NNH</p>
        <p className="text-white/50 text-sm">
          © {currentYear} Nguyen Ngoc Huyen
        </p>
        <p className="text-white/50 text-sm">
          SEO Specialist
        </p>
      </div>
    </footer>
  );
};

export default Footer;
