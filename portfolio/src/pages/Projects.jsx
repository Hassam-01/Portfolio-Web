import { Link } from "react-router-dom";
import ProjectData from "../projects/ProjectData";

function Projects() {
  return (
    <div className=" dark:text-white text-black w-screen">
      <div className="mt-20 mx-6  ">
        <div className="flex text-4xl md:text-5xl justify-center">
          <h1 className="lineBelow anton-sc-regular md:tracking-wider tracking-widest">
            MY PROJECTS
          </h1>
        </div>
        <div className="flex justify-center mt-10">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-20 lg:gap-28 gap-16  my-10  px-4 ">
              {ProjectData.map((project) => {
                return (
                  <Link key={project.id} to={`/projects/${project.id}`}>
                    <div className="flex flex-col max-w-72 max-h-80 cursor-pointer justify-center items-center ">
                      <img
                        src={project.img}
                        alt=""
                        className="w-full h-3/4 rounded-xl shadow-xl "
                      />
                      <h2 className="text-xl font-bold my-4 heading w-fit">
                        {project.title}
                      </h2>
                      <p className="cursor-text text-center">
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
