import { Link } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md border-b-2 border-pink-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Heart className="h-8 w-8 text-pink-500" fill="currentColor" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-tight">Female Delusion</span>
              <span className="text-sm text-pink-600 leading-tight">Calculator</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              Calculator
            </Link>
            <Link to="/dating-red-flags-checklist" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              Red Flags
            </Link>
            <Link to="/texting-rules-dating" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              Texting Rules
            </Link>
            <Link to="/what-men-find-attractive" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              Attraction
            </Link>
            <Link to="/dating-age-calculator" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              Age Calculator
            </Link>
            <Link to="/dating-success-statistics" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              Statistics
            </Link>
            
            {/* Dropdown for More Pages */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-pink-600 font-medium transition-colors flex items-center">
                More
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <Link to="/dating-standards" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                  Dating Standards
                </Link>
                <Link to="/relationship-compatibility" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                  Compatibility Test
                </Link>
                <Link to="/dating-tips" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                  Dating Tips
                </Link>
                <Link to="/male-standards" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                  Male Standards
                </Link>
                <Link to="/relationship-advice" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                  Relationship Advice
                </Link>
                <Link to="/dating-profile-tips" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                  Profile Tips
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 hover:text-pink-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 pb-4">
            <nav className="pt-4 space-y-2">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculator
              </Link>
              <Link
                to="/dating-red-flags-checklist"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Red Flags Checklist
              </Link>
              <Link
                to="/texting-rules-dating"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Texting Rules
              </Link>
              <Link
                to="/what-men-find-attractive"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                What Men Find Attractive
              </Link>
              <Link
                to="/dating-age-calculator"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Dating Age Calculator
              </Link>
              <Link
                to="/dating-success-statistics"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Dating Success Statistics
              </Link>
              <Link
                to="/dating-standards"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Dating Standards
              </Link>
              <Link
                to="/relationship-compatibility"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Compatibility Test
              </Link>
              <Link
                to="/dating-tips"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Dating Tips
              </Link>
              <Link
                to="/male-standards"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Male Standards
              </Link>
              <Link
                to="/relationship-advice"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Relationship Advice
              </Link>
              <Link
                to="/dating-profile-tips"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile Tips
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;