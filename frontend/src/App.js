import AppHeader from "./components/AppHeader";
import GroupPage from "./pages/GroupPage";
import NavigationBar from "./components/navigation/NavigationBar";
import PageLayout from "./components/PageLayout";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import FamilyPage from "./pages/FamilyPage";
import CategoryPage from "./pages/CategoryPage";
import ListOfDifficultyItemPage from "./pages/ListOfDifficultyItemPage";
import GymnastPage from "./pages/GymnastPage";
import {useState} from "react";


export default function App() {

    const [watchlistDifficulty, setWatchlistDifficulty] = useState([]);
    const isOnWatchlistDifficulty = (name) => watchlistDifficulty.includes(name);
    const onWatchlistDifficultyClick = (name) => {
        if (isOnWatchlistDifficulty(name)) {
            setWatchlistDifficulty(watchlistDifficulty.filter(existingName => existingName!==name))
        } else{
            setWatchlistDifficulty([...watchlistDifficulty, name])
        }
    }



    return (
        <Router>
            <PageLayout>
            <AppHeader />
            <Switch>
              <Route exact path="/">
                  <p> This is the start page</p>
              </Route>
              <Route exact path="/gymnast/:username">
                  <GymnastPage watchlistDifficulty={watchlistDifficulty}/>
              </Route>
              <Route exact path="/difficulty">
                  <GroupPage/>
              </Route >
                <Route exact path="/difficulty/:groupId/:familyId/:categoryId">
                    <ListOfDifficultyItemPage onWatchlistDifficultyClick={onWatchlistDifficultyClick} isOnWatchlistDifficulty={isOnWatchlistDifficulty}/>
                </Route>
                <Route exact path="/difficulty/:groupId/:familyId">
                    <CategoryPage/>
                </Route>
                <Route exact path="/difficulty/:groupId">
                   <FamilyPage/>
                </Route>
            </Switch>
                <NavigationBar />
            </PageLayout>
        </Router>
  )
}