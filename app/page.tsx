import { HeroSection } from "@/components/home/hero-section";
import CDPlayer from "@/function/cd-player";
import Navbar from "@/components/home/navbar";
import WaveBackground from '../function/wave-bg';
import Projects from "@/components/project/project"; // 导入 Projects 组件
import ArrowButton from "@/function/arrow-button";
import Individual from "@/components/individual/individual";
export const revalidate = 60;

export default function Page() {
  return (
    <div className="w-full h-screen">
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <WaveBackground />
      </div>
      {/* 第一部分：HeroSection */}
      <div id="home" className="relative flex flex-col items-center justify-center h-[calc(100vh-64px)] gap-10">
        <Navbar />
        <div className="flex items-center justify-center h-screen px-4">
          <HeroSection />
        </div>
        <div className="fixed top-6 right-6 rounded-full z-10">
          <CDPlayer />
        </div>
      </div>

      {/* 滚动按钮 */}
      <div className="flex justify-center" >
        <ArrowButton />
      </div>

      {/* 第二部分：Individual 部分 */}
      <div id="individual" className="w-full py-20">
        <Individual /> {/* 项目展示组件 */}
      </div>
      <div id="projects" className="w-full py-20">
        <Projects /> {/* 项目展示组件 */}
      </div>
    </div>
  );
}