import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    name: "Beautifully Black Children's Book Festival",
    location: "Alliance Theatre, Atlanta, GA",
    date: "March 28, 2026",
    highlight: true,
  },
  {
    name: "Community Connections Fair for Unique Learners",
    location: "",
    date: "April 18, 2026",
    highlight: false,
  },
  {
    name: "Happy Black Parent Book Festival",
    location: "",
    date: "July 25, 2026",
    highlight: false,
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-fraunces font-bold text-foreground">
            Come See Us
          </h2>
        </div>

        {/* Featured event with flyer */}
        <div className="bg-card rounded-2xl border border-primary/20 overflow-hidden shadow-lg mb-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-56 shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}festival-flyer.jpg`}
                alt="Atlanta's Beautifully Black Children's Book Festival"
                className="w-full h-56 md:h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Featured Event</span>
              <h3 className="text-xl md:text-2xl font-fraunces font-bold text-foreground mb-3">
                Beautifully Black Children's Book Festival
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Come say hello and grab signed copies of the We Read Too™ book series! Dr. Amy Salter will be a featured vendor.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  March 28, 2026
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  Alliance Theatre, Atlanta, GA
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {events.slice(1).map((event) => (
            <div
              key={event.name}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-fraunces font-bold text-foreground">
                  {event.name}
                </h3>
                {event.location ? (
                  <div className="flex items-center gap-1.5 mt-2 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location}
                  </div>
                ) : null}
              </div>
              <div className="flex items-center gap-2 text-primary font-medium text-sm shrink-0">
                <Calendar className="h-4 w-4" />
                {event.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
