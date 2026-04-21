import Image from "next/image";
import Vision from "@/section/vision";
import Caraousal from "@/components/Carousal";
import Mission from "@/section/mission";
import MissionInAction from "@/section/portfolio";
import Newsletter from "@/section/newsletter";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-100">
        <Caraousal /> 
        <Vision/>
        <Mission/>
        <MissionInAction/>
        <Newsletter/>
      </main>
    </>
  );
}
