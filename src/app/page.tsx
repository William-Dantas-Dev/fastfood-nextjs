import { Banner, Categories, FoodCard, Footer, Menu, Navbar, Services } from "@/components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />
      <Categories />
      <Menu />
      <div className="mx-auto grid grid-cols-1 gap-4 px-6 md:grid-cols-2 lg:px-32 md:px-10 h-[500px]">
        <div className="h-full sm:h-full">
          <FoodCard
            title="25% Discount"
            discount="$4.25"
            price="Only $4.25"
            image="/foods-menu.png"
          />
        </div>
        <div className="flex flex-col gap-4 h-full">
          <div className="flex-1 h-full">
            <FoodCard
              title="Save 20%"
              discount="20% Off"
              price="Now $3.80"
              image="/ice-cream-menu.png"
            />
          </div>
          <div className="flex-1 h-full">
            <FoodCard
              title="Burger Bliss"
              discount="15% Off"
              price="Get it for $2.60"
              image="/burger-food-menu.png"
            />
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}
