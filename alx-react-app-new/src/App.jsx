import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile
        name="Alice"
        age={28}
        bio="Loves hiking and outdoor adventures."
      />
      <UserProfile
        name="Bob"
        age={34}
        bio="Avid reader and coffee enthusiast."
      />
      <Footer />
    </>
  );
}

export default App;
