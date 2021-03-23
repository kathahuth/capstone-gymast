import AppHeader from "./components/AppHeader";
import DifficultyBoards from "./components/DifficultyBoards";
import NavigationBar from "./components/NavigationBar";
import PageLayout from "./components/PageLayout";
import {useEffect, useState} from 'react'
import {getDifficultyGroups} from "./services/MongoDbApiService";


export default function App() {

    return (
      <PageLayout>
          <AppHeader />
          <DifficultyBoards difficulties={groupData} />
          <NavigationBar />
      </PageLayout>
  )
}