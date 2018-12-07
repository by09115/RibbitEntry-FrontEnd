import React, { Component } from 'react';
import './css/CancleAlert.css';

class CancleAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // onClick 이벤트 막음.
  MaintainContent = (event) => {
    event.stopPropagation();
  };

  render() {
    const { ribbitCancle, KeepChange } = this.props; // boolean
    return (
      <div
        className="PopUp__background"
        onClick={KeepChange}
        style={ribbitCancle ? { display: 'flex' } : { display: 'none' }}
      >
        <div className="PopUp__Container">
          <div onClick={event => this.MaintainContent(event)} className="RibbitPopup__Head">
            <span className="PopupHead__Title">이 리빗을 삭제할까요?</span>
            <i onClick={KeepChange} className="fas fa-times PopupHead__Close" />
          </div>
          <div className="RibbitPopup__Body">
            <span className="PopupBody__Content">정말 이 리빗을 삭제하시겠습니까?</span>
          </div>
          <div className="RibbitPopup__Foot">
            <div className="RibbitFoot__Cancle">
              <span className="FootCancle__Title">취소</span>
            </div>
            <div className="RibbitFoot__Delete">
              <span className="FootDelete__Title">삭제</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CancleAlert;
