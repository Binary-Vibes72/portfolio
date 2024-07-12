import "../../public/images/framework/nodejs.png"
import { AnimatedTooltip } from "./skills";

const framework = [
  {
    id: 1,
    name: "Node.js",
    image: "/images/framework/nodejs.png"
  },
  {
    id: 2,
    name: "React.js",
    image: "/images/framework/reactjs.png"
  },
  {
    id: 3,
    name: "Next.js",
    image: "/images/framework/nextjs.png"
  },
  {
    id: 4,
    name: "Flask",
    image: "/images/framework/flask.png"
  },
  {
    id: 5,
    name: "OpenCV",
    image: "/images/framework/opencv.png"
  },
  {
    id: 6,
    name: "Pandas",
    image: "/images/framework/pandas.png"
  },
  {
    id: 7,
    name: "Kotlin",
    image: "/images/framework/kotlin.png"
  },
  {
    id: 8,
    name: "Tailwind",
    image: "/images/framework/tailwind.png"
  },
];

const prolang_core = [
  {
    id: 1,
    name: "C",
    image: "/images/pro-lang-core/c.png"
  },
  {
    id: 2,
    name: "C++",
    image: "/images/pro-lang-core/cpp.png"
  },
  {
    id: 3,
    name: "Python",
    image: "/images/pro-lang-core/python.png"
  },
  {
    id: 4,
    name: "Java",
    image: "/images/pro-lang-core/java.png"
  },
  {
    id: 5,
    name: "Javascript",
    image: "/images/pro-lang-core/javascript.png"
  },
  {
    id: 6,
    name: "Typescript",
    image: "/images/pro-lang-core/typescript.png"
  },
];

const prolang_web = [
  {
    id: 1,
    name: "C",
    image: "/images/pro-lang-web/html.png"
  },
  {
    id: 2,
    name: "C++",
    image: "/images/pro-lang-web/css.png"
  },
  {
    id: 3,
    name: "sass",
    image: "/images/pro-lang-web/sass.png"
  },
];

const database = [
  {
    id: 1,
    name: "MongoDB",
    image: "/images/database/mongodb.png"
  },
  {
    id: 2,
    name: "SQlite",
    image: "/images/database/sqlite.png"
  },
  {
    id: 3,
    name: "GraphQL",
    image: "/images/database/graphql.png"
  },
  {
    id: 4,
    name: "PostgreSQL",
    image: "/images/database/postgresql.png"
  },
  {
    id: 5,
    name: "Drizzle ORM",
    image: "/images/database/drizzle.png"
  },
];

const automation = [
  {
    id: 1,
    name: "Git Version Control",
    image: "/images/automation-version-control/git.png"
  },
  {
    id: 2,
    name: "Github",
    image: "/images/automation-version-control/github.png"
  },
  {
    id: 3,
    name: "Selenium",
    image: "/images/automation-version-control/selenium.png"
  },
];

const machine = [
  {
    id: 1,
    name: "Pytorch",
    image: "/images/machine-learning/pytorch.png"
  },
  {
    id: 2,
    name: "Tenserflow",
    image: "/images/machine-learning/tenserflow.png"
  },
];

const tools = [
  {
    id: 1,
    name: "Blender",
    image: "/images/tools/blender.png"
  },
  {
    id: 2,
    name: "Figma",
    image: "/images/tools/figma.png"
  },
  {
    id: 3,
    name: "Postman",
    image: "/images/tools/postman.png"
  },
  {
    id: 4,
    name: "Adobe Illustrator",
    image: "/images/tools/adobe-illustrator.png"
  },
  {
    id: 5,
    name: "Adobe Photoshop",
    image: "/images/tools/adobe-photoshop.png"
  },
];


export const Framework = () => {
  return (
    <div className="techStack flex flex-row p-5 flex-wrap justify-center">
      <AnimatedTooltip items={framework} />
    </div>
  );
};

export const ProLang = () => {
  return (
    <>
      <div className="techStack-core">
        <p className='font-outfit text-text-primary text-xl mt-5'>core</p>
        <div className="techStack flex flex-row p-5 flex-wrap justify-center -mt-5">
          <AnimatedTooltip items={prolang_core} />
        </div>
      </div>
      <div className="techStack-web">
        <p className='font-outfit text-text-primary text-xl mt-5'>web</p>
        <div className="techStack flex flex-row p-5 flex-wrap justify-center -mt-5">
          <AnimatedTooltip items={prolang_web} />
        </div>
      </div>
    </>
  );
};

export const Database = () => {
  return (
    <div className="techStack flex flex-row p-5 flex-wrap justify-center">
      <AnimatedTooltip items={database} />
    </div>
  );
};

export const Automation = () => {
  return (
    <div className="techStack flex flex-row p-5 flex-wrap justify-center">
      <AnimatedTooltip items={automation} />
    </div>
  );
};

export const MachLean = () => {
  return (
    <div className="techStack flex flex-row p-5 flex-wrap justify-center">
      <AnimatedTooltip items={machine} />
    </div>
  );
};

export const Tools = () => {
  return (
    <div className="techStack flex flex-row p-5 flex-wrap justify-center">
      <AnimatedTooltip items={tools} />
    </div>
  );
};