const Gallery = () => {

  return (
    <>
    <section>
      <div class="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
          <div class="md:col-span-1">
            <div class="max-w-prose md:max-w-none">
              <h2 class="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>

              <p class="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                sequi.
              </p>
            </div>
          </div>

          <div class="md:col-span-3">
            <img src="https://i.pinimg.com/1200x/0c/e2/7f/0ce27f9fd5acd5a500e8458746bb4e2c.jpg" alt="gatito" />
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default Gallery;
