import Image from "next/image";
import Login from "./login/page";
import Navbar from "@/Components/Navbar";
import FirstPage from "@/Components/FirstPage";

export default function Home() {
  return (
    <main id="Home">
        <Navbar />
        <FirstPage />
    </main>
  );
}
