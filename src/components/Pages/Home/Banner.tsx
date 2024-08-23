import { heroSection, heroSectionImage } from "@/components/Hooks/animation";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const Banner: React.FC = () => {
  return (
    <div className="pt-4 mx-auto  overflow-hidden  mt-20 mb-16">
      <motion.div
        variants={heroSection}
        initial="hidden"
        animate="visible"
        className=" pl-2 lg:pl-0"
      ></motion.div>
      <div className="lg:flex lg:gap-[128px] text-[#061C3D] items-center justify-between">
        <Fade direction="left">
          <h1 className="text-3xl lg:text-[64px] mb-4 lg:mb-0 font-extrabold uppercase  lg:leading-[70px]">
            Welcome to <span className="text-teal-500"> PostHub </span>{" "}
            <p>SEE ALL POSTS</p>
          </h1>
        </Fade>
      </div>
      <motion.div
        variants={heroSectionImage}
        initial="initial"
        animate="animate"
        className="relative mt-5"
      >
        <div className="mt-12 md:h-[600px] bg-red-400 md:relative">
          <motion.img
            loading="lazy"
            src="https://www.scurri.com/wp-content/uploads/2022/08/delivery-management-platform-coffee.jpg"
            className="object-cover md:absolute inset-0 w-full h-full"
            alt=""
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white size-16 md:size-24 rounded-full flex items-center justify-center  border-[8px] md:border-[16px] border-opacity-5">
            <motion.img
              loading="lazy"
              src="https://cdn2.iconfinder.com/data/icons/basics-1/100/Play-512.png"
              alt=""
              className="size-5 md:size-7"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
