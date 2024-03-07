import { Instagram, Facebook } from "lucide-react"
import "./style.css"
export default function Footer() {
    return (
        <footer className="flex justify-between px-5 items-center py-5 bg-[#262626] fontstyle font-semibold">
            {/* left side */}
            <div>
                <p className="text-white">Copyright&copy; <span className="text-[#82b440]">IEM UEM Kolkata Walkathon</span></p>
            </div>
            {/* right side */}
            <div className="flex justify-between items-center gap-2 ">
                <a href="#"><Instagram color="#82b440" /></a>
                <a href="#"><Facebook color="#82b440" /></a>
            </div>
        </footer>
    )
}
