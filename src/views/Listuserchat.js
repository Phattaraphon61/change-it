import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { routerLink } from 'react-router-dom';
import { Col } from "shards-react";
import '../shards-dashboard/styles/Chat.css'
import Formchat from './Formchat'
export default class Listuserchat extends Component {

  render() {

    return (
      <Col lg="12"  >

        <div class="messaging">
          <div class="inbox_msg">
            <div class="inbox_people">
              <div class="headind_srch">
                <div class="recent_heading">
                  <h4>Recent</h4>
                </div>
                <div class="srch_bar">
                  <div class="stylish-input-group">
                    <input type="text" class="search-bar" placeholder="Search" />
                  </div>
                </div>
              </div>
              <div class="inbox_chat scroll">
                {/* <a href="chat/5"> */}

                <div class="chat_list active_chat"  >
                  <div class="chat_people">
                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                    <div class="chat_ib" >
                      <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                      <p>Test, which is a new approach to have all solutions
				astrology under one roof.</p>
                    </div>
                  </div>
                </div>
                {/* </a> */}
                <a href="chat/4">
                  <div class="chat_list">
                    <div class="chat_people">
                      <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                      <div class="chat_ib">
                        <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                        <p>Test, which is a new approach to have all solutions
				astrology under one roof.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <div class="chat_list">
                  <div class="chat_people">
                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                    <div class="chat_ib">
                      <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                      <p>Test, which is a new approach to have all solutions
				astrology under one roof.</p>
                    </div>
                  </div>
                </div>
                <div class="chat_list">
                  <div class="chat_people">
                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                    <div class="chat_ib">
                      <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                      <p>Test, which is a new approach to have all solutions
				astrology under one roof.</p>
                    </div>
                  </div>
                </div>
                <div class="chat_list">
                  <div class="chat_people">
                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                    <div class="chat_ib">
                      <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                      <p>Test, which is a new approach to have all solutions
				astrology under one roof.</p>
                    </div>
                  </div>
                </div>
                <div class="chat_list">
                  <div class="chat_people">
                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                    <div class="chat_ib">
                      <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                      <p>Test, which is a new approach to have all solutions
				astrology under one roof.</p>
                    </div>
                  </div>
                </div>
                <div class="chat_list">
                  <div class="chat_people">
                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                    <div class="chat_ib">
                      <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                      <p>Test, which is a new approach to have all solutions
				astrology under one roof.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <Formchat/>
          </div>

        </div>

      </Col>
    );
  }
}
ReactDOM.render(<Listuserchat />, document.getElementById('root'));
