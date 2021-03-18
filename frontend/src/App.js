import AppHeader from "./components/AppHeader";
import DifficultyBoards from "./components/DifficultyBoards";
import NavigationBar from "./components/NavigationBar";
import PageLayout from "./components/PageLayout";

export default function App() {
  return (
      <PageLayout>
          <AppHeader />
          <DifficultyBoards />
          <NavigationBar />
      </PageLayout>
  )
}