import AppHeader from "./components/AppHeader";
import GroupPage from "./pages/GroupPage";
import NavigationBar from "./components/NavigationBar";
import PageLayout from "./components/PageLayout";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import FamilyPage from "./pages/FamilyPage";
import CategoryPage from "./pages/CategoryPage";
import ListOfDifficultyItemPage from "./pages/ListOfDifficultyItemPage";
import GymnastPage from "./pages/GymnastPage";


export default function App() {

    return (
        <Router>
            <PageLayout>
            <AppHeader />
            <Switch>
              <Route exact path="/">
                  <p> This is the start page</p>
              </Route>
              <Route exact path="/gymnast/:username">
                  <GymnastPage/>
              </Route>
              <Route exact path="/difficulty">
                  <GroupPage/>
              </Route >
                <Route path="/difficulty/:groupId/:familyId/:categoryId">
                    <ListOfDifficultyItemPage/>
                </Route>
                <Route path="/difficulty/:groupId/:familyId">
                    <CategoryPage/>
                </Route>
                <Route path="/difficulty/:groupId">
                   <FamilyPage/>
                </Route>
            </Switch>
                <NavigationBar />
            </PageLayout>
        </Router>
  )
}