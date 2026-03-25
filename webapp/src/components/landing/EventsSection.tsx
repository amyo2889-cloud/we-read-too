import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    name: "Beautifully Black Children's Book Festival",
    location: "Atlanta, GA",
    date: "March 28, 2026",
  },
  {
    name: "Community Connections Fair for Unique Learners",
    location: "",
    date: "April 18, 2026",
  },
  {
    name: "Happy Black Parent Book Festival",
    location: "",
    date: "July 25, 2026",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-fraunces font-bold text-foreground">
            Come See Us
          </h2>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
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
