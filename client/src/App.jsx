import Dashboard from "./dashboard";
import MainContainer from "./main-container";

export default function App() {
  return (
    <main className="container mx-auto min-w-screen min-h-screen">

      <div className="flex justify-between w-full">

      <Dashboard />
      <MainContainer />
      </div>



    </main>
  )
}