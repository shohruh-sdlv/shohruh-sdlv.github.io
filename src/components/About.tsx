import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = {
    programming: ['Python', 'R', 'JavaScript', 'Java', 'SQL', 'C#'],
    research: ['Data Mining', 'Big Data Analytics', 'Machine Learning', 'Statistical Analysis', 'Network Analysis'],
    tools: ['Scientific Python', 'Applied Statistics', 'Data Visualization', 'Digital Data Collection', 'OCR'],
    languages: ['English (Fluent)', 'Russian (Fluent)', 'Uzbek (Native)', 'German (Basic)']
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I am a dedicated researcher and developer with expertise in computational social science, 
            data analytics, and software development. Currently pursuing advanced studies in Social Data Science 
            while actively contributing to research on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Research Interests</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Computational Social Science & Network Analysis
              </li>
              {/* <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Disinformation Detection & Analysis
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Gender 
              </li> */}
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Data Mining & Big Data Analytics
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Machine Learning Applications in Social Sciences
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Current Focus</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Working on research projects at the intersection of technology and social science, 
                with particular emphasis on understanding digital transformation impacts and developing 
                computational methods for social research.
              </p>
              {/* <p>
                Actively pursuing PhD opportunities to further contribute to the field of computational 
                social science and expand research on digital societies and information systems.
              </p> */}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-card hover:shadow-glow transition-shadow duration-300">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-4 text-foreground">Programming</h4>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-glow transition-shadow duration-300">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-4 text-foreground">Research</h4>
              <div className="flex flex-wrap gap-2">
                {skills.research.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-glow transition-shadow duration-300">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-4 text-foreground">Tools & Methods</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-glow transition-shadow duration-300">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-4 text-foreground">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;