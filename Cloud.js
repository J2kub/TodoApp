export default function CloudLayer() {
    return (
        <>
            {/* Biely veľký cloud zľava doprava */}
            <FloatingCloud direction="left" top="8" size="44" color="white" duration="40s" />

            {/* Svetlosivý menší cloud zľava doprava */}
            <FloatingCloud direction="left" top="20" size="28" color="gray-300" duration="30s" />

            {/* Sivý cloud sprava doľava */}
            <FloatingCloud direction="right" top="14" size="36" color="gray-400" duration="50s" />
        </>
    );
}

function FloatingCloud({ direction, top, size, color, duration }) {
    const baseClass = direction === "left" ? "animate-cloud-left left-[-200px]" : "animate-cloud-right right-[-200px]";
    return (
        <div
            className={`absolute top-${top} ${baseClass} w-${size} pointer-events-none z-0 opacity-50`}
            style={{ animationDuration: duration, willChange: "transform" }}
        >
            <svg viewBox="0 0 64 64" fill="currentColor" className={`text-${color} w-full h-full`}>
                <path d="M48.5 26.6c-.9-5.5-5.6-9.6-11.4-9.6-2.4 0-4.6.8-6.4 2.1-2-3.1-5.4-5.1-9.2-5.1-6.1 0-11 4.9-11 11 0 .8.1 1.5.2 2.3C4.3 28.1 0 32.9 0 38.5 0 44.3 4.7 49 10.5 49h38c6 0 10.5-4.7 10.5-10.5 0-5.3-3.9-9.8-9-10.9z" />
            </svg>
        </div>
    );
}
