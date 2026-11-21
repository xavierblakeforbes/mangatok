import "./App.css";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useState } from "react";
import { match } from "ts-pattern";
import { signIn,signOut } from "./auth/auth";
import { useAuth } from "./auth/AuthUserProvider";
function App() {

    const [currentPage, setCurrentPage] = useState<"Home" | "Search" | "Profile">("Home")
    const [loggedIn,SetLoggedIn] = useState(false)
    const {user} = useAuth()

    const handleLoginClick = async () => {
    if(loggedIn){
      await signOut()
      
    }
    else {
      await signIn ()
    }
    SetLoggedIn(!loggedIn) // flip it
  };

    return (
    <div>
    <header>
    <button type="button" onClick={() => setCurrentPage("Home")}>Home</button>
    <button type="button" onClick={() => setCurrentPage("Search")}>Search</button>
    <button type="button" onClick={() => setCurrentPage("Profile")}>Profile</button>
    <button onClick={handleLoginClick}>{loggedIn ? "Sign Out" : "Log in"}!</button>
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
