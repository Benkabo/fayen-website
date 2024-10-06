export default function Hero() {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img">
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/25 z-[2]" />
      <div className="text-white z-[2]">
        <h2 className="text-4xl md:text-7xl lg:text-9xl">Discover your next</h2>
        <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-center tracking-widest">
          ADVENTURE
        </h1>
      </div>
    </div>
  );
}
