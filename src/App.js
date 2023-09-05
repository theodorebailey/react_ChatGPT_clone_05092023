import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';


function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperside">
          <div className="upperside-top">
            <img src={gptLogo} alt="logo" className='logo' /><span className='brand'>ChatGPT</span>
          </div>
          <button className="mid-btn"><img src={addBtn} alt="" className='add-btn' />New Chat</button>
          <div className="upperside-bottom">
            <button className="query"><img src={msgIcon} alt="query" className='' />What is programming ?</button>
            <button className="query"><img src={msgIcon} alt="" className='' />How to use an API</button>
          </div>
        </div>
        <div className="lowerside">
          <div className="list-items"><img src={home} alt="" className="list-items-img" />Home</div>
          <div className="list-items"><img src={saved} alt="" className="list-items-img" />Saved</div>
          <div className="list-items"><img src={rocket} alt="" className="list-items-img" />Upgrade to Pro</div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img src={userIcon} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="chat">
            <img src={gptImgLogo} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="chat-footer">
          <div className="inp">
            <input type="text" placeholder="Send message." /><button className="send"><img src={sendBtn} alt="send" /></button>
            <p>ChatGPT may produce incorrect results..</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
