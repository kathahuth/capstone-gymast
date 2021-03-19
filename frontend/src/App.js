import AppHeader from "./components/AppHeader";
import DifficultyBoards from "./components/DifficultyBoards";
import NavigationBar from "./components/NavigationBar";
import PageLayout from "./components/PageLayout";

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
  return (
      <PageLayout>
          <AppHeader />
          <DifficultyBoards difficulties={difficulties} />
          <NavigationBar />
      </PageLayout>
  )
}