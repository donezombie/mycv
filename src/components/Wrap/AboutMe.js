import React, { Component } from 'react';
  
  
class AboutMe extends Component {
  render() {
    return (
      <div className="row mb-5">
        <div className="offset-md-2">
      
        </div>
        <div className="col-md-8 border border-0 shadow p-3">
              <div className="row">
                  <div className="col-md-6">
                      <h3 className="pb-3 font-weight-bold">Về tôi</h3>
                      <p>Xin chào! Tôi là Đôn. Một lập trình viên Front-end Web Developer.</p>
                  </div>
                  <div className="col-md-6">
                    <h3 className="pb-3 font-weight-bold">Thông tin cơ bản</h3>
                    <div className="d-flex justify-content-center"> 
                      <div id="title" className="col-md-4">
                        <p>Ngày Sinh: </p>
                        <p>Email: </p>
                        <p>Điện thoại: </p>
                        <p>Địa chỉ: </p>
                        <p>Sở thích: </p>
                      </div>
                      <div className="col-md-8">
                        <p>05/12/1996</p>
                        <p>donezombie@gmail.com</p>
                        <p>039-5029-800</p>
                        <p>250 Kim Giang, Thanh Xuân, Hà Nội</p>
                        <p>Cà phê cùng bạn bè, Chơi game, Ngủ, Ngắm gái, Thưởng thức cái đẹp</p>
                      </div>
                    </div>
                  </div>
              </div>
        </div>
      </div>
    );
  }
}
  
  
export default AboutMe;