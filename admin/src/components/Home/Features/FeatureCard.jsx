const FeatureCard = () => {
  return (
    <section className="py-10 flex flex-col gap-y-10 items-center">
      <div className="grid gap-y-4">
        <h1 className="text-white text-4xl font-semibold	">
          Choose the learning category you need.
        </h1>
        <p className="text-white font-normal text-base">
          Cupcake danish tiramisu powder soda ginger cake. Dessert carrot cake
          tartsweet marzipan for fruitcake.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:gap-x-6">
        <div>
          <img src="/images/features/img1.png" alt="" />
        </div>

        <div>
          <img src="/images/features/img2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
