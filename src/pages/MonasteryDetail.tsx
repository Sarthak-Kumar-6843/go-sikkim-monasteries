import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Calendar, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { monasteries } from '@/data/monasteries';
import { useEffect, useState } from 'react';

const MonasteryDetail = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  
  const monastery = monasteries.find(m => m.id === id);

  useEffect(() => {
    // Check if monastery is in user's favorites
    const favorites = JSON.parse(localStorage.getItem('monastery-favorites') || '[]');
    setIsLiked(favorites.includes(id));
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('monastery-favorites') || '[]');
    let updatedFavorites;
    
    if (isLiked) {
      updatedFavorites = favorites.filter((favId: string) => favId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }
    
    localStorage.setItem('monastery-favorites', JSON.stringify(updatedFavorites));
    setIsLiked(!isLiked);
  };

  if (!monastery) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Monastery Not Found</h1>
          <Link to="/monasteries">
            <Button>Back to Monasteries</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={monastery.image}
          alt={monastery.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{monastery.name}</h1>
              <div className="flex items-center text-white/90">
                <MapPin className="h-5 w-5 mr-2" />
                {monastery.region}
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={toggleFavorite}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-current text-red-500' : ''}`} />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/monasteries">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Monasteries
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="monastery-card p-6 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">About</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {monastery.description}
              </p>
            </div>

            {/* History */}
            <div className="monastery-card p-6 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">History & Heritage</h2>
              <p className="text-muted-foreground leading-relaxed">
                {monastery.history}
              </p>
            </div>

            {/* Significance */}
            <div className="monastery-card p-6 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Cultural Significance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {monastery.significance.map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-muted/30 rounded-lg">
                    <Star className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="monastery-card p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Nearby Attractions</h2>
              <div className="flex flex-wrap gap-2">
                {monastery.nearbyAttractions.map((attraction, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-2 px-3">
                    {attraction}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="monastery-card p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Visit Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <div className="font-medium">Founded</div>
                    <div className="text-muted-foreground">{monastery.founded}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <div className="font-medium">Visiting Hours</div>
                    <div className="text-muted-foreground">{monastery.visitingHours}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">{monastery.region}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prayer Flags */}
            <div className="monastery-card p-6 text-center">
              <h3 className="text-lg font-medium text-primary mb-4">Traditional Prayer Flags</h3>
              <div className="flex justify-center space-x-2 mb-4">
                <div className="prayer-flag red"></div>
                <div className="prayer-flag blue"></div>
                <div className="prayer-flag yellow"></div>
                <div className="prayer-flag green"></div>
                <div className="prayer-flag white"></div>
              </div>
              <p className="text-sm text-muted-foreground">
                Five colors representing the five elements
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="monastery-card p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Location Map</h3>
              <div className="bg-muted/30 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive map coming soon</p>
                  <p className="text-sm">Lat: {monastery.location.lat}</p>
                  <p className="text-sm">Lng: {monastery.location.lng}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link to="/planner" className="block">
                <Button className="w-full" size="lg">
                  Add to Trip Plan
                </Button>
              </Link>
              <Button variant="outline" className="w-full" size="lg" onClick={toggleFavorite}>
                <Heart className={`h-5 w-5 mr-2 ${isLiked ? 'fill-current text-red-500' : ''}`} />
                {isLiked ? 'Remove from Favorites' : 'Add to Favorites'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonasteryDetail;