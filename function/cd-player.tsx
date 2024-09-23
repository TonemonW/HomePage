"use client";
import React, { useState, useEffect } from "react";
import Howler from "react-howler";
import { motion } from "framer-motion";

const cdAnimation = {
    rotate: {
        initial: { rotate: 0 },
        animate: { rotate: 360 },
        transition: { repeat: Infinity, duration: 10, ease: "linear" },
    },
};

const CDPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(true); // 初始值为 true, 自动播放音乐

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        // 页面加载时自动播放音乐
        setIsPlaying(true);
    }, []);

    return (
        <div className="relative flex flex-col items-center p-10 select-none">
            {/* Howler 控制背景音乐 */}
            <Howler
                src="/audio/background-music.mp3"
                playing={isPlaying}
                loop={true}
                volume={0.5}
            />

            {/* CD 样式 */}
            <motion.div
                className="relative w-32 h-32 rounded-full border-1 border-gray-300 overflow-hidden cursor-pointer"
                animate={isPlaying ? cdAnimation.rotate.animate : cdAnimation.rotate.initial} // 控制动画旋转
                transition={cdAnimation.rotate.transition}
                onClick={togglePlay}
                style={{
                    backgroundImage: `url("/images/cd-image2.jpg")`, // 使用正确的图片路径
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* 中间的小圆圈，代表 CD 的中心 */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                </div>
            </motion.div>
        </div>
    );
};

export default CDPlayer;