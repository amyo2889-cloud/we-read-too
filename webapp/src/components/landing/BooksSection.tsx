import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const books = [
  {
    title: "The City is Loud",
    description: "Explore everyday sounds while building confidence with high-frequency words.",
    price: "$15.00",
    image: `${import.meta.env.BASE_URL}book-city-is-loud.jpg`,
    color: "from-amber-100 to-yellow-50",
    paymentLink: "https://square.link/u/J1U4lms0?src=sheet",
  },
  {
    title: "The Park is Big",
    description: "Practice sight words through play, movement, and familiar outdoor experiences.",
    price: "$15.00",
    image: `${import.meta.env.BASE_URL}book-park-is-big.jpg`,
    color: "from-sky-100 to-blue-50",
    paymentLink: "https://square.link/u/ihqX9gIf?src=sheet",
  },
  {
    title: "The Kitchen is Fun",
    description: "Learn through everyday routines with engaging, repeatable language.",
    price: "$15.00",
    image: `${import.meta.env.BASE_URL}book-kitchen-is-fun.jpg`,
    color: "from-emerald-100 to-green-50",
    paymentLink: "https://square.link/u/cxXqWUcJ?src=sheet",
  },
];

const BooksSection = () => {
  return (
    <section id="books" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-fraunces font-bold text-foreground">
            The We Read Too™ Series
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Simple. Engaging. Designed to build confident readers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {books.map((book, i) => (
            <div
              key={book.title}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${book.color} relative overflow-hidden flex items-center justify-center`}>
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-foreground text-sm font-bold px-3 py-1 rounded-full">
                  {book.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-fraunces font-bold text-foreground mb-2">
                  {book.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {book.description}
                </p>
                <Button className="w-full rounded-full gap-2 group/btn" asChild>
                  <a href={book.paymentLink} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                    Buy Now
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
