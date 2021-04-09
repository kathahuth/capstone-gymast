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
import WelcomePage from "./pages/WelcomePage";


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
            <Switch>
                <Route exact path="/welcome">
                    <WelcomePage/>
                </Route>
                <Route exact path="/gymnast/:username">
                    <PageLayout>
                        <AppHeader/>
                        <GymnastPage watchlistDifficulty={watchlistDifficulty}/>
                        <NavigationBar/>
                    </PageLayout>
                </Route>
                <Route exact path="/difficulty">
                    <PageLayout>
                        <AppHeader/>
                        <GroupPage/>
                        <NavigationBar/>
                    </PageLayout>
                </Route>
                <Route path="/difficulty/:groupId/:familyId/:categoryId">
                    <PageLayout>
                        <AppHeader/>
                        <ListOfDifficultyItemPage onWatchlistDifficultyClick={onWatchlistDifficultyClick} isOnWatchlistDifficulty={isOnWatchlistDifficulty}/>
                        <NavigationBar/>
                    </PageLayout>
                </Route>
                <Route path="/difficulty/:groupId/:familyId">
                    <PageLayout>
                        <AppHeader/>
                        <CategoryPage/>
                        <NavigationBar/>
                    </PageLayout>
                </Route>
                <Route path="/difficulty/:groupId">
                    <PageLayout>
                        <AppHeader/>
                        <FamilyPage/>
                        <NavigationBar/>
                    </PageLayout>
                </Route>
            </Switch>
        </Router>
  )
}