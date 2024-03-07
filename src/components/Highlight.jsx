export default function Highlight() {
    return (
        <div className="relative w-full bg-center bg-cover h-[38rem]">
            {/* Add container for video and overlay */}
            <div className="absolute inset-0">
                {/* Replace the backgroundImage style with a video */}
                <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
                    <source src="/walkathon.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Add background overlay */}
                <div className="absolute inset-0 bg-black opacity-70" />
            </div>
            <div className="flex items-center justify-center w-full h-full text-white relative z-10">
                <div className="text-center fontstyle space-y-5">
                    <h1 className="text-3xl font-semibold lg:text-4xl"><span className="text-[#82b440]">Walk With Us. </span><br />We are waiting for your presence</h1>
                    <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#82b440] rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        Join Us
                    </button>
                </div>
            </div>
        </div>
    );
}
