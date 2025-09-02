import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import MonasteryCard from '@/components/MonasteryCard';
import { monasteries, regions } from '@/data/monasteries';

const Monasteries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  const filteredMonasteries = useMemo(() => {
    return monasteries.filter((monastery) => {
      const matchesSearch = monastery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          monastery.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = selectedRegion === 'All Regions' || monastery.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchTerm, selectedRegion]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in-up">
            Sacred Monasteries of Sikkim
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Discover the spiritual heart of the Himalayas through these ancient centers of Buddhist wisdom and culture
          </p>
          <div className="flex justify-center space-x-2 mt-6 floating-element">
            <div className="prayer-flag red"></div>
            <div className="prayer-flag blue"></div>
            <div className="prayer-flag yellow"></div>
            <div className="prayer-flag green"></div>
            <div className="prayer-flag white"></div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="monastery-card p-6 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search monasteries by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground text-center">
              Found {filteredMonasteries.length} monasteries
            </div>
          </div>
        </div>

        {/* Monasteries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMonasteries.map((monastery, index) => (
            <div
              key={monastery.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MonasteryCard monastery={monastery} />
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredMonasteries.length === 0 && (
          <div className="text-center py-16">
            <div className="monastery-card p-8 max-w-md mx-auto">
              <h3 className="text-2xl font-semibold text-primary mb-4">No monasteries found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filter criteria
              </p>
              <Button onClick={() => { setSearchTerm(''); setSelectedRegion('All Regions'); }}>
                Clear Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Monasteries;