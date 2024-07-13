import { Link } from "react-router-dom";
import ProjectData from "../projects/ProjectData";

function Projects() {
  return (
    <div className=" w-screen flex flex-grow justify-center ">
      <div className="mt-20 mx-6  ">
        <div className="flex heading text-3xl md:text-4xl justify-center md:justify-start  md:w-full  dark:text-[#CC8BF2]">
          <h1 className=" anton-sc-regular md:tracking-wider flex justify-start tracking-widest">
            MY PROJECTS
          </h1>
        </div>
        <div className="flex justify-center mt-10">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-20 lg:gap-16 gap-10  my-4  px-4 ">
              {ProjectData.map((project) => {
                return (
                  <Link key={project.id} to={`/projects/${project.id}`} className="">
                    <div className="flex flex-col max-w-64 max-h-72 cursor-pointer justify-center items-center ">
                      <div className="w-full h-3/4 ">
                      <img
                        src={project.img}
                        alt=""
                        className=" rounded-xl shadow-xl w-full h-full"
                        />
                        </div>
                      <h2 className="text-lg font-bold my-4 heading w-fit">
                        {project.title}
                      </h2>
                      <p className="cursor-text text-center text-sm">
                        {project.overview}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
