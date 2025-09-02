import { Link } from 'react-router-dom';
import { Mountain, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-monastery.jpg';

const Home = () => {
  const features = [
    {
      icon: Mountain,
      title: "Sacred Monasteries",
      description: "Discover ancient Buddhist monasteries nestled in the Himalayas"
    },
    {
      icon: MapPin,
      title: "Interactive Maps", 
      description: "Find exact locations and plan your spiritual journey"
    },
    {
      icon: Calendar,
      title: "Cultural Events",
      description: "Experience authentic festivals and ceremonies"
    },
    {
      icon: Users,
      title: "Trip Planning",
      description: "Create personalized monastery exploration routes"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Sikkim Monastery
            <span className="block text-secondary">Explorer</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in-up">
            Journey through sacred Himalayan monasteries and immerse yourself in centuries of Buddhist wisdom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Link to="/monasteries">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Explore Monasteries
              </Button>
            </Link>
            <Link to="/planner">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Plan Your Journey
              </Button>
            </Link>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8 floating-element">
            <div className="prayer-flag red"></div>
            <div className="prayer-flag blue"></div>
            <div className="prayer-flag yellow"></div>
            <div className="prayer-flag green"></div>
            <div className="prayer-flag white"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Discover Sikkim's Sacred Heritage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the rich Buddhist culture and spiritual traditions preserved in Sikkim's ancient monasteries, 
              each with its unique history and breathtaking mountain setting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="monastery-card p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-6">
                  <feature.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Sikkim Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                The Land of Mystical Monasteries
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Sikkim, nestled in the Eastern Himalayas, is home to over 200 monasteries that serve as 
                guardians of Tibetan Buddhist culture. These sacred spaces offer visitors a glimpse into 
                ancient wisdom, architectural marvels, and spiritual practices that have been preserved 
                for centuries.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From the grand Rumtek Monastery to the ancient Pemayangtse, each monastery tells a unique 
                story of faith, artistry, and cultural preservation against the backdrop of snow-capped peaks.
              </p>
              <Link to="/monasteries">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Your Journey
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="monastery-card p-8 bg-gradient-to-br from-secondary/10 to-primary/10">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">200+</div>
                  <p className="text-lg text-muted-foreground mb-4">Monasteries in Sikkim</p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-secondary">6</div>
                      <p className="text-sm text-muted-foreground">Major Monasteries</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">4</div>
                      <p className="text-sm text-muted-foreground">Buddhist Sects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;