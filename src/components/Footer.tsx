import { Mountain, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8" />
              <span className="font-bold text-xl">Sikkim Monasteries</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Discover the sacred heritage and spiritual wisdom of Himalayan Buddhist monasteries. 
              Explore ancient traditions, breathtaking architecture, and cultural treasures of Sikkim.
            </p>
            <div className="flex space-x-2">
              <div className="prayer-flag red"></div>
              <div className="prayer-flag blue"></div>
              <div className="prayer-flag yellow"></div>
              <div className="prayer-flag green"></div>
              <div className="prayer-flag white"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/monasteries" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  All Monasteries
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Cultural Events
                </Link>
              </li>
              <li>
                <Link to="/planner" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Trip Planner
                </Link>
              </li>
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Regions</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>East Sikkim</li>
              <li>West Sikkim</li>
              <li>North Sikkim</li>
              <li>South Sikkim</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 fill-current text-red-400" /> to preserve Himalayan heritage
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2">
            © 2024 Sikkim Monastery Explorer. Cultural preservation through digital exploration.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;