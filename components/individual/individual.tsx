"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = {
    cooking: {
        text: '我喜欢做饭',
        images: [
            '/images/cd-image1.jpg',
            '/images/cd-image1.jpg',
            '/images/cd-image1.jpg',
            '/images/cd-image1.jpg',
            '/images/cd-image1.jpg',
            '/images/cd-image1.jpg',
        ],
        details: '更多关于我做饭的细节...',
    },
    pets: {
        text: '我有三只猫猫。',
        images: [
            '/images/cd-image1.jpg',
            '/images/cd-image1.jpg',
            '/images/cd-image1.jpg',
        ],
        details: '更多关于我的猫的信息...',
    },
    game: {
        text: '我喜欢玩各种类型的游戏',
        images: [
            '/images/cd-image1.jpg',
            '/images/cd-image1.jpg',
            '/images/cd-image1.jpg',
            '/images/cd-image1.jpg',
            '/images/cd-image1.jpg',
        ],
        details: '更多关于我的游戏兴趣...',
    },
};

type Section = 'cooking' | 'pets' | 'game';

export default function Home() {
    const [selected, setSelected] = useState<Section>('cooking');
    const [showDetail, setShowDetail] = useState<number | null>(null);

    const handleClick = (section: Section, index: number) => {
        setSelected(section);
        setShowDetail(index); // 设置当前点击的图片索引，显示擦除动画
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b ">
            <h1 className="text-6xl font-bold text-center mb-12 drop-shadow-lg">
                About Me
            </h1>

            <nav className="flex space-x-8 mb-10">
                {Object.keys(sections).map((section) => (
                    <motion.button
                        key={section}
                        className={`px-8 py-3 rounded-full text-lg transition duration-300 ease-in-out transform ${selected === section
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                            : 'shadow hover:shadow-lg hover:scale-105'
                            }`}
                        onClick={() => setSelected(section as Section)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </motion.button>
                ))}
            </nav>

            {/* 卡片内容 */}
            <div className="relative w-full max-w-5xl">
                <motion.div
                    key={selected}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    className="p-8 rounded-xl shadow-xl bg-white text-center"
                >
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                        {selected.charAt(0).toUpperCase() + selected.slice(1)}
                    </h2>
                    <p className="mb-6 text-lg text-gray-600">{sections[selected].text}</p>

                    {/* 图片展示 */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {sections[selected].images.map((image, index) => (
                            <motion.div
                                key={index}
                                className="relative w-full h-48 overflow-hidden rounded-lg shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => handleClick(selected, index)}
                            >
                                {/* 图片展示 */}
                                <motion.img
                                    src={image}
                                    alt={`${selected} image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />

                                {/* AnimatePresence for wipe animation */}
                                <AnimatePresence>
                                    {showDetail === index && (
                                        <motion.div
                                            className="absolute inset-0 bg-white flex items-center justify-center text-center p-4"
                                            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                                            animate={{ clipPath: 'circle(150% at 50% 50%)' }}
                                            exit={{ clipPath: 'circle(0% at 50% 50%)' }}
                                            transition={{ duration: 0.8 }}
                                            onClick={() => setShowDetail(null)} // 点击后关闭详情
                                        >
                                            <div>
                                                <h3 className="text-xl font-bold mb-4">
                                                    {selected.charAt(0).toUpperCase() + selected.slice(1)}
                                                </h3>
                                                <p className="text-gray-600">
                                                    {sections[selected].details}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}