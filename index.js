const data = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Ruby"],
    tools: ["Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

console.log(data);

document.addEventListener("DOMContentLoaded", () => {
  const listElement = document.getElementById("list");
  const searchInput = document.getElementById("search");

  function renderJobListings() {
    listElement.innerHTML = "";

    const searchQuery = searchInput.value.trim().toLowerCase();

    data
      .filter((job) => {
        const matchSearch =
          job.company.toLowerCase().includes(searchQuery) ||
          job.position.toLowerCase().includes(searchQuery) ||
          job.location.toLowerCase().includes(searchQuery) ||
          job.contract.toLowerCase().includes(searchQuery) ||
          job.languages.some((lang) =>
            lang.toLowerCase().includes(searchQuery)
          ) ||
          job.tools.some((tool) => tool.toLowerCase().includes(searchQuery));

        return matchSearch;
      })
      .forEach((details) => {
        const detailsCard = document.createElement("div");
        detailsCard.className = "card";

        const cardContainer = document.createElement("div");
        cardContainer.className = "main";

        const logo = document.createElement("img");
        logo.src = details.logo;

        const title = document.createElement("div");
        title.className = "title";

        const company = document.createElement("h4");
        company.innerText = details.company;

        if (details.new) {
          const newElement = document.createElement("span");
          newElement.className = "fresher";
          newElement.innerText = "NEW !";
          company.appendChild(newElement);
        }

        if (details.featured) {
          const feature = document.createElement("span");
          feature.className = "feat";
          feature.innerText = "FEATURED";
          company.appendChild(feature);
        }

        const position = document.createElement("h2");
        position.innerText = details.position;

        const time = document.createElement("p");
        time.innerText = `${details.postedAt} • ${details.contract} • ${details.location}`;

        const work = document.createElement("div");
        work.className = "work";

        const workRole = document.createElement("span");
        workRole.className="role";
        workRole.innerText = details.role;
        work.appendChild(workRole);

        const workLevel = document.createElement("span");
        workLevel.className="level";
        workLevel.innerText = details.level;
        work.appendChild(workLevel);

        const languages = document.createElement("div");
        languages.className = "languages";
        details.languages.forEach((lang) => {
          const workLang = document.createElement("span");
          workLang.innerText = lang;
          languages.appendChild(workLang);
        });
        work.appendChild(languages);

        const tools = document.createElement("div");
        tools.className = "tools";
        details.tools.forEach((tool) => {
          const workTools = document.createElement("span");
          workTools.innerText = tool;
          tools.appendChild(workTools);
        });

        listElement.appendChild(detailsCard);
        detailsCard.appendChild(cardContainer);
        cardContainer.appendChild(logo);
        cardContainer.appendChild(title);
        title.appendChild(company);
        title.appendChild(position);
        title.appendChild(time);
        detailsCard.appendChild(work);
        work.appendChild(tools);
        work.appendChild(languages);
      });
  }

  searchInput.addEventListener("input", renderJobListings);

  renderJobListings();
});
