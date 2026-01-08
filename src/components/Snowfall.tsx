
import { useEffect, useState } from 'react';

const Snowfall = () => {
    const [flakes, setFlakes] = useState<Array<{ id: number; left: string; animationDuration: string; animationDelay: string; opacity: number; size: string }>>([]);

    useEffect(() => {
        // Generate flakes only once on mount to avoid re-renders causing jumpiness
        const newFlakes = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`, // 2-5 seconds
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.3,
            size: `${Math.random() * 4 + 2}px` // 2-6px
        }));
        setFlakes(newFlakes);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            {flakes.map((flake) => (
                <div
                    key={flake.id}
                    className="absolute top-[-10px] rounded-full bg-white animate-fall"
                    style={{
                        left: flake.left,
                        width: flake.size,
                        height: flake.size,
                        opacity: flake.opacity,
                        animationDuration: flake.animationDuration,
                        animationDelay: flake.animationDelay,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Snowfall;
