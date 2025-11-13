

const Main = () => {
  return (

<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

  <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    <div>
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">El éxito es la suma de pequeños esfuerzos, repetidos día tras día.<span className="text-blue-600">Messi</span></h1>
      <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Productos Nacionales.</p>
    </div>


    <div className="relative ms-4">
      <img className="w-full rounded-md" src="https://w0.peakpx.com/wallpaper/146/111/HD-wallpaper-messi-argentina-barcelona.jpg" alt="Hero Image" />
      <div className="absolute inset-0 -z-1 bg-linear-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>
    </div>
  </div>
</div>
  );
};

export default Main;
