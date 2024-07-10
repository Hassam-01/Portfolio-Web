import { useParams } from "react-router-dom";
import ProjectData from "../projects/ProjectData";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { BsGithub } from "react-icons/bs";
import { useSelector } from "react-redux";

function ProjectDesc() {
  const { id: projectID } = useParams();
  console.log(projectID);
  
  const project = ProjectData.find(project => project.id === Number(projectID));
  const darkMode = useSelector((state)=> state.darkMode.darkMode);
  return (
    <div className="mt-24 mx-4 mb-10">
        {/* <img src={project1} alt="" /> */}
      {project ? (
        <div key={project.id} className=" ">
          <div className="flex flex-col items-center justify-between gap-12">
            <h2 className="text-4xl font-bold">{project.title}</h2>
            <div className={`flex gap-4`} data-color-mode={`${darkMode?"`dark":"light"}`}>
              <MarkdownPreview source={project.description} className="bg-transparent md:text-xl text-lg max-w-screen-xl"/>
            </div>
            <div className="">
              <a href={project.git} className=" hover:underline flex items-center mt-3 mx-4 max-w-screen-xl">
              <BsGithub className=" h-8 w-8 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      ) : (
        <p>Project not found.</p>
      )}
    </div>
  );
}

export default ProjectDesc;
