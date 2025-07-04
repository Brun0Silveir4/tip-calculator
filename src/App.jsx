import "./App.scss"
import MainCard from "./components/MainCard/MainCard"
import Title from "./components/utils/title/Title"

export default function App(){
  return(
    <div className="container">
      <Title />
      <MainCard />
    </div>
  )
}