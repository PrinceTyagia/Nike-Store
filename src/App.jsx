import React from 'react'
import {
  Hero,
  Sale,
  FlexContent,
  Stories,
  Footer,
  Navbar,
  Cart,
} from "./components";

import { heroapi ,popularsales,toprateslaes ,highlight,sneaker,story , footerAPI} from "./data/data.js";
const App = () => {
  return (
    <>
    <Navbar/>
    <Cart/>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sale endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sale endpoint={toprateslaes} ifExists />
        <FlexContent endpoint={sneaker} ifExists />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
}

export default App