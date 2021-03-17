import { Header, Loader, Screen, SideMenu } from './components';
import { useState } from 'react';
import { Divider, Flex } from '@chakra-ui/layout';
import { Agents, Expenses, Forms, Home, Orders, OutgoingStock, PaymentGateways, Products, Report, SmsTemplating, StockLeft, StoreSettings, Users } from './Pages';
import { Template } from './Pages';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { ThemedContext, theme } from './assets/themeToggle';

function App() {
  const [loading, setLoading] = useState(true)
  const [showMenu, setShowMenu] = useState(true)
  const [light, setLight] = useState(true)
  const [menu, setMenu] = useState(false)


  const _setShowMenu = () => setShowMenu(false)
  const _setMenu = (sx=!menu) => setMenu(sx)

  if(loading) {
      // fetch data
      setLoading(false)
  }

  return (
    <Router>
    <ThemedContext.Provider value={!light ? theme.dark : theme.light}>
    <div className="App">
      {loading && <Loader />}
      {!loading && <Screen light={light}>
        <Header setMenu={_setMenu} showMenu={showMenu} light={light} toggleTheme={()=>setLight(!light)}/>
        <Flex pb={8}>
          <SideMenu menu={menu} setMenu={_setMenu} showMenu={showMenu}/>
          <Template showMenu={showMenu}>
            <Switch>

              <Route path="/users">
                <Users />
              </Route>

              <Route path="/store_settings">
                <StoreSettings />
              </Route>

              <Route path="/stock_left">
                <StockLeft />
              </Route>

              <Route path="/sms_templating">
                <SmsTemplating />
              </Route>

            <Route path="/payment_gateways">
                <PaymentGateways />
              </Route>

              <Route path="/report">
                <Report />
              </Route>

              <Route path="/stock_left">
                <StockLeft />
              </Route>

              <Route path="/outgoing_stock">
                <OutgoingStock />
              </Route>

              <Route path="/orders">
                <Orders />
              </Route>

              <Route path="/forms">
                <Forms _setShowMenu={_setShowMenu}_/>
              </Route>

              <Route path="/expenses">
                <Expenses />
              </Route>
              
              <Route path="/agents">
                <Agents />
              </Route>

              <Route path="/products">
                <Products />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            
            </Switch>
          </Template>
        </Flex>
        <Divider />
      </Screen>}
    </div>
    </ThemedContext.Provider>
    </Router>
  );
}

export default App;
