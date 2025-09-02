import { Link } from 'react-router-dom';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { Monastery } from '@/data/monasteries';
import { Button } from '@/components/ui/button';

interface MonasteryCardProps {
  monastery: Monastery;
}

const MonasteryCard = ({ monastery }: MonasteryCardProps) => {
  return (
    <div className="monastery-card animate-fade-in-up">
      <div className="relative h-48 overflow-hidden">
        <img
          src={monastery.image}
          alt={monastery.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="monastery-badge">
            {monastery.region}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="flex space-x-1">
            <div className="prayer-flag red"></div>
            <div className="prayer-flag blue"></div>
            <div className="prayer-flag yellow"></div>
            <div className="prayer-flag green"></div>
            <div className="prayer-flag white"></div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{monastery.name}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{monastery.description}</p>
        
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            Founded in {monastery.founded}
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            {monastery.visitingHours}
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            {monastery.region}
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {monastery.significance.slice(0, 2).map((sig, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary-foreground"
            >
              {sig}
            </span>
          ))}
        </div>

        <Link to={`/monastery/${monastery.id}`}>
          <Button className="w-full" variant="default">
            Explore Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MonasteryCard;