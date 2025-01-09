import { useRef, useState } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { PuffLoader } from 'react-spinners'; // Import PuffLoader

const LazyLoading = ({
    src,
    className = '',
    autoPlay = false,
    loop = false,
    muted = true,
    playsInline = true,
}) => {
    const containerRef = useRef();
    const lockRef = useRef(false);
    const [isLoading, setIsLoading] = useState(true);
    const { isIntersecting } = useIntersectionObserver(containerRef, {
        threshold: 0.25, // Adjust threshold for earlier trigger
    });

    if (isIntersecting) {
        lockRef.current = true; // Lock once the video is intersected
    }

    const handleLoadedData = () => {
        setIsLoading(false); // Stop showing spinner once video is ready
    };

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
            }}
            ref={containerRef}
        >
            {isLoading && lockRef.current && (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 10,
                    }}
                >
                    <PuffLoader color="#3498db" size={60} />
                </div>
            )}

            {/* Render video once it's intersected */}
            {lockRef.current && (
                <video
                    src={src}
                    preload="auto" // Ensure video data is loaded as soon as possible
                    autoPlay={autoPlay}
                    muted={muted}
                    loop={loop}
                    playsInline={playsInline}
                    className={className}
                    onLoadedData={handleLoadedData} // Triggered when the video is ready
                    style={{
                        opacity: isLoading ? 0 : 1, // Hide video until it's loaded
                        transition: 'opacity 0.3s ease',
                    }}
                    onError={(e) => console.error('Video loading error:', e)} // Debug errors
                />
            )}
        </div>
    );
};

export default LazyLoading;
