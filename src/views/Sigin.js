import React, { Component } from "react";
import {Col } from "shards-react";

export default class Login extends Component {
    render() {
        return (
          // <Col lg="4" >
            <div class="d-flex justify-content-center" style={{marginTop:"250px"}}>
              <Col lg="3" >
            <form action="/">
                <h3 class="d-flex justify-content-center">เข้าสู่ระบบ</h3>

                <div className="form-group">
                    <label>อีเมล</label>
                    <input type="email" className="form-control" placeholder="กรอกอีเมล" />
                </div>

                <div className="form-group">
                    <label>รห้สผ่าน</label>
                    <input type="password" className="form-control" placeholder="กรอกรหัสผ่าน" />
                </div>
{/*
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                <button type="submit" className="btn btn-primary btn-block">ยืนยัน</button>
                <p className="forgot-password text-right">
                    ลืม <a >รหัสผ่าน?</a>
                </p>
            </form>

            </Col>
            </div>
            // </Col>
        );
    }
}
