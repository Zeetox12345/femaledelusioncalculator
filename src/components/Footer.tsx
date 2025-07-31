import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <Heart className="h-8 w-8 text-pink-400" fill="currentColor" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">Female Delusion</span>
                <span className="text-sm text-pink-400 leading-tight">Calculator</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Discover realistic dating standards and improve your relationship success with our comprehensive tools and guides.
            </p>
          </div>

          {/* Essential Guides */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Essential Guides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/modern-dating-guide" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Modern Dating Guide 2024
                </Link>
              </li>
              <li>
                <Link to="/healthy-relationships-guide" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Healthy Relationships Guide
                </Link>
              </li>
              <li>
                <Link to="/dating-confidence-tips" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Dating Confidence Tips
                </Link>
              </li>
              <li>
                <Link to="/relationship-communication-guide" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Communication Guide
                </Link>
              </li>
              <li>
                <Link to="/dating-psychology" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Dating Psychology
                </Link>
              </li>
            </ul>
          </div>

          {/* Tests & Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Tests & Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Female Delusion Calculator
                </Link>
              </li>
              <li>
                <Link to="/love-languages-test" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Love Languages Test
                </Link>
              </li>
              <li>
                <Link to="/attachment-styles-test" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Attachment Styles Test
                </Link>
              </li>
              <li>
                <Link to="/dating-age-calculator" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Dating Age Calculator
                </Link>
              </li>
              <li>
                <Link to="/relationship-compatibility" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Relationship Compatibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Goals & Growth */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Goals & Growth</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/relationship-goals" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Relationship Goals
                </Link>
              </li>
              <li>
                <Link to="/dating-green-flags" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Dating Green Flags
                </Link>
              </li>
              <li>
                <Link to="/dating-red-flags-checklist" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Red Flags Checklist
                </Link>
              </li>
              <li>
                <Link to="/first-date-ideas" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  First Date Ideas
                </Link>
              </li>
              <li>
                <Link to="/dating-profile-tips" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Dating Profile Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Recovery */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Support & Recovery</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/breakup-recovery-guide" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Breakup Recovery Guide
                </Link>
              </li>
              <li>
                <Link to="/long-distance-relationship-tips" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Long Distance Tips
                </Link>
              </li>
              <li>
                <Link to="/texting-rules-dating" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Texting Rules
                </Link>
              </li>
              <li>
                <Link to="/what-men-find-attractive" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  What Men Find Attractive
                </Link>
              </li>
              <li>
                <Link to="/dating-success-statistics" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Dating Statistics
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Female Delusion Calculator. All rights reserved.
            </div>

          </div>
        </div>

        {/* SEO Rich Content Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-3 text-pink-400">About Female Delusion Calculator</h4>
            <p className="text-sm text-gray-400 max-w-4xl mx-auto leading-relaxed">
              The Female Delusion Calculator helps women understand realistic dating expectations in today's market. 
              Our comprehensive platform includes our modern dating guide for 2024, healthy relationship foundations, dating confidence tips, 
              relationship communication strategies, and dating psychology insights. Whether you're exploring your dating standards, 
              setting relationship goals, building dating confidence, learning communication skills, or understanding the psychology of attraction, 
              our evidence-based tools and guides help improve your relationship success rate in the modern dating world.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-gray-500">
              <span>Modern Dating 2024</span> • <span>Dating Psychology</span> • <span>Relationship Goals</span> • 
              <span>Dating Confidence</span> • <span>Communication Skills</span> • <span>Healthy Relationships</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;