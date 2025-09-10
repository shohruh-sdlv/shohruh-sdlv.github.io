import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in discussing any opportunities or collaborations. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-card hover:shadow-glow transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold text-foreground">Email</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Best way to reach me
              </p>
              <Button variant="outline" asChild className="w-full">
                <a href="mailto:shohruh.sdlv@gmail.com">
                  shohruh.sdlv@gmail.com
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-glow transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Linkedin className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold text-foreground">LinkedIn</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Connect with me and see my latest updates
              </p>
              <Button variant="outline" asChild className="w-full">
                <a 
                  href="https://www.linkedin.com/in/shohruh-sadullaev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold text-foreground">Location</h3>
              </div>
              <p className="text-muted-foreground">
                Currently based in Vienna, Austria
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Available for collaborations globally
              </p>
            </CardContent>
          </Card>

        </div>

        <div className="text-center mt-12">
          <div className=" rounded-lg">

            <p className="text-muted-foreground mb-6">
              {/* Shohruh Sadullaev */} <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;