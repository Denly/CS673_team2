import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import MessageRoomsPopout from '../components/message_rooms_popout.jsx';
// App component - represents the whole app
export default class App extends Component {
  componentDidMount() {
    //materialize sideNav inital
    $(".button-collapse").sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks
    });

    //set up slide-out for message_rooms_popout
    $('#slide-out-trigger').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right',  // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks
    });

    //FB inital
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '303809510001753',
        xfbml      : true,
        version    : 'v2.7'
      });
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  //pop out message room
    popMessageRoom(){
    $('#slide-out-trigger').sideNav('show');
  }

  render() {
    return (
      <div className="">
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo"><img src="/logo_s.svg"/><span className="YellowtailLogo">MeetCute&nbsp;</span>;)</Link>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <a href="#" data-activates="slide-out" id="slide-out-trigger"></a>

            <ul className="right hide-on-med-and-down">
              <li><Link to="/Discover">Discover</Link></li>
              <li><a
                onClick={this.popMessageRoom.bind(this)}
                >Message</a></li>
              <li><Link to={'/Profile/'+Meteor.userId()}>My Profile</Link></li>
            </ul>

            <ul className="side-nav" id="mobile-demo">
              <li><Link to="/Discover">Discover</Link></li>
              <li><a
                onClick={this.popMessageRoom.bind(this)}
                >Message</a></li>
              <li><Link to={'/Profile/'+Meteor.userId()}>My Profile</Link></li>
            </ul>
          </div>
        </nav>
        <div>
        </div>

        <MessageRoomsPopout/>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
