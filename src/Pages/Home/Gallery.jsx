import "./Gallery.css";

const Gallery = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center my-8">
        Gallery
      </h1>

      <div className="my-4">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="relative w-full lg:w-1/2 p-1 md:p-2 hover:scale-105 transition-all overflow-hidden">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 rounded-lg light-effect"></div>
            </div>

            <div className="relative w-full lg:w-1/2 p-1 md:p-2 hover:scale-105 transition-all overflow-hidden">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://plus.unsplash.com/premium_photo-1714265045351-a2f5595bd6f7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 rounded-lg light-effect"></div>
            </div>
            <div className="relative w-full p-1 md:p-2 hover:scale-105 transition-all overflow-hidden">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1627556704283-452301a45fd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 rounded-lg light-effect"></div>
            </div>
          </div>
          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="relative w-full p-1 md:p-2 hover:scale-105 transition-all overflow-hidden">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1658235081452-c2ded30b8d9f?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 rounded-lg light-effect"></div>
            </div>
            <div className="relative w-full lg:w-1/2 p-1 md:p-2 hover:scale-105 transition-all overflow-hidden">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://plus.unsplash.com/premium_photo-1714397477882-bd57a72bfd50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 rounded-lg light-effect"></div>
            </div>
            <div className="relative w-full lg:w-1/2 p-1 md:p-2 hover:scale-105 transition-all overflow-hidden">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1496469888073-80de7e952517?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 rounded-lg light-effect"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
