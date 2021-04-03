import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './booking/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import TopNav from './components/TopNav';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './user/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import DashboardSeller from './user/DashboardSeller';
import NewHotel from './hotels/NewHotel';
import StripeCallback from './stripe/StripeCallback';
import EditHotel from './hotels/EditHotel';
import ViewHotel from './hotels/ViewHotel';
import StripeSuccess from './stripe/StripeSuccess';
import StripeCancel from './stripe/StripeCancel';

//



function App() {
  return (
    <BrowserRouter>
    <TopNav />
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/hotel/:hotelId" component={ViewHotel} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/dashboard/seller" component={DashboardSeller} />
      <PrivateRoute exact path="/hotels/new" component={NewHotel} />
      <PrivateRoute exact path="/stripe/callback" component={StripeCallback} />
      <PrivateRoute exact path="/hotel/edit/:hotelId" component={EditHotel} />

      <PrivateRoute exact path="/stripe/success/:hotelId" component={StripeSuccess} />
      <PrivateRoute exact path="/stripe/cancel" component={StripeCancel} />
    </Switch>
    </BrowserRouter>
  ); 
}

export default App;
