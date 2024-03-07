import { Mail, MapPin, Phone } from "lucide-react";
export default function Contact() {
    return (
        <section className="bg-white fontstyle">
            <div className="container px-6 py-12 mx-auto">
                <div>
                    <p className="font-medium text-[#82b440]">Contact us</p>
                    <h1 className="mt-2 text-3xl font-semibold text-gray-800 md:text-4xl">Get in touch</h1>
                    <p className="mt-3 text-gray-500">Our friendly team would love to hear from you.</p>
                </div>
                <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                        <div>
                            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100">
                                <Mail />
                            </span>
                            <h2 className="mt-4 text-base font-medium text-gray-800">Email</h2>
                            <p className="mt-2 text-sm text-gray-500">Our friendly team is here to help.</p>
                            <p className="mt-2 text-sm text-blue-500">iem2024@gmail.com</p>
                        </div>
                        <div>
                            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100">
                                <MapPin />
                            </span>
                            <h2 className="mt-4 text-base font-medium text-gray-800">Office</h2>
                            <p className="mt-2 text-sm text-gray-500">Come say hello at our office HQ.</p>
                            <p className="mt-2 text-sm text-blue-500">IEM Ashram Campus</p>
                        </div>
                        <div>
                            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100">
                                <Phone />
                            </span>
                            <h2 className="mt-4 text-base font-medium text-gray-800">Phone</h2>
                            <p className="mt-2 text-sm text-gray-500">Mon-Fri from 8am to 5pm.</p>
                            <p className="mt-2 text-sm text-blue-500">+1 (555) 000-0000</p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                        <iframe width="100%" height="100%" frameBorder={0} title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=IEM%20Ashram%20Campus&ie=UTF8&t=&z=14&iwloc=B&output=embed" />
                    </div>
                </div>
            </div>
        </section>
    );
}
