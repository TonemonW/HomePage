"use client"
import { motion } from "framer-motion";

const projects = [
    {
        title: "Project 1",
        description: "A short description of the project goes here.",
        image: "/images/cd-image1.jpg",
        link: "#",
    },
    {
        title: "Project 2",
        description: "A short description of the project goes here.",
        image: "/images/cd-image1.jpg",
        link: "#",
    },
    {
        title: "Project 3",
        description: "A short description of the project goes here.",
        image: "/images/cd-image1.jpg",
        link: "#",
    },
];

type Project = {
    title: string;
    description: string;
    image: string;
    link: string;
};

const ProjectCard = ({ title, description, image }: Project) => {
    return (
        <motion.div
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }} // Hover时放大效果
            whileTap={{ scale: 0.95 }}   // 点击时稍微缩小
            transition={{ duration: 0.3 }} // 动画持续时间
        >
            <motion.img
                src={image}
                alt={title}
                className="w-full h-56 object-cover"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }} // Hover时图像变亮
                transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm">{description}</p>
            </div>
        </motion.div>
    );
};

export default function Projects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                />
            ))}
        </div>
    );
}