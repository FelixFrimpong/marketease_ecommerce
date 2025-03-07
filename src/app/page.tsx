import Image from "next/image";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/shared/theme-toggle";

export default function Home() {
  return (
    <div>
   <div className="w-100% flex justify-end">
    <ThemeToggle/>
    </div>
    <h1 className="text-blue-500 font-barlow">Welcome to the course!</h1>
    <Button variant = "destructive" >Click here</Button>
   </div>
  ); 
}
