import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Research Intern",
      organization: "Complexity Science Hub",
      period: "April - June 2025",
      location: "Vienna, Austria",
      type: "Research",
      responsibilities: [
        "Contributed to DesinFact research project, focused on early detection of harmful disinformation trends online",
        "Conduct in-depth analysis of disinformation patterns and research the mechanisms, spread, and impact of disinformation campaigns",
        "Support the development of LLM-based methods combining network and content analysis to identify disinformation campaigns"
      ]
    },
    {
      title: "Graduate Student Researcher",
      organization: "Women in Digital Transformation",
      period: "November - December 2024",
      location: "Remote",
      type: "Research",
      responsibilities: [
        "Contributed to the Gender Digital Divide Index (GDDI) Project",
        "Conducted desk research on gender digital disparities in Uzbekistan, sourcing data from government and credible online sources"
      ]
    },
    {
      title: "Data/Field Research Associate",
      organization: "ICAPHE Research Group",
      period: "June 2023 – September 2024",
      location: "Tashkent, Uzbekistan",
      type: "Research",
      responsibilities: [
        "Processed trace the development of women-related social policies of extractive institutions and examine their development stages",
        "Ran web scraping and advanced OCR on Soviet propaganda texts from leaders and ideologues to develop a corpus of over 5 million words",
        "Conducted textual analysis to examine the impact of Soviet colonialism on gender roles and ideologies over time",
        "Gained expertise in multiplay between policy, gender, and socio-political narratives"
      ]
    },
    {
      title: "Front-End Web Developer/Student Helper",
      organization: "University of Westminster",
      period: "March - May 2023",
      location: "London, UK",
      type: "Development",
      responsibilities: [
        "Worked in university's mobile web development project",
        "Demonstrated expert coding knowledge of JavaScript, SQL and C#",
        "Delivered front-end development across mobile and desktop web applications using jQuery Mobile and ASP.NET 6"
      ]
    },
    {
      title: "Quality Assurance Engineer Intern",
      organization: "JSCB \"Invest Finance Bank\"",
      period: "November 2021 - April 2022",
      location: "Tashkent, Uzbekistan",
      type: "Engineering",
      responsibilities: [
        "Conducted automated tests for web and mobile applications using Jasmine JS framework",
        "Wrote reports on conducted automated and manual QA tests",
        "Automated QA tests in Jenkins by setting up multi-branch pipeline on schedule"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Research':
        return 'bg-primary text-primary-foreground';
      case 'Development':
        return 'bg-green-600 text-white';
      case 'Engineering':
        return 'bg-blue-600 text-white';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional experience spanning research, development, and fieldwork
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.title}
                      </h3>

                    </div>
                    <div className="flex items-center text-primary font-medium mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      {exp.organization}
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end mt-4 lg:mt-0">
                    <div className="flex items-center text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;