import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, MapPin, Building, ExternalLink, Github } from 'lucide-react';
import Navigation from '@/components/Navigation';

const ProjectDetail = () => {
  const { id } = useParams();

  const projectData: { [key: string]: any } = {
    'desinf-research': {
      title: "Disinformation Detection Research",
      subtitle: "Early Detection of Harmful Disinformation Trends",
      organization: "Complexity Science Hub",
      period: "April - June 2025",
      location: "Vienna, Austria",
      status: "Ongoing",
      type: "Research Project",
      tags: ["Python", "NLP", "Machine Learning", "Network Analysis", "Research"],
      overview: "Advanced research project focused on early detection of harmful disinformation trends using cutting-edge LLM-based methods combined with sophisticated network analysis techniques.",
      objectives: [
        "Develop novel methods for early identification of disinformation campaigns",
        "Combine Large Language Models with network analysis for comprehensive detection",
        "Analyze patterns and mechanisms of disinformation spread across social networks",
        "Evaluate the impact and reach of different types of disinformation campaigns"
      ],
      methodology: [
        "Implementation of state-of-the-art Large Language Models for content analysis",
        "Network analysis techniques to map information flow and influence patterns",
        "Statistical modeling of disinformation propagation mechanisms",
        "Development of automated detection systems with real-time capabilities"
      ],
      outcomes: [
        "Contributing to the DesinFact research project's goals",
        "Development of innovative LLM-network hybrid analysis methods",
        "Publication-ready research findings on disinformation patterns",
        "Tools and methodologies for real-time disinformation detection"
      ],
      skills: [
        "Advanced Python programming for data science",
        "Natural Language Processing and Large Language Models",
        "Network analysis and graph theory applications",
        "Machine Learning model development and evaluation",
        "Research methodology and academic writing"
      ]
    },
    'gddi-project': {
      title: "Gender Digital Divide Index (GDDI)",
      subtitle: "Research on Digital Gender Disparities in Uzbekistan",
      organization: "Women in Digital Transformation",
      period: "November - December 2024",
      location: "Remote",
      status: "Completed",
      type: "Research Project",
      tags: ["Data Analysis", "Policy Research", "Statistical Analysis", "R"],
      overview: "Comprehensive research project examining gender digital disparities in Uzbekistan, contributing valuable insights to policy recommendations for digital inclusion initiatives.",
      objectives: [
        "Assess the current state of gender digital divide in Uzbekistan",
        "Identify key factors contributing to digital disparities",
        "Provide data-driven recommendations for policy interventions",
        "Contribute to the global Gender Digital Divide Index framework"
      ],
      methodology: [
        "Systematic desk research using government and credible online sources",
        "Statistical analysis of digital inclusion indicators",
        "Comparative analysis with regional and global benchmarks",
        "Policy framework analysis and recommendations development"
      ],
      outcomes: [
        "Comprehensive report on gender digital disparities in Uzbekistan",
        "Data contribution to the GDDI project database",
        "Policy recommendations for improving digital inclusion",
        "Insights into Central Asian digital transformation challenges"
      ],
      skills: [
        "Policy research and analysis methodologies",
        "Statistical data analysis and interpretation",
        "Government data sourcing and validation",
        "Report writing and policy recommendation development",
        "Cross-cultural research sensitivity"
      ]
    },
    'soviet-corpus': {
      title: "Soviet Propaganda Text Analysis",
      subtitle: "5+ Million Word Corpus Analysis of Gender Ideologies",
      organization: "ICAPHE Research Group",
      period: "June 2023 – September 2024",
      location: "Tashkent, Uzbekistan",
      status: "Completed",
      type: "Data Project",
      tags: ["OCR", "Text Mining", "Python", "Web Scraping", "Historical Analysis"],
      overview: "Ambitious digital humanities project involving the creation and analysis of a massive corpus of Soviet propaganda texts to examine the evolution of gender ideologies over time.",
      objectives: [
        "Build a comprehensive corpus of Soviet propaganda texts (5+ million words)",
        "Analyze the impact of Soviet colonialism on gender roles and ideologies",
        "Trace the evolution of gender discourse in political propaganda",
        "Develop computational methods for historical text analysis"
      ],
      methodology: [
        "Advanced web scraping techniques for historical document collection",
        "State-of-the-art OCR technology for text extraction from scanned documents",
        "Natural Language Processing for text preprocessing and analysis",
        "Statistical text analysis and sentiment analysis techniques",
        "Historical discourse analysis methodologies"
      ],
      outcomes: [
        "Successfully created a 5+ million word corpus of Soviet propaganda texts",
        "Identified patterns in gender ideology evolution over different time periods",
        "Developed reusable methodology for historical text corpus creation",
        "Generated insights into the intersection of politics, gender, and ideology"
      ],
      skills: [
        "Web scraping and data collection automation",
        "Advanced OCR technology implementation",
        "Large-scale text processing and analysis",
        "Historical research methodologies",
        "Python programming for digital humanities"
      ]
    },
    'social-policies': {
      title: "Women-Related Social Policies Analysis",
      subtitle: "Development Stages of Extractive Institution Policies",
      organization: "ICAPHE Research Group",
      period: "June 2023 – September 2024",
      location: "Tashkent, Uzbekistan",
      status: "Completed",
      type: "Research Project",
      tags: ["Policy Analysis", "Data Processing", "Research", "Statistical Methods"],
      overview: "In-depth research project examining the development and evolution of women-related social policies within extractive institutions, analyzing their impact and development stages.",
      objectives: [
        "Trace the historical development of women-related social policies",
        "Analyze the role of extractive institutions in policy formation",
        "Examine the effectiveness and impact of different policy approaches",
        "Understand the intersection of gender, policy, and institutional structures"
      ],
      methodology: [
        "Systematic policy document analysis and categorization",
        "Historical timeline construction of policy development",
        "Statistical analysis of policy impact indicators",
        "Comparative institutional analysis across different periods",
        "Qualitative analysis of policy language and framing"
      ],
      outcomes: [
        "Comprehensive mapping of women-related policy development stages",
        "Insights into the relationship between extractive institutions and gender policies",
        "Understanding of policy evolution patterns and their societal impacts",
        "Framework for analyzing gendered policy development in institutional contexts"
      ],
      skills: [
        "Policy analysis and institutional research methods",
        "Historical research and timeline construction",
        "Statistical analysis of policy outcomes",
        "Qualitative data analysis techniques",
        "Academic research and writing skills"
      ]
    },
    'web-dev-projects': {
      title: "University Web Development",
      subtitle: "Mobile-First Web Applications with Modern Technologies",
      organization: "University of Westminster",
      period: "March - May 2023",
      location: "London, UK",
      status: "Completed",
      type: "Development Project",
      tags: ["JavaScript", "jQuery Mobile", "ASP.NET", "C#", "SQL", "Responsive Design"],
      overview: "Professional web development project creating mobile-first applications with modern JavaScript frameworks and robust backend integration.",
      objectives: [
        "Develop responsive web applications optimized for mobile devices",
        "Implement modern JavaScript solutions with clean, maintainable code",
        "Create seamless integration between frontend and backend systems",
        "Demonstrate expertise in full-stack development technologies"
      ],
      methodology: [
        "Mobile-first responsive design principles",
        "Modern JavaScript development with jQuery Mobile framework",
        "ASP.NET 6 backend development with C# programming",
        "SQL database design and optimization",
        "Cross-platform compatibility testing and optimization"
      ],
      outcomes: [
        "Successfully delivered functional mobile web applications",
        "Demonstrated proficiency in full-stack development",
        "Created reusable code components and development patterns",
        "Gained practical experience in university-level software development"
      ],
      skills: [
        "Advanced JavaScript programming and framework usage",
        "Mobile-responsive web design and development",
        "ASP.NET and C# backend development",
        "SQL database management and optimization",
        "Full-stack development project management"
      ]
    },
    'qa-automation': {
      title: "Banking QA Automation System",
      subtitle: "Comprehensive Testing Framework with CI/CD Integration",
      organization: "Invest Finance Bank",
      period: "November 2021 - April 2022",
      location: "Tashkent, Uzbekistan",
      status: "Completed",
      type: "Engineering Project",
      tags: ["Jasmine JS", "Test Automation", "Jenkins", "CI/CD", "QA"],
      overview: "Professional quality assurance project developing automated testing frameworks for critical banking applications with comprehensive CI/CD integration.",
      objectives: [
        "Implement automated testing for web and mobile banking applications",
        "Develop comprehensive test reporting and monitoring systems",
        "Integrate automated testing into CI/CD pipelines",
        "Ensure high-quality software delivery for financial services"
      ],
      methodology: [
        "Jasmine JS framework for automated test development",
        "Jenkins-based CI/CD pipeline integration",
        "Multi-branch testing strategy implementation",
        "Comprehensive test reporting and analytics",
        "Manual and automated testing coordination"
      ],
      outcomes: [
        "Successfully implemented automated testing for banking applications",
        "Developed robust CI/CD testing pipelines",
        "Created comprehensive test reporting systems",
        "Improved software quality and deployment reliability"
      ],
      skills: [
        "Test automation framework development",
        "Jasmine JS and JavaScript testing libraries",
        "Jenkins CI/CD pipeline configuration",
        "Quality assurance methodologies",
        "Banking software testing and compliance"
      ]
    }
  };

  const project = projectData[id as string];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    return status === 'Ongoing' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link to="/#projects" className="text-muted-foreground hover:text-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  {project.title}
                </h1>
                <p className="text-xl text-primary font-medium mb-4">
                  {project.subtitle}
                </p>
              </div>
              <Badge className={`${getStatusColor(project.status)} text-sm px-3 py-1`}>
                {project.status}
              </Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center text-muted-foreground">
                <Building className="w-4 h-4 mr-2" />
                {project.organization}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                {project.period}
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                {project.location}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag: string, index: number) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Project Details */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <h3 className="text-xl font-semibold text-foreground">Objectives</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.objectives.map((objective: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <h3 className="text-xl font-semibold text-foreground">Methodology</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.methodology.map((method: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{method}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <h3 className="text-xl font-semibold text-foreground">Key Outcomes</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <h3 className="text-xl font-semibold text-foreground">Skills Developed</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.skills.map((skill: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="mt-12 text-center bg-secondary/30 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Interested in This Work?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'd be happy to discuss this project in more detail or explore potential collaborations.
            </p>
            <Button size="lg" className="bg-gradient-primary border-0" asChild>
              <a href="mailto:shohruh.sdlv@gmail.com?subject=Discussion about {project.title}">
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;