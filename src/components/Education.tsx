import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Central European University, Vienna",
      degree: "M.Sc., Social Data Science",
      period: "2024 – Exp. 2026",
      location: "Vienna, Austria",
      coursework: [
        "Machine Learning with Graphs",
        "Advanced Machine Learning",
        "Text as Data",
        "Network Science",
        "Agent-Based Models",
        "Queer Theory",
        "Data Mining and Big Data Analytics",
        "Scientific Python",
        "Applied Statistics",
        "Data and Network Visualization",
        "Digital Data Collection Methods",
        "Introduction to Computational Social Science"
      ],
      status: "Current"
    },
    {
      institution: "Westminster International University in Tashkent",
      degree: "B.Sc. (Hons), Business Information Systems",
      period: "2021 – 2024",
      location: "Tashkent, Uzbekistan",
      coursework: [
        "Machine Learning and Data Analytics",
        "Project Management",
        "Information Security",
        "Developing Digital Enterprise",
        "Internet Law",
        "Mathematics for Computing",
        "Business Information Systems Project"
      ],
      status: "Completed"
    },
    {
      institution: "University of Westminster",
      degree: "Computer Science Year-Long Exchange Program",
      period: "2022 – 2023",
      location: "London, UK",
      coursework: [
        "Advanced Client-Side Development",
        "Client-Server Architectures",
        "Database Systems",
        "Business Analytics",
        "Object Oriented Programming",
        "Software Development Group Project"
      ],
      status: "Exchange"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation in data science, business information systems, and computational methods
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {edu.institution}
                    </h3>
                    <p className="text-lg text-primary font-medium mb-2">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="flex flex-col lg:items-end">
                    {/* <Badge 
                      variant={edu.status === 'Current' ? 'default' : 'secondary'} 
                      className="w-fit mb-2"
                    >
                      {edu.status}
                    </Badge> */}
                    <div className="flex items-center text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {edu.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div>
                  <h4 className="font-medium text-foreground mb-3">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <Badge key={courseIndex} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;