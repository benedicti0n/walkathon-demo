import ShiftingCountdown from "../UI/ShiftingCountdown"

export default function Hero() {
    return (
        <section>
            <div className="w-full bg-center bg-cover h-[100vh] fontstyle" style={{ backgroundImage: 'url("/marathonbg.jpg"' }}>
                <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-70">
                    <div className="text-center text-3xl font-semibold">
                        <h1 className="text-[#82b440]">IEM-UEM</h1>
                        <h3 className="text-white uppercase">kolkata Walkathon</h3>
                        <h1 className="text-[#82b440] text-5xl foryear">2024</h1>
                        <h1 className="text-2xl font-semibold text-white lg:text-6xl">24th March,2024 from<span className="text-[#82b440]"> IEM</span> Ashram Campus</h1>
                        {/* timer section */}
                        <ShiftingCountdown />
                        <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-[#82b440] rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Register Here</button>
                    </div>
                </div>
            </div>

        </section>

    )
}
