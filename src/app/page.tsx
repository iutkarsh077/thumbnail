import HeroSection from "@/components/custom/HeroSection"
import Sidebar from "@/components/custom/Sidebar"

const Home = () =>{
  return (
    <div className="flex  h-screen w-full">
      <div className="w-1/4 border-r border-gray-800">
        <Sidebar/>
      </div>
      <div className="flex-1">
        <HeroSection/>
      </div>
    </div>
  )
}

export default Home