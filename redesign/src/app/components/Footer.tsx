export function Footer() {
  return (
    <footer className="py-12 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} — Conseil en Agile@Scale & Transformation IT
          </div>
          
          <div className="flex items-center space-x-8 text-slate-400 text-sm">
            <a href="#" className="hover:text-white transition-colors duration-200">
              LinkedIn
            </a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Confidentialité
            </a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}