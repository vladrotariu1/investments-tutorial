import type {ReactNode} from "react";

interface HeroProps {
    imageSrc: string
    children: ReactNode
}

function Hero({ imageSrc, children } : HeroProps) {
    return (
        <div className="h-dvh relative">
            <div className="h-full">
                <img
                    className="h-full object-cover bg-center"
                    src={imageSrc}
                    alt="Put money to work"
                />
            </div>
            <div className="absolute top-0 h-full opacity-70 bg-white w-full"></div>
            <div className='absolute top-0 w-full h-full'>
                {
                    children
                }
            </div>
        </div>
    );
}

export default Hero;