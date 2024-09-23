"use client"
import { useEffect } from 'react';
import anime from 'animejs';

const WaveBackground: React.FC = () => {
    useEffect(() => {
        const wave1 = "M0 141.694L50 135.677C100 129.66 200 117.626 300 81.524C400 45.422 500 -14.749 600 3.302C700 21.353 800 117.626 900 141.694C1000 165.762 1100 117.626 1150 93.558L1200 69.49V250H1150C1100 250 1000 250 900 250C800 250 700 250 600 250C500 250 400 250 300 250C200 250 100 250 50 250H0V141.694Z";
        const wave2 = "M0 0L50 5.95238C100 11.9048 200 23.8095 300 23.8095C400 23.8095 500 11.9048 600 17.8571C700 23.8095 800 47.619 900 53.5714C1000 59.5238 1100 47.619 1150 41.6667L1200 35.7143V250H1150C1100 250 1000 250 900 250C800 250 700 250 600 250C500 250 400 250 300 250C200 250 100 250 50 250H0V0Z";
        const wave3 = "M0 0L50 11.9048C100 23.8095 200 47.619 300 83.3333C400 119.048 500 166.667 600 148.81C700 130.952 800 47.619 900 35.7143C1000 23.8095 1100 83.3333 1150 113.095L1200 142.857V250H1150C1100 250 1000 250 900 250C800 250 700 250 600 250C500 250 400 250 300 250C200 250 100 250 50 250H0V0Z";
        const wave4 = "M0 125L50 138.889C100 152.778 200 180.556 300 152.778C400 125 500 41.6667 600 13.8889C700 -13.8889 800 13.8889 900 20.8333C1000 27.7778 1100 13.8889 1150 6.94444L1200 0V250H1150C1100 250 1000 250 900 250C800 250 700 250 600 250C500 250 400 250 300 250C200 250 100 250 50 250H0V125Z";

        const svgElement = document.querySelector('.wave-top') as HTMLElement | null;
        if (svgElement) {
            // 初始隐藏
            svgElement.classList.add('opacity-0'); // 使用 Tailwind 隐藏

            anime({
                targets: '.wave-top > path',
                easing: 'linear',
                duration: 8000,
                loop: true,
                d: [
                    { value: [wave1, wave2] },
                    { value: wave3 },
                    { value: wave4 },
                    { value: wave1 },
                ],
                begin: () => {
                    // 动画开始时显示 SVG
                    svgElement.classList.remove('opacity-0');
                    svgElement.classList.add('opacity-100', 'transition-opacity', 'duration-500');
                }
            });
        }
    }, []);

    return (
        <svg className="absolute top-0 left-0 w-full h-auto wave-top opacity-0" viewBox="0 0 1200 250">
            <path fill="#0099ff" fillRule="evenodd" clipRule="evenodd" d="M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V108.306Z" />
        </svg>
    );
};

export default WaveBackground;