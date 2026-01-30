const projects = [
  {
    title: "Project Title",
    description:
      "Brief description of the project highlighting key features and technologies used.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "Node.js"],
    github: "#",
    link: "#",
  },
  {
    title: "Project Title",
    description:
      "Brief description of the project highlighting key features and technologies used.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "Node.js"],
    github: "#",
    link: "#",
  },
  {
    title: "Project Title",
    description:
      "Brief description of the project highlighting key features and technologies used.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "Node.js"],
    github: "#",
    link: "#",
  },
  {
    title: "Project Title",
    description:
      "Brief description of the project highlighting key features and technologies used.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "Node.js"],
    github: "#",
    link: "#",
  },
  {
    title: "Project Title",
    description:
      "Brief description of the project highlighting key features and technologies used.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "Node.js"],
    github: "#",
    link: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 bg-primary/5 rounded"></div>
      <div className="absolute bottom-1/4 left-0 w-64 bg-hightlights/5 rounded"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-04 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animation-fade-in animation-delay-200">
            A selection of my most impactful projects, showcasing my skills and
            expertise.
          </p>
        </div>
        {/* Project Grids */}
      </div>
    </section>
  );
};
