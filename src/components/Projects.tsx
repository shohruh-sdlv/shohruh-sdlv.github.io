import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 'test',
      title: "test",
      description: "test",
      tags: ["Python", "NLP", "Machine Learning", "Network Analysis", "Research"],
      type: "Research Project",
      status: "Ongoing",
      organization: "test"
    },
        // {
    //   id: 'desinf-research',
    //   title: "Disinformation Detection Research",
    //   description: "Advanced research project focused on early detection of harmful disinformation trends using LLM-based methods and network analysis.",
    //   tags: ["Python", "NLP", "Machine Learning", "Network Analysis", "Research"],
    //   type: "Research Project",
    //   status: "Ongoing",
    //   organization: "Complexity Science Hub"
    // },
    // {
    //   id: 'gddi-project',
    //   title: "Gender Digital Divide Index (GDDI)",
    //   description: "Comprehensive research on gender digital disparities in Uzbekistan, contributing to policy recommendations for digital inclusion.",
    //   tags: ["Data Analysis", "Policy Research", "Statistical Analysis", "R"],
    //   type: "Research Project",
    //   status: "Completed",
    //   organization: "Women in Digital Transformation"
    // },
    // {
    //   id: 'soviet-corpus',
    //   title: "Soviet Propaganda Text Analysis",
    //   description: "Built a corpus of over 5 million words from Soviet propaganda texts using web scraping and OCR, analyzing impact on gender ideologies.",
    //   tags: ["OCR", "Text Mining", "Python", "Web Scraping", "Historical Analysis"],
    //   type: "Data Project",
    //   status: "Completed",
    //   organization: "ICAPHE Research Group"
    // },
    // {
    //   id: 'social-policies',
    //   title: "Women-Related Social Policies Analysis",
    //   description: "Traced the development of women-related social policies in extractive institutions, examining development stages and impacts.",
    //   tags: ["Policy Analysis", "Data Processing", "Research", "Statistical Methods"],
    //   type: "Research Project",
    //   status: "Completed",
    //   organization: "ICAPHE Research Group"
    // },
    // {
    //   id: 'web-dev-projects',
    //   title: "University Web Development",
    //   description: "Mobile-first web applications using modern JavaScript frameworks, responsive design, and ASP.NET backend integration.",
    //   tags: ["JavaScript", "jQuery Mobile", "ASP.NET", "C#", "SQL", "Responsive Design"],
    //   type: "Development Project",
    //   status: "Completed",
    //   organization: "University of Westminster"
    // },
    // {
    //   id: 'qa-automation',
    //   title: "Banking QA Automation System",
    //   description: "Automated testing framework for banking applications with CI/CD integration and comprehensive test reporting.",
    //   tags: ["Jasmine JS", "Test Automation", "Jenkins", "CI/CD", "QA"],
    //   type: "Engineering Project",
    //   status: "Completed",
    //   organization: "Invest Finance Bank"
    // }
  ];

  const getStatusColor = (status: string) => {
    return status === 'Ongoing' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Research Project':
        return '🔬';
      case 'Data Project':
        return '📊';
      case 'Development Project':
        return '💻';
      case 'Engineering Project':
        return '⚙️';
      default:
        return '📋';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of research projects, data analysis work, and software development initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">{getTypeIcon(project.type)}</span>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">{project.organization}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to={`/project/${project.id}`}>
                    View Details 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;