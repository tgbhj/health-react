import React from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import index from '../views/index'
import login from '../views/login'
import user from '../views/user'
import questions from '../views/questions'
import doctors from '../views/doctors'
import channels from '../views/channels'
import videos from '../views/videos'
import infos from '../views/infos'
import medicines from '../views/medicines'
import doctor from '../views/doctor'
import info from '../views/info'
import video from '../views/video'
import channel from '../views/channel'
import admin from '../views/admin'
import question from '../views/question'
import findpwd from '../views/findpwd'
import insurance from '../views/insurance'
import recharge from '../views/recharge'
import provision1 from '../views/provision1'
import provision2 from '../views/provision2'
import list1 from '../views/list1'
import agreement from '../views/agreement'
import pay from '../views/pay'
import notfound from '../views/notfound'

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        localStorage.getItem('health-token') ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }}/>
        )
    )}/>
);

const Routers = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={index}/>
            <Route exact path="/login" component={login}/>
            <Route exact path='/logout'/>
            <PrivateRoute exact path='/user/:id' component={user}/>
            <Route exact path='/questions' component={questions}/>
            <Route exact path='/doctors' component={doctors}/>
            <Route exact path='/channels' component={channels}/>
            <Route exact path='/videos' component={videos}/>
            <Route exact path='/infos' component={infos}/>
            <Route exact path='/medicines' component={medicines}/>
            <Route exact path='/doctor/:id' component={doctor}/>
            <Route exact path='/info/:id' component={info}/>
            <Route exact path='/video/:id' component={video}/>
            <Route exact path='/channel/:id' component={channel}/>
            <PrivateRoute exact path='/admin' component={admin}/>
            <Route exact path='/question/:id' component={question}/>
            <Route exact path='/findPassword' component={findpwd}/>
            <PrivateRoute exact path='/recharge/:id' component={recharge}/>
            <Route exact path='/insurance' component={insurance}/>
            <Route exact path='/provision1' component={provision1}/>
            <Route exact path='/provision2' component={provision2}/>
            <Route exact path='/list1' component={list1}/>
            <Route exact path='/agreement' component={agreement}/>
            <Route exact path='/pay' component={pay}/>
            <Route component={notfound}/>
        </Switch>
    </Router>
);

export default Routers