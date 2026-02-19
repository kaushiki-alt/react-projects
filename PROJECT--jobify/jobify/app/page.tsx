import Image from "next/image";
import logo from '@/assets/logo.svg'
import landingImage from '@/assets/main.svg'
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
      <main>
        <header className="max-w-6xl mx-auto px-4 py-6 sm:px-8">
          <Image src={logo} alt="logo" />
        </header>

        <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr_400px] items-center">
          <div>
            <h1 className="font-bold capitalize text-4xl md:text-7xl">
              job <span className="text-primary">tracking</span> app
            </h1>

            <p className="leading-loose mt-4 max-w-md ">
              I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle single-origin coffee chia. Aesthetic post-ironic venmo, quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch narwhal.
            </p>

            {/* button */}
            <Button asChild className="mt-4">
              <Link href='/add-job'>Get started</Link>
              </Button>
          </div>

          <Image src={landingImage} alt="landing" className="hidden lg:block "/>

        </section>
      </main >
  );
}