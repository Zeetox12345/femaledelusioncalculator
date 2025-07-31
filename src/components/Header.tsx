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
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              Calculator
            </Link>
            <Link to="/modern-dating-guide" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              Dating Guide
            </Link>
            <Link to="/healthy-relationships-guide" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              Relationships
            </Link>
            <Link to="/dating-confidence-tips" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              Confidence
            </Link>
            <Link to="/love-languages-test" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              Love Languages
            </Link>
            
            {/* Dropdown for More Pages */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-pink-600 font-medium transition-colors flex items-center">
                More
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50">
                <div className="py-2">
                  <div className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">Psychology & Science</div>
                  <Link to="/dating-psychology" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                    Dating Psychology
                  </Link>
                  <Link to="/attachment-styles-test" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                    Attachment Styles
                  </Link>
                  <Link to="/relationship-communication-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                    Communication Guide
                  </Link>
                  
                  <div className="border-t border-gray-100 my-1"></div>
                  <div className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">Goals & Growth</div>
                  <Link to="/relationship-goals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                    Relationship Goals
                  </Link>
                  <Link to="/dating-green-flags" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                    Green Flags
                  </Link>
                  <Link to="/dating-red-flags-checklist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                    Red Flags Checklist
                  </Link>
                  <Link to="/first-date-ideas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                    First Date Ideas
                  </Link>
                  
                  <div className="border-t border-gray-100 my-1"></div>
                  <div className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">Tools & Tests</div>
                  <Link to="/dating-age-calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                    Dating Age Calculator
                  </Link>
                  <Link to="/relationship-compatibility" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                    Compatibility Test
                  </Link>
                  <Link to="/dating-profile-tips" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                    Profile Tips
                  </Link>
                  
                  <div className="border-t border-gray-100 my-1"></div>
                  <div className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">Support & Recovery</div>
                  <Link to="/breakup-recovery-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                    Breakup Recovery
                  </Link>
                  <Link to="/long-distance-relationship-tips" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                    Long Distance Tips
                  </Link>
                  <Link to="/texting-rules-dating" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                    Texting Rules
                  </Link>
                </div>
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
            <nav className="pt-4 space-y-1">
              {/* Essential Pages */}
              <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">Essential</div>
              <Link
                to="/"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Female Delusion Calculator
              </Link>
              <Link
                to="/modern-dating-guide"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Modern Dating Guide 2024
              </Link>
              <Link
                to="/healthy-relationships-guide"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Healthy Relationships Guide
              </Link>
              <Link
                to="/dating-confidence-tips"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Dating Confidence Tips
              </Link>

              {/* Psychology & Science */}
              <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wide mt-4">Psychology & Science</div>
              <Link
                to="/dating-psychology"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Dating Psychology
              </Link>
              <Link
                to="/love-languages-test"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Love Languages Test
              </Link>
              <Link
                to="/attachment-styles-test"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Attachment Styles Test
              </Link>
              <Link
                to="/relationship-communication-guide"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Communication Guide
              </Link>

              {/* Goals & Growth */}
              <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wide mt-4">Goals & Growth</div>
              <Link
                to="/relationship-goals"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Relationship Goals
              </Link>
              <Link
                to="/dating-green-flags"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Dating Green Flags
              </Link>
              <Link
                to="/dating-red-flags-checklist"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Red Flags Checklist
              </Link>
              <Link
                to="/first-date-ideas"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                First Date Ideas
              </Link>

              {/* More Resources */}
              <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wide mt-4">More Resources</div>
              <Link
                to="/what-men-find-attractive"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                What Men Find Attractive
              </Link>
              <Link
                to="/dating-standards"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Dating Standards
              </Link>
              <Link
                to="/male-standards"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Male Standards
              </Link>
              <Link
                to="/relationship-advice"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Relationship Advice
              </Link>
              <Link
                to="/dating-profile-tips"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile Tips
              </Link>
              <Link
                to="/dating-success-statistics"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Success Statistics
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;