"use client";
import { NICKNAME } from "@/constants/info";
import { TypeIntro } from "./type-intro";
import { cn, sayHi } from "@/function/utils";
import ModeToggle from "@/function/mode-toggle";
import { motion } from "framer-motion";
// 动画配置
const fadeInUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: delay / 1000, duration: 0.6 } },
});

export const HeroSection = () => {
  let delay = 0;

  // 递增延迟时间
  const getDelay = () => (delay += 200);

  return (
    <div className="flex min-h-full max-w-screen-md flex-col justify-center gap-6 px-6 md:px-10 2xl:max-w-7xl select-none">
      {/* 第一行问候语 */}
      <motion.div className="flex items-center" {...fadeInUp(getDelay())}>
        <strong className="text-2xl md:text-5xl">{sayHi()},</strong>
        <div className="ml-4 md:ml-10">
          <ModeToggle />
        </div>
      </motion.div>

      {/* 第二行 I’m 和 昵称 */}
      <motion.div className="inline-flex items-center" {...fadeInUp(getDelay())}>
        <p className="text-2xl md:text-5xl mr-2 md:mr-4">I&apos;m</p>
        <strong
          className={cn(
            "text-5xl !leading-normal md:text-7xl bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400"

          )}
          style={{ WebkitTextFillColor: "transparent" }}
        >
          {NICKNAME}
        </strong>
      </motion.div>

      {/* 第三行 TypeIntro */}
      <motion.div className="mt-4 md:mt-6" {...fadeInUp(getDelay())}>
        <TypeIntro />
      </motion.div>

      {/* 第四行 技术栈 */}
      <motion.p className="text-2xl md:text-5xl" {...fadeInUp(getDelay())}>
        <span className="font-semibold text-[#99CCFF]">React, </span>
        <span className="font-semibold text-[#0099CC]">TypeScript, </span>
        <span className="font-semibold text-[#007acc]">Next.js</span>
      </motion.p>

      {/* 第五行 个人介绍 */}
      <motion.p
        className="text-base md:text-2xl !font-playpen tracking-widest font-semibold"
        {...fadeInUp(getDelay())}
      >
        <em>Strive to become a better version of myself 💪</em>
      </motion.p>
      {/* 媒体图标 */}
      <motion.div className="flex space-x-4 mt-4" {...fadeInUp(getDelay())}>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#99CCFF]">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#99CCFF]">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0099CC]">
          <i className="fab fa-x-twitter fa-2x"></i>
        </a>
        <a href="mailto:your-email@example.com" className="text-gray-600 hover:text-[#007acc]">
          <i className="fas fa-envelope fa-2x"></i>
        </a>
      </motion.div>
    </div>
  );
};