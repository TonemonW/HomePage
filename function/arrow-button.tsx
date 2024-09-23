"use client"
// 向下箭头按钮组件
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 双箭头按钮
const ArrowButton = () => {
    const [isVisible, setIsVisible] = useState(true);

    // 监听页面滚动，滚动后隐藏按钮
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (!isVisible) return null; // 如果按钮不可见，返回null

    return (
        <motion.a
            href="#projects" // 链接到项目部分
            className="inline-block"
            whileHover={{ scale: 1.1 }} // hover 时放大
            whileTap={{ scale: 0.9 }} // 点击时缩小
            transition={{ type: "spring", stiffness: 200, damping: 10 }} // 使用弹簧动画
        >
            {/* 包含文本 "More about me" 和向下的双箭头 */}
            <div className="flex items-center space-x-2 hover:text-blue-700">

                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40" // 设定箭头的宽度
                    height="40" // 设定箭头的高度
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    {/* 圆角双箭头形状 */}
                    <path d="M12 19c-.39 0-.77-.15-1.06-.44l-5-5a1.5 1.5 0 1 1 2.12-2.12L12 15.88l4.94-4.94a1.5 1.5 0 1 1 2.12 2.12l-5 5c-.29.29-.67.44-1.06.44z" />
                    <path d="M12 13c-.39 0-.77-.15-1.06-.44l-5-5a1.5 1.5 0 1 1 2.12-2.12L12 9.88l4.94-4.94a1.5 1.5 0 1 1 2.12 2.12l-5 5c-.29.29-.67.44-1.06.44z" />
                </motion.svg>
                <span className="text-lg font-semibold">More about me</span>

            </div>
        </motion.a>
    );
};

export default ArrowButton;