import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Filter, Bell, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Calendar className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Tech Event Calendar
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover and attend the best tech workshops, webinars, hackathons, and conferences. Never miss another opportunity to grow your skills.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-3">
              Browse Events
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Admin Login
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Events Listed</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Attendees</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Cities</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive event management platform designed for the tech community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Calendar View */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Calendar View</h3>
                <p className="text-muted-foreground">
                  Visualize events in an intuitive calendar interface with easy navigation between dates.
                </p>
              </CardContent>
            </Card>

            {/* Smart Filtering */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Filter className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Filtering</h3>
                <p className="text-muted-foreground">
                  Filter events by date, type, location, or topic to find exactly what interests you.
                </p>
              </CardContent>
            </Card>

            {/* Location-Based */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Location-Based</h3>
                <p className="text-muted-foreground">
                  Find events near you or explore opportunities in other cities worldwide.
                </p>
              </CardContent>
            </Card>

            {/* Community */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
                <p className="text-muted-foreground">
                  Connect with fellow developers, designers, and tech enthusiasts at every event.
                </p>
              </CardContent>
            </Card>

            {/* Reminders */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Bell className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Reminders</h3>
                <p className="text-muted-foreground">
                  Never miss an event with intelligent notifications and calendar integrations.
                </p>
              </CardContent>
            </Card>

            {/* Quality Events */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Events</h3>
                <p className="text-muted-foreground">
                  Curated selection of high-quality workshops, conferences, and networking events.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of developers discovering amazing tech events every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Explore Events
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 mr-2 text-primary" />
            <span className="text-lg font-semibold">Tech Event Calendar</span>
          </div>
          <p className="text-muted-foreground">
            Connecting the tech community, one event at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
