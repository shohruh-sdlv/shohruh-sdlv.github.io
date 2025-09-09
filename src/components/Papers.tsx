import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, ExternalLink, Download, Users } from 'lucide-react';

const Papers = () => {
  const papers = [
    {
      title: "test",
      authors: ["Shohruh Sadullaev", "et al."],
      journal: "Under Review",
      year: "2025",
      status: "Under Review",
      type: "Research Paper",
      abstract: "Test",
      keywords: ["Large Language Models", "Network Analysis", "Social Media", "Computational Social Science"],
      link: "#",
      downloadable: false
    },
        // {
    //   title: "Early Detection of Disinformation Campaigns: A Hybrid LLM-Network Analysis Approach",
    //   authors: ["Shohruh Sadullaev", "et al."],
    //   journal: "Under Review",
    //   year: "2025",
    //   status: "Under Review",
    //   type: "Research Paper",
    //   abstract: "This paper presents a novel methodology combining Large Language Models with network analysis techniques for early detection of disinformation campaigns. Our approach demonstrates significant improvement in detection accuracy and speed compared to traditional methods.",
    //   keywords: ["Disinformation Detection", "Large Language Models", "Network Analysis", "Social Media", "Computational Social Science"],
    //   link: "#",
    //   downloadable: false
    // },
    // {
    //   title: "Gender Digital Divide in Central Asia: Evidence from Uzbekistan",
    //   authors: ["Shohruh Sadullaev", "Women in Digital Transformation Research Team"],
    //   journal: "Working Paper",
    //   year: "2024",
    //   status: "Working Paper",
    //   type: "Policy Paper",
    //   abstract: "An empirical analysis of gender digital disparities in Uzbekistan, examining factors contributing to the digital divide and proposing evidence-based policy interventions for improved digital inclusion.",
    //   keywords: ["Gender Digital Divide", "Digital Inclusion", "Central Asia", "Policy Analysis", "Development Studies"],
    //   link: "#",
    //   downloadable: false
    // },
    // {
    //   title: "Soviet Colonial Discourse and Gender Ideologies: A Computational Text Analysis of Propaganda Corpus",
    //   authors: ["Shohruh Sadullaev", "ICAPHE Research Group"],
    //   journal: "In Preparation",
    //   year: "2024",
    //   status: "In Preparation",
    //   type: "Research Paper",
    //   abstract: "Using a corpus of over 5 million words from Soviet propaganda texts, this study employs computational methods to analyze the evolution of gender ideologies and their intersection with colonial discourse in Central Asia.",
    //   keywords: ["Computational Text Analysis", "Soviet History", "Gender Studies", "Colonial Discourse", "Digital Humanities"],
    //   link: "#",
    //   downloadable: false
    // },
    // {
    //   title: "Women-Related Social Policies in Extractive Institutions: Development Patterns and Impact Assessment",
    //   authors: ["Shohruh Sadullaev", "ICAPHE Researchers"],
    //   journal: "Conference Presentation",
    //   year: "2024",
    //   status: "Presented",
    //   type: "Conference Paper",
    //   abstract: "This paper traces the development stages of women-related social policies within extractive institutions, analyzing their evolution, implementation patterns, and socio-economic impacts.",
    //   keywords: ["Social Policy", "Extractive Institutions", "Gender Policy", "Policy Development", "Institutional Analysis"],
    //   link: "#",
    //   downloadable: false
    // }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Working Paper':
        return 'bg-blue-100 text-blue-800';
      case 'In Preparation':
        return 'bg-purple-100 text-purple-800';
      case 'Presented':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Research Paper':
        return '📄';
      case 'Policy Paper':
        return '📋';
      case 'Conference Paper':
        return '🎯';
      case 'Book Chapter':
        return '📚';
      default:
        return '📄';
    }
  };

  return (
    <section id="papers" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Publications & Papers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic research contributions in computational social science, gender studies, and data analysis
          </p>
        </div>

        <div className="space-y-8">
          {papers.map((paper, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start mb-3">
                      <span className="text-2xl mr-3 mt-1">{getTypeIcon(paper.type)}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2 leading-tight">
                          {paper.title}
                        </h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Users className="w-4 h-4 mr-2" />
                          <span className="text-sm">
                            {paper.authors.join(', ')}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="font-medium text-primary">{paper.journal}</span>
                          <span>•</span>
                          <span>{paper.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end mt-4 lg:mt-0">
                    <Badge className={`${getStatusColor(paper.status)} mb-2`}>
                      {paper.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {paper.type}
                    </Badge>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {paper.abstract}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.keywords.map((keyword, keyIndex) => (
                    <Badge key={keyIndex} variant="secondary" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {paper.status === 'Published' && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={paper.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Paper
                      </a>
                    </Button>
                  )}
                  
                  {paper.downloadable && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={paper.link} download>
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                  )}
                  
                  {(paper.status === 'Under Review' || paper.status === 'In Preparation') && (
                    <Button variant="ghost" size="sm" disabled>
                      <FileText className="w-4 h-4 mr-2" />
                      {paper.status}
                    </Button>
                  )}

                  <Button variant="ghost" size="sm" asChild>
                    <a href="mailto:shohruh.sdlv@gmail.com?subject=Inquiry about: {paper.title}">
                      Request Information
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Papers;