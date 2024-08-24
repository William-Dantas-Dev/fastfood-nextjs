import { Banner, Categories, Menu, Navbar, Services } from "@/components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />
      <Categories />
      <Menu />
    </div>
  );
}
