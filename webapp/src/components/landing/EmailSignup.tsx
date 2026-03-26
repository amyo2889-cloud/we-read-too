import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/api";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setError(null);

    try {
      await api.post("/api/emails", { email, name: name.trim() || undefined });
      setSubmitted(true);
      setEmail("");
      setName("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary mb-6">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-fraunces font-bold text-foreground mb-4">
          Join the DiscoveryGate Community
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Get reading tips, new releases, and resources to support your child's learning journey.
        </p>

        {submitted ? (
          <div className="bg-secondary rounded-2xl p-6 text-center">
            <p className="text-lg font-medium text-foreground">Thank you for signing up!</p>
            <p className="text-sm text-muted-foreground mt-1">We'll keep you updated.</p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                className="rounded-full h-12 px-5"
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="rounded-full h-12 px-5 flex-1"
                />
                <Button type="submit" size="lg" disabled={loading} className="rounded-full px-8 h-12">
                  {loading ? "Joining..." : "Sign Up"}
                </Button>
              </div>
            </form>
            {error !== null ? (
              <p className="text-sm text-destructive mt-3">{error}</p>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
};

export default EmailSignup;
