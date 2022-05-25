import Mint from "./pages/Mint";
import { Link } from 'react-router-dom';
import Profile from "./pages/Profile";
import Transfer from "./pages/Transfer";
import { Routes, Route } from "react-router-dom"

function App() {
  return (


<div className="App">

<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
<div class="container flex flex-wrap justify-between items-center mx-auto">



<div class=" w-full md:block md:w-auto" id="mobile-menu">
<ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
<li>
<Link to="/" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Profile</Link>
</li>
<li>
<Link to="/transfer" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Transfer</Link>
</li>
<li>
<Link to="/Mint" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Mint</Link>
</li>
</ul>
</div>
</div>
</nav>

  
<Routes>
  <Route path="/" element={ <Profile/> } />   
  <Route path="/mint" element={ <Mint/> } />
  <Route path="/transfer" element={ <Transfer/> } />
</Routes>
</div>
  );
}

export default App;
