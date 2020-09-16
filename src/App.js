/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import  Navbar from './components/Navbar';
import  Home from './components/Home';
import  Anime from './components/Anime';
import  Metacritic from './components/Metacritic';
import  Categories from './components/Categories';
import  Shadowofwar_Shadowofmordor_Acunity_Acbrotherhood from './components/Shadowofwar_Shadowofmordor_Acunity_Acbrotherhood';
import  Thewitcher3_Acodyssey_Acorigins from './components/Thewitcher3_Acodyssey_Acorigins';
import  Sunsetoverdrive_Justcause3_Aot2 from './components/Sunsetoverdrive_Justcause3_Aot2';
import  Farcry3_Dyinglight_Farcry4 from './components/Farcry3_Dyinglight_Farcry4';
import  Riseofthetombraider_Madmax_Batmanarkhamknight from './components/Riseofthetombraider_Madmax_Batmanarkhamknight';
import  Overwatch_Smite_Battlerite from './components/Overwatch_Smite_Battlerite';
import  Mortalx_Injusticegodsamongus_Ninjastorm from './components/Mortalx_Injusticegodsamongus_Ninjastorm';
import  Halflife2_Metro2033_Metrolastlight from './components/Halflife2_Metro2033_Metrolastlight';
import  Callofduty4_Crysis2_Wolfensteintheoldblood from './components/Callofduty4_Crysis2_Wolfensteintheoldblood';
import  Doom_Superhot_Callofjuarez_Shadowwarrior from './components/Doom_Superhot_Callofjuarez_Shadowwarrior';
import  Destiny2_Codadvancedwarfare_Codinfinitewarfare from './components/Destiny2_Codadvancedwarfare_Codinfinitewarfare';
import  Dmcdevilmaycry_Metalgearrising_Prototype2_Lotrwarinthenorth from './components/Dmcdevilmaycry_Metalgearrising_Prototype2_Lotrwarinthenorth';
import  Darksiders_Castlevania_Darksiders2_Vikingswolvesofmidgard from './components/Darksiders_Castlevania_Darksiders2_Vikingswolvesofmidgard';
import  Hellbladesenuassacrifice_Rysesonofrome_Forhonor from './components/Hellbladesenuassacrifice_Rysesonofrome_Forhonor';
import  Bioshockinfinite_Dishonored2_Thedarkness2 from './components/Bioshockinfinite_Dishonored2_Thedarkness2';
import  Maxpayne3_Quantumbreak_Alanwake from './components/Maxpayne3_Quantumbreak_Alanwake';
import  Vanquish_Specopstheline_Mafia2 from './components/Vanquish_Specopstheline_Mafia2';
import  Wolfamongus_Lifeisstrange_Walkingdead_Batmantheenemywithin from './components/Wolfamongus_Lifeisstrange_Walkingdead_Batmantheenemywithin';
import  Undertale_Tothemoon_Abirdstory from './components/Undertale_Tothemoon_Abirdstory';
import  Oriandtheblindforest_Gris_Transistor from './components/Oriandtheblindforest_Gris_Transistor';
import  Thestanleyparable_Firewatch_Lastdayofjune from './components/Thestanleyparable_Firewatch_Lastdayofjune';
import  Hotlinemiami_Ruiner_Mrshifty from './components/Hotlinemiami_Ruiner_Mrshifty';
import  Inside_Layersoffear_Kholat from './components/Inside_Layersoffear_Kholat';
import  Portal2_Brothersataleoftwosons_Awayout from './components/Portal2_Brothersataleoftwosons_Awayout';
import  LEGO_Thelordoftherings_Marvelsuperheroes_Thehobbit from './components/LEGO_Thelordoftherings_Marvelsuperheroes_Thehobbit';
import  Battleformiddleearth2_Returnoftheking_Warinthenorth_Conquest from './components/Battleformiddleearth2_Returnoftheking_Warinthenorth_Conquest';




                                   {/* Sayfa yönlendirme */}
function App() {
  return (
                              
        <div>
       <Router>
           
       <Navbar/>

  
      <Route exact path= '/' component={Home} />
      <Route  path= '/anime' component={Anime} />
      <Route  path= '/metacritic' component={Metacritic} />
      <Route  path= '/gameCategories' component={Categories} />
      <Route  path= '/Shadowofwar_Shadowofmordor_Acunity_Acbrotherhood' component={Shadowofwar_Shadowofmordor_Acunity_Acbrotherhood} />
      <Route  path= '/Thewitcher3_Acodyssey_Acorigins' component={Thewitcher3_Acodyssey_Acorigins} />
      <Route  path= '/Sunsetoverdrive_Justcause3_Aot2' component={Sunsetoverdrive_Justcause3_Aot2} />
      <Route  path= '/Farcry3_Dyinglight_Farcry4' component={Farcry3_Dyinglight_Farcry4} />
      <Route  path= '/Riseofthetombraider_Madmax_Batmanarkhamknight' component={Riseofthetombraider_Madmax_Batmanarkhamknight} />
      <Route  path= '/Overwatch_Smite_Battlerite' component={Overwatch_Smite_Battlerite} />
      <Route  path= '/Mortalx_Injusticegodamongus_Ninjastorm' component={Mortalx_Injusticegodsamongus_Ninjastorm} />
      <Route  path= '/Halflife2_Metro2033_Metrolastlight' component={Halflife2_Metro2033_Metrolastlight} />
      <Route  path= '/Callofduty4_Crysis2_Wolfensteintheoldblood' component={Callofduty4_Crysis2_Wolfensteintheoldblood} />
      <Route  path= '/Doom_Superhot_Callofjuarez_Shadowwarrior' component={Doom_Superhot_Callofjuarez_Shadowwarrior} />
      <Route  path= '/Destiny2_Codadvancedwarfare_Codinfinitewarfare' component={Destiny2_Codadvancedwarfare_Codinfinitewarfare} />
      <Route  path= '/Dmcdevilmaycry_Metalgearrising_Prototype2_Lotrwarinthenorth' component={Dmcdevilmaycry_Metalgearrising_Prototype2_Lotrwarinthenorth} />
      <Route  path= '/Darksiders_Castlevania_Darksiders2_Vikingswolvesofmidgard' component={Darksiders_Castlevania_Darksiders2_Vikingswolvesofmidgard} />
      <Route  path= '/Hellbladesenuassacrifice_Rysesonofrome_Forhonor' component={Hellbladesenuassacrifice_Rysesonofrome_Forhonor} />
      <Route  path= '/Bioshockinfinite_Dishonored2_Thedarkness2' component={Bioshockinfinite_Dishonored2_Thedarkness2} />
      <Route  path= '/Maxpayne3_Quantumbreak_Alanwake' component={Maxpayne3_Quantumbreak_Alanwake} />
      <Route  path= '/Vanquish_Specopstheline_Mafia2' component={Vanquish_Specopstheline_Mafia2} />
      <Route  path= '/Wolfamongus_Lifeisstrange_Walkingdead_Batmantheenemywithin' component={Wolfamongus_Lifeisstrange_Walkingdead_Batmantheenemywithin} />
      <Route  path= '/Undertale_Tothemoon_Abirdstory' component={Undertale_Tothemoon_Abirdstory} />
      <Route  path= '/Oriandtheblindforest_Gris_Transistor' component={Oriandtheblindforest_Gris_Transistor} />
      <Route  path= '/Thestanleyparable_Firewatch_Lastdayofjune' component={Thestanleyparable_Firewatch_Lastdayofjune} />
      <Route  path= '/Hotlinemiami_Ruiner_Mrshifty' component={Hotlinemiami_Ruiner_Mrshifty} />
      <Route  path= '/Inside_Layersoffear_Kholat' component={Inside_Layersoffear_Kholat} />
      <Route  path= '/Portal2_Brothersataleoftwosons_Awayout' component={Portal2_Brothersataleoftwosons_Awayout} />
      <Route  path= '/LEGO_Thelordoftherings_Marvelsuperheroes_Thehobbit' component={LEGO_Thelordoftherings_Marvelsuperheroes_Thehobbit} />
      <Route  path= '/Battleformiddleearth2_Returnoftheking_Warinthenorth_Conquest' component={Battleformiddleearth2_Returnoftheking_Warinthenorth_Conquest} />


              
       </Router>

       </div>

  );

 
}

export default App;
