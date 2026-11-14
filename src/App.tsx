import "./App.css";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useState } from "react";
import { match } from "ts-pattern";
function App() {

    const [currentPage, setCurrentPage] = useState<"Home" | "Search" | "Profile">("Home")
    
    return (
    <div>
    <header>
    <button type="button" onClick={() => setCurrentPage("Home")}>Home</button>
    <button type="button" onClick={() => setCurrentPage("Search")}>Search</button>
    <button type="button" onClick={() => setCurrentPage("Profile")}>Profile</button>
    </header>
    {
        match(currentPage)
    .with("Home", () => <Home />)
    .with("Search", () => <Search />).with("Profile", () => <Profile />)
    .exhaustive()
    }
    </div>

)

}

export default App;
