import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing clean, maintainable, and efficient code following best practices.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed, and delivering lightning-fast user experiences",
  },

  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working together with cross-functional teams to deliver the best results.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Constantly exploring new technologies and ideas to stay ahead of the curve.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div animate-fade-in>
              <span className="text-secondary-foreground text-sm font-nedium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animation-fade-animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animation-fade-in animation-delay-200">
              <p>
                Multi-lingual Tele-communication Professional with progressive,
                extensive, and advanced experience implementing and
                troubleshooting all aspects of telecommunications technologies.
                Installation and maintenance of equipment and services for: -
                Cable TV subscribers in Rhineland-Pfalz, Germany - Airline
                companies at Newark Liberty International Airport. - Government
                facilities including DEA FBI and Homeland Security.
              </p>
              <p>
                I have experience as a NOC Technician (Network Operations Center
                Technician) Harris Corp, Melbourne, FL where I assisted with
                sustainable revenue generation in access of 1-10 million 09/2013
                Systems Technician Verizon Communications, Newark, NJ •
                Installed, maintained, and repaired analog and digital circuits
                including but not limited to Gigabit Ethernet, Sonnet, DS3, high
                speed transmission circuits for business and municipal i.e.
                airline companies • Performed Ethernet broadband deployment of
                Fiber Optic Terminals, Fuj itsu and AT&T multiplexors, telephone
                and Sonnet equipment. Racked and stacked Cisco routers and
                switches as well as Canoga Harware. • Configured and tested
                customer premise equipment including routers, switches,
                firewalls, and modems to ensure proper functionality and
                connectivity. • Diagnosed and resolved network issues, performed
                regular maintenance tasks, and ensured optimal performance of
                network infrastructure. • Collaborated
              </p>
              <p>
                I was also a NE4 Service Technician for Suratec GMBH, in St
                Wendel, Germany • I operated as the CO lead for
                residential/commercial SW regional contract averaging 7
                -10milion euros/12000US • Service und Wartung van aktiven und
                passiven Komponenten des Breitbandkabel (BK)-Netzes • ·
                Eigenst%E4nd ige standardisierte Abnahme van Systemen im Bereich
                des BK-Netzes • Eigenverantwortliche Fehlereingrenzung und
                Beseitigung • van schwierigen St%F6rungen in der Netzebene 4 im
                BK-Netz 02/1981{" "}
              </p>
              <p>
                {" "}
                Systems Technician Verizon Communications, Newark, NJ •
                Installed, maintained, and repaired analog and digital circuits
                including but not limited to Gigabit Ethernet, Sonnet, DS3, high
                speed transmission circuits for business and municipal i.e.
                airline companies • Performed Ethernet broadband deployment of
                Fiber Optic Terminals, Fuj itsu and AT&T multiplexors, telephone
                and Sonnet equipment. Racked and stacked Cisco routers and
                switches as well as Canoga Perkings Ethernet routers. Resolved
                escalated troubles tickets. 1/2 • Deployed Ethernet to schools
                and cell sites in Essex County i ncluding installation and
                turn-up of Canoga Perkings routers for Verizon, AT&T and
                Tmobile. • Installed and turned-up V-SWITCH and ATM for
                Irvington school district. • Performed ATM Cisco router
                installation and turn up for the East Orange school district. •
                Deployed ISDN for the Newark school system.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animation-fade-in animation-delay-300">
              <p className="text-g font-medium italic text-foreground">
                My mission is to leverage my extensive telecommunications
                experience to drive innovation and efficiency in network
                operations, ensuring seamless connectivity and exceptional
                service delivery for all clients.
              </p>
            </div>
          </div>
          {/* Right Column- highlights */}
          <div className="grid sm:grid-cols-2 gap-06">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 ">
                  <item.icon className=" w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
