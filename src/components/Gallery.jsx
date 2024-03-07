import galleryData from "../utils/galleryData";// Import the array of image objects

const Gallery = () => {
    return (
        <section className="text-gray-600 body-font pt-10 fontstyle">
            <h1 className="text-center font-semibold text-6xl">Some Moments</h1>
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {/* Use map function to render each image dynamically */}
                    {galleryData.map(image => (
                        <div key={image.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-fill object-center w-full h-full block" src={image.src} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
