import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../views/index';
import BaseLayout from "../layouts/BaseLayout";
import { Signup, Login} from '../components/common';
import { TicTacToe, Catbakery, Rampcar, Firestone, Volcanoisland, Ninjahands, Hauntedschool, Fairypuzzle } from '../components/online games/index';
import { GameList } from '../components/game';
import About from "../components/about us/About";
import { GenreList } from '../components/genre';
import {Superspin, Battle, Monster, Sandbox, Slash} from '../components/online games/Action games/index.';
import { Highway, Mrracer, Skyrider, Crazyplane, Racinglimits,Drift } from '../components/online games/Driving games/index';
import {Deadland, Knight, Lunar, Risehero, Roomescape, Spooky}from "../components/online games/Adventure games/index";
import {Duo, Emerland, Foono, Hearts, Magictower} from "../components/online games/Card games/index";
import {College, Fashion, Festival, Gradma, Highschool, Summer} from "../components/online games/Dressup games/index";
import {Computer, Doors, Machine, Rooms, Think} from "../components/online games/Escape games/index";
import {Creepy, Evil, Horrortale, Krampus,Nextdoor} from "../components/online games/Horror games/index";
import {Farm, Favoriate, Logo, Words, World} from "../components/online games/Puzzle games/index";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = { <BaseLayout /> }>
          <Route path = "/" element = { <Home /> } />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/tictactoe" element={<TicTacToe/>}/>
          <Route path = "/catbakery" element={<Catbakery/>}  />
          <Route path = "/rampcar" element={<Rampcar/>} />
          <Route path = "/firestone" element={<Firestone/>}/>
          <Route path = "/volcano" element={<Volcanoisland/>}/>
          <Route path = "/ninja" element={<Ninjahands/>}  />
          <Route path = "/games" element={<GameList/>}  />
          <Route path = "/haunted" element = { <Hauntedschool />} />
          <Route path = "/fairy" element = { <Fairypuzzle />} />
          <Route path = "/genre" element = { <GenreList />} />
          <Route path = "/super" element = { <Superspin />} />
          <Route path = "/slash" element = { <Slash />} />
          <Route path = "/monster" element = { <Monster />} />
          <Route path = "/battle" element = { <Battle/>} />
          <Route path = "/sandbox" element = { <Sandbox/>} />
          <Route path = "/highway" element = { <Highway/>} />
          <Route path = "/mrracer" element = { <Mrracer/>} />
          <Route path = "/crazyplane" element = { <Crazyplane/>} />
          <Route path = "/skyrider" element = { <Skyrider/>} />
          <Route path = "/limits" element = { <Racinglimits/>} />
          <Route path = "/drift" element = { <Drift/>} />
          <Route path = "/about" element = { <About/>} />
          <Route path = "/dead" element = { <Deadland/>} />
          <Route path = "/knight" element = { <Knight/>} />
          <Route path = "/lunar" element = { <Lunar/>} />
          <Route path = "/risehero" element = { <Risehero/>} />
          <Route path = "/room" element = { <Roomescape/>} />
          <Route path = "/spooky" element = { <Spooky/>} />
          <Route path = "/duo" element = { <Duo/>} />
          <Route path = "/emerland" element = { <Emerland/>} />
          <Route path = "/foono" element = { <Foono/>} />
          <Route path = "/hearts" element = { <Hearts/>} />
          <Route path = "/magic" element = { <Magictower/>} />
          <Route path = "/college" element = { <College/>} />
          <Route path = "/fashion" element = { <Fashion/>} />
          <Route path = "/festival" element = { <Festival/>} />
          <Route path = "/gradma" element = { <Gradma/>} />
          <Route path = "/highschool" element = { <Highschool/>} />
          <Route path = "/summer" element = { <Summer/>} />
          <Route path = "/computer" element = { <Computer/>} />
          <Route path = "/doors" element = { <Doors/>} />
          <Route path = "/machine" element = { <Machine/>} />
          <Route path = "/rooms" element = { <Rooms/>} />
          <Route path = "/think" element = { <Think/>} />
          <Route path = "/creepy" element = { <Creepy/>} />
          <Route path = "/evil" element = { <Evil/>} />
          <Route path = "/horrortale" element = { <Horrortale/>} />
          <Route path = "/krampus" element = { <Krampus/>} />
          <Route path = "/next" element = { <Nextdoor/>} />
          <Route path = "/farm" element = { <Farm/>} />
          <Route path = "/favoriate" element = { <Favoriate/>} />
          <Route path = "/logo" element = { <Logo/>} />
          <Route path = "/words" element = { <Words/>} />
          <Route path = "/world" element = { <World/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
