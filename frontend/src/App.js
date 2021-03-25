import AppHeader from "./components/AppHeader";
import GroupPage from "./pages/GroupPage";
import NavigationBar from "./components/NavigationBar";
import PageLayout from "./components/PageLayout";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";


export default function App() {

    return (
        <Router>
            <PageLayout>
            <AppHeader />
            <Switch>
              <Route exact path="/">
                  <p> This is the start page</p>
              </Route>
              <Route path="/difficulty">
                  <GroupPage/>
              </Route >
            </Switch>
                <NavigationBar />
            </PageLayout>
        </Router>
  )
}