import Image from 'next/image';
import "../../public/images/framework/nodejs.png"

export const Framework = () => {
  return (
    <div className="techStack">
      <div className="flex flex-row flex-wrap justify-evenly mt-10">
        <div className="tech-1 h-40 w-40 p-2 md:p-5 align-middle m-2">
          <Image
          src="/images/framework/nodejs.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-2 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/framework/reactjs.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-3 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/framework/nextjs.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-4 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/framework/flask.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-5 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/framework/opencv.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-6 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/framework/pandas.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-7 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/framework/kotlin.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-8 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/framework/tailwind.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
      </div>
    </div>
    
  );
};

export const ProLang = () => {
  return (
    <>
    <div className="techStack-core">
      <p className='font-outfit text-text-primary text-xl mt-10'>core</p>
      <div className="flex flex-row flex-wrap justify-evenly">
        <div className="tech-1 h-40 w-40 p-2 md:p-5 align-middle m-2">
          <Image
          src="/images/pro-lang-core/c.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-2 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/pro-lang-core/cpp.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-3 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/pro-lang-core/python.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-4 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/pro-lang-core/java.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-5 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/pro-lang-core/javascript.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-6 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/pro-lang-core/typescript.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
      </div>
    </div>
    <div className="techStack-web">
      <p className='font-outfit text-text-primary text-xl mt-10'>web</p>
      <div className="flex flex-row flex-wrap justify-evenly">
        <div className="tech-1 h-40 w-40 p-2 md:p-5 align-middle m-2">
          <Image
          src="/images/pro-lang-web/html.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-2 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/pro-lang-web/css.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-3 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/pro-lang-web/sass.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export const Database = () => {
  return (
    <div className="techStack">
      <div className="flex flex-row flex-wrap justify-evenly mt-10">
        <div className="tech-1 h-40 w-40 p-2 md:p-5 align-middle m-2">
          <Image
          src="/images/database/mongodb.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-2 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/database/sqlite.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-3 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/database/graphql.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-4 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/database/postgresql.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-5 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/database/drizzle.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
      </div>
    </div>
    
  );
};

export const Automation = () => {
  return (
    <div className="techStack">
      <div className="flex flex-row flex-wrap justify-evenly mt-10">
        <div className="tech-1 h-40 w-40 p-2 md:p-5 align-middle m-2">
          <Image
          src="/images/automation-version-control/git.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-2 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/automation-version-control/github.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-3 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/automation-version-control/selenium.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
      </div>
    </div>
    
  );
};

export const MachLean = () => {
  return (
    <div className="techStack">
      <div className="flex flex-row flex-wrap justify-evenly mt-10">
        <div className="tech-1 h-40 w-40 p-2 md:p-5 align-middle m-2">
          <Image
          src="/images/machine-learning/pytorch.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-2 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/machine-learning/tenserflow.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
      </div>
    </div>
    
  );
};

export const Tools = () => {
  return (
    <div className="techStack">
      <div className="flex flex-row flex-wrap justify-evenly mt-10">
        <div className="tech-1 h-40 w-40 p-2 md:p-5 align-middle m-2">
          <Image
          src="/images/tools/blender.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-2 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/tools/figma.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-3 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/tools/postman.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-4 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/tools/adobe-illustrator.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
        <div className="tech-5 h-40 w-40 p-2 md:p-5 align-middle m-2">
        <Image
          src="/images/tools/adobe-photoshop.png"
          alt='nodejs'
          width={170}
          height={170}
          />
        </div>
      </div>
    </div>
    
  );
};