import AppHeader from "./components/AppHeader";
import DifficultyBoards from "./components/DifficultyBoards";
import NavigationBar from "./components/NavigationBar";
import PageLayout from "./components/PageLayout";
import {useEffect, useState} from 'react'
import {getDifficultyGroups} from "./services/MongoDbApiService";

const difficulties = [
    {
        id: 'Dynamic Strength'
    },
    {
        id: 'Static Strength'
    },
    {
        id: 'Jumps & Leaps'
    },
    {
        id: 'Balance & Flexibility'
    },
]


export default function App() {

   const [groupData, setGroupData] = useState([])

   useEffect(() => {
       getDifficultyGroups().then(setGroupData)
   }, [])

    return (
      <PageLayout>
          <AppHeader />
          <DifficultyBoards difficulties={groupData} />
          <NavigationBar />
      </PageLayout>
  )
}