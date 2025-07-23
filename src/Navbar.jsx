import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoSrc from './assets/image.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  // Close menu when clicking outside (using ref)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { id: 'home', label: 'HOME', to: '/' },
    {
      id: 'about',
      label: 'ABOUT US',
      to: '/about',
      submenu: [
        { label: 'About Crossword', hash: 'about-crossword' },
        { label: 'The Crossword Way', hash: 'crossword-way' },
        { label: 'Our Mission', hash: 'mission' },
        { label: 'Crossword Cares', hash: 'crossword-cares' },
        { label: 'Diversity, Equity, and Inclusion', hash: 'dei' },
      ]
    },
    {
      id: 'industry',
      label: 'INDUSTRY',
      to: '#',
      submenu: [
        { 
          label: 'IT Services', 
          to: '/industry/it-services',
          submenu: [
            { label: 'Enterprise Transformation and Automation', to: '/industry/it-services/enterprise-transformation' },
          ]
        },
        { label: 'Pharmaceutical', to: '/industry/pharmaceutical' },
        { label: 'Life Sciences', to: '/industry/life-sciences' },
        { label: 'Manufacturing', to: '/industry/manufacturing' },
        { 
          label: 'Consulting', 
          to: '/industry/consulting',
          submenu: [
            { label: 'Project and Program Management', to: '/industry/consulting/project-program-management' },
            { label: 'Managed Service Provider', to: '/industry/consulting/managed-service-provider' }
          ]
        }
      ]
    },
    {
      id: 'recruiting',
      label: 'RECRUITING SERVICES',
      to: '#',
      submenu: [
        { label: 'Contingent Staff Augmentation', to: '#' },
        {
          label: 'Talent Advisory',
          to: '#',
          submenu: [
            { label: 'Contractual Hiring', to: '#' },
            { label: 'Permanent Hiring', to: '#' }
          ]
        },
        { label: 'On-demand RPO', to: '#' }
      ]
    },
    { id: 'contact', label: 'CONTACT', to: '/contact' }
  ];

  const toggleSubmenu = (itemId) => {
    setActiveSubmenu(activeSubmenu === itemId ? null : itemId);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 shadow-md"
        style={{ backgroundColor: '#E4E0E1' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Navbar: only visible on small screens */}
          <div className="flex w-full items-center justify-between sm:hidden h-16" ref={mobileMenuRef}>
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <img 
                  src={logoSrc} 
                  alt="Logo" 
                  className="h-10 w-10 sm:h-14 sm:w-14 rounded-full border-2 border-brown-DEFAULT shadow-lg object-cover transition-transform duration-300 hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-sand-dark to-brown-light rounded-xl blur-lg opacity-20"></div>
              </div>
            </Link>
            <span className="font-black text-lg text-darkbrown bg-clip-text">CROSSWORD</span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
          {/* Desktop Navbar: only visible on sm and up */}
          <div className="hidden sm:flex justify-between items-center h-16 lg:h-20" ref={mobileMenuRef}>
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <img 
                  src={logoSrc} 
                  alt="Logo" 
                  className="h-14 w-14 rounded-full border-2" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-sand-dark to-brown-light rounded-xl blur-lg opacity-20"></div>
              </div>
              <div className="hidden sm:block">
                <span className="font-black text-xl lg:text-2xl text-darkbrown bg-clip-text">
                  CROSSWORD
                </span>
                <div className="text-xs lg:text-sm text-gray-600 font-medium -mt-1">
                  STAFFING SOLUTIONS
                </div>
              </div>
            </Link>
            {/* Desktop Navigation */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => {
                    if (window.innerWidth >= 640 && item.submenu) setActiveSubmenu(item.id);
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth >= 640 && item.submenu) setActiveSubmenu(null);
                  }}
                >
                  {item.submenu ? (
                    <button
                      type="button"
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 ${
                        location.pathname === item.to || activeSubmenu === item.id
                          ? 'text-brown-DEFAULT bg-sand-light shadow-sm'
                          : 'text-gray-700 hover:text-brown-DEFAULT hover:bg-sand-light'
                      }`}
                      tabIndex={0}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeSubmenu === item.id ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={item.to}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 ${
                        location.pathname === item.to
                          ? 'text-brown-DEFAULT bg-sand-light shadow-sm'
                          : 'text-gray-700 hover:text-brown-DEFAULT hover:bg-sand-light'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                  {/* Desktop Dropdown */}
                  {item.submenu && (
                    <div className={`absolute top-full left-0 mt-1 w-72 bg-sand-light rounded-xl shadow-xl border border-gray-200 py-2 transition-all duration-300 ${
                      activeSubmenu === item.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      {item.submenu.map((subItem, idx) => (
                        <div key={idx}>
                          {subItem.submenu ? (
                            <div className="group/nested relative">
                              <button
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 rounded-lg transition-colors duration-200 flex items-center justify-between hover:bg-tan hover:text-brown-DEFAULT focus:bg-tan focus:text-brown-DEFAULT"
                                onClick={() => {
                                  // Handle click for nested submenu parent
                                  window.location.href = subItem.to;
                                }}
                              >
                                {subItem.label}
                                {subItem.submenu && <ChevronDown className="w-3 h-3 ml-2 -rotate-90" />}
                              </button>
                              {/* Nested submenu */}
                              {subItem.submenu && (
                                <div className="absolute left-full top-0 ml-1 w-64 bg-sand-light rounded-xl shadow-xl border border-gray-200 py-2 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200">
                                  {subItem.submenu.map((nestedItem, nestedIdx) => (
                                    <a
                                      key={nestedIdx}
                                      href={nestedItem.to}
                                      className="w-full text-left px-4 py-2 text-sm text-gray-700 rounded-lg transition-colors duration-200 block hover:bg-tan hover:text-brown-DEFAULT focus:bg-tan focus:text-brown-DEFAULT"
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setActiveSubmenu(null);
                                      }}
                                    >
                                      {nestedItem.label}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <a
                              href={item.id === 'about' ? `/about#${subItem.hash}` : subItem.to}
                              className="w-full text-left px-4 py-2 text-sm text-gray-700 rounded-lg transition-colors duration-200 block hover:bg-tan hover:text-brown-DEFAULT focus:bg-tan focus:text-brown-DEFAULT"
                              onClick={e => {
                                setIsMenuOpen(false);
                                setActiveSubmenu(null);
                                if (item.id === 'about') {
                                  if (location.pathname === '/about') {
                                    e.preventDefault();
                                    const el = document.getElementById(subItem.hash);
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                  }
                                }
                              }}
                            >
                              {subItem.label}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* CTA Button - Desktop */}
            <div className="flex items-center gap-4">
              <button className="bg-gradient-to-r from-sand-dark to-brown-light text-sand-light px-6 py-2 rounded-lg font-semibold hover:from-brown-light hover:to-sand-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Quote
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay + Drawer (Right Side) */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden justify-end">
            {/* Overlay */}
            <div className="flex-1 bg-black bg-opacity-40" onMouseDown={() => setIsMenuOpen(false)} />
            {/* Drawer - Completely solid background with proper scrolling */}
            <div
              className="h-full w-64 bg-white shadow-2xl border-l border-gray-200 transition-transform duration-300 max-w-[80vw] flex flex-col px-4 py-6 overflow-y-auto"
              style={{ backgroundColor: '#ffffff' }}
              onMouseDown={e => e.stopPropagation()}
            >
              {/* Close button at top */}
              <div className="flex justify-end mb-4 flex-shrink-0">
                <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-lg hover:bg-gray-100">
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>
              
              {/* Navigation items container */}
              <div className="flex-1 space-y-2">
                {navItems.map((item) => (
                  <div key={item.id} className="space-y-1">
                    {item.submenu ? (
                      <button
                        onClick={() => toggleSubmenu(item.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 text-left
                          ${location.pathname === item.to ? 'text-brown-DEFAULT bg-gray-100 shadow-sm' : 'text-gray-700 hover:text-brown-DEFAULT hover:bg-gray-100'}
                        `}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeSubmenu === item.id ? 'rotate-180' : ''}`} />
                      </button>
                    ) : (
                      <Link
                        to={item.to}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 text-left
                          ${location.pathname === item.to ? 'text-brown-DEFAULT bg-gray-100 shadow-sm' : 'text-gray-700 hover:text-brown-DEFAULT hover:bg-gray-100'}
                        `}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                    {/* Mobile Submenu - Fixed scrolling issue */}
                    {item.submenu && (
                      <div className={`transition-all duration-300 ${
                        activeSubmenu === item.id 
                          ? 'max-h-screen opacity-100' 
                          : 'max-h-0 opacity-0 overflow-hidden'
                      } pl-4`}>
                        <div className="space-y-1 py-2">
                          {item.submenu.map((subItem, idx) => (
                            <div key={idx} className="space-y-1">
                              {subItem.submenu ? (
                                <div>
                                  <a
                                    href={subItem.to}
                                    className="w-full text-left px-4 py-2 text-sm text-gray-600 rounded-lg transition-colors duration-200 block hover:bg-tan hover:text-brown-DEFAULT focus:bg-tan focus:text-brown-DEFAULT font-medium"
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setActiveSubmenu(null);
                                    }}
                                  >
                                    {subItem.label}
                                  </a>
                                  <div className="pl-4 space-y-1">
                                    {subItem.submenu.map((nestedItem, nestedIdx) => (
                                      <a
                                        key={nestedIdx}
                                        href={nestedItem.to}
                                        className="w-full text-left px-4 py-2 text-xs text-gray-500 rounded-lg transition-colors duration-200 block hover:bg-tan hover:text-brown-DEFAULT focus:bg-tan focus:text-brown-DEFAULT"
                                        onClick={() => {
                                          setIsMenuOpen(false);
                                          setActiveSubmenu(null);
                                        }}
                                      >
                                        • {nestedItem.label}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <a
                                  href={item.id === 'about' ? `/about#${subItem.hash}` : subItem.to}
                                  className="w-full text-left px-4 py-2 text-sm text-gray-600 rounded-lg transition-colors duration-200 block hover:bg-tan hover:text-brown-DEFAULT focus:bg-tan focus:text-brown-DEFAULT"
                                  onClick={e => {
                                    setIsMenuOpen(false);
                                    setActiveSubmenu(null);
                                    if (item.id === 'about') {
                                      if (location.pathname === '/about') {
                                        e.preventDefault();
                                        const el = document.getElementById(subItem.hash);
                                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                                      }
                                    }
                                  }}
                                >
                                  {subItem.label}
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Mobile CTA at bottom */}
              <div className="mt-auto pt-4 border-t border-gray-200 flex-shrink-0">
                <button className="w-full bg-gradient-to-r from-sand-dark to-brown-light text-sand-light px-6 py-3 rounded-lg font-semibold hover:from-brown-light hover:to-sand-dark transition-all duration-300 shadow-lg">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="h-16 lg:h-20" />
    </>
  );
}

export default Navbar;