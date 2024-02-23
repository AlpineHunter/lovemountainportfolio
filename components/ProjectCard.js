import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";

function ProjectCard({ name, url, image }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4 p-4 border-gray-200 rounded-lg bg-whitesmoke shadow-md"
    >
      <a href={url} target="_blank">
        <img
          src={image}
          alt={`${name} Image`}
          className="w-full h-auto mb-2 rounded-lg"
        />
      </a>
      <h3 className="ml-2">{name}</h3>
      <div></div>
    </motion.div>
  );
}

export default ProjectCard;
