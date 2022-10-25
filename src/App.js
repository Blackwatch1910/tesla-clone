import './App.css';
import Header from './components/Header';

import Accessories from './assets/Desktop-Accessories.jpg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';
import ModelS from './assets/Desktop-ModelS.jpeg';

import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item
          title="Model S"
          desc="Order Online for Touchless Delivery"
          descLink=''
          backgroundImg={ModelS}
          leftBtnText='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          descLink=''
          backgroundImg={Model3}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title="Model X"
          desc="Order Online for Touchless Delivery"
          descLink=''
          backgroundImg={ModelX}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          descLink=''
          backgroundImg={ModelY}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title="Solar Panels"
          desc="Lowest Cost Solar Panels in America"
          descLink=''
          backgroundImg={SolarPanels}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title="Solar Roof"
          desc="Produce Clean Energy From Your Roof"
          descLink=''
          backgroundImg={SolarRoof}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title="Accessories"
          desc=""
          descLink=''
          backgroundImg={Accessories}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
      </div>
    </div>
  );
}

export default App;
