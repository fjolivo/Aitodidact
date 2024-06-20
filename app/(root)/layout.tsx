import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster"
import PodcastPlayer from "@/components/PodcastPlayer";
import BackgroundGradient from "@/components/ShaderGradient";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <BackgroundGradient />
        <LeftSidebar />
        
        <section className="relative flex min-h-screen flex-1 flex-col px-4 py-8 sm:px-14">
          <div className=" relative mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
            <div className="relative flex h-16 items-center justify-between md:hidden">
              <Image 
                src="/icons/logo.svg"
                width={30}
                height={30}
                alt="menu icon"
              />
              <MobileNav />
            </div>
            <div className="flex flex-col md:pb-14">
              <Toaster />

              {children}
            </div>
          </div>
        </section>

        <RightSidebar />
      </main>

      <PodcastPlayer />
    </div>
  );
}
