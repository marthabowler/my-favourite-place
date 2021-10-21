import TableContents from "./components/Table";
import AppHeader from "./components/AppHeader";
import MainContent from "./components/MainContent";
import AppFooter from "./components/AppFooter";

function App(): JSX.Element {
  return (
    <>
      <AppHeader />
      <TableContents />
      <MainContent />
      <AppFooter />
    </>
  );
}

export default App;
