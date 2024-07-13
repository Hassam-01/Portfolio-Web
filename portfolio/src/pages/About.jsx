import cloud from "../assets/cloud.png";


function About() {
  return (
    <div className="flex-grow flex justify-center dark:text-white">
      <div className="flex flex-col justify-between w-full max-w-screen-xl  py-24 px-4">
        <div className="flex flex-col justify-between flex-grow">
          <h1 className="heading md:text-3xl text-2xl font-bold  dark:text-[#CC8BF2] anton-sc-regular md:tracking-wider  tracking-widest">ABOUT ME</h1>
          <div className="mt-6 overflow-x-hidden flex-grow">
            <div className="flex flex-col md:flex-row relative">
              <div className="md:w-2/3 md:text-lg text-sm space-y-10 z-10">
                <div className="flex flex-col">
                  <p className="mt-8">
                    I have extensive experience in machine learning and deep
                    learning, with advanced expertise in frameworks like Keras,
                    PyTorch, TensorFlow, and LangChain. I focus on developing
                    and optimizing complex models such as CNNs and RNNs, which I
                    apply to various tasks including image recognition, natural
                    language processing, and time-series analysis.
                  </p>
                  <div className="md:hidden my-4 w-full flex justify-center">
                    <img
                      src={cloud}
                      alt="Machine learning cloud"
                      className="w-full md:w-auto max-w-72 min-h-72"
                    />
                  </div>
                  <p className="mt-4">
                    Beyond my modeling skills, I am proficient in data analysis,
                    using techniques like graph plotting to extract meaningful
                    insights and improve decision-making processes. I am
                    dedicated to continuous learning and staying abreast of the
                    latest developments in machine learning, with a commitment
                    to delivering innovative solutions that advance the field.
                  </p>
                </div>
                <p>
                  My objective is to utilize my skills and knowledge to create
                  cutting-edge, efficient, and effective machine learning
                  solutions that drive innovation and progress in the industry.
                </p>
              </div>
              <div className="hidden md:block md:ml-4 md:w-1/3 z-10 absolute right-0 top-10">
                <img
                  src={cloud}
                  alt="Machine learning cloud"
                  className="max-w-80 max-h-80 hover:animate-cloud"
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default About;
