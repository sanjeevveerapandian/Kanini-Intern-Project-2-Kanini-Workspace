// import React from "react";
// import { Link } from "react-router-dom";
// import "./HomePage.css";
// import { Navbar, Nav, Container, Image, NavDropdown } from 'react-bootstrap';

// const HomePage = () => {
//   return (
//     <>
//       <header className="banner-container">
//         <img src="banner.png" alt="Banner" className="banner-image" />
//         <div className="welcome-card">
//           <p>Hello Tamilselvan, Welcome to</p>
//           <NavDropdown title="Rattha Tek Meadows,Chennai" id="basic-nav-dropdown" className="location-dropdown">
//                 <NavDropdown.Item >kanini-bangalore</NavDropdown.Item>
//                 <NavDropdown.Item >kanini-coimbatore</NavDropdown.Item>
//               </NavDropdown>
//         </div>
//       </header>
//       <main className="container">
//         <div className="row">
//           <tr className="col-md-12">
//         <td className="col-md-7">
//           <section className="upcoming-card ">
//             <h2>
//               <img className="tick-image" src="tick-mark 1.png" alt="Tick Mark" />
//               Nothing Upcoming!
//             </h2>
//             <p style={{color:"grey"}}>Any upcoming bookings and guests will appear here</p>
//             <Link to="/bookroom" className="mx-2 text-decoration-none " style={{fontWeight:"500" , color:"#5162F6"}}>
//               <img src="door.png" alt="Book a Room" />
//               Book a Room  &rarr;
//             </Link>
//             <Link to="/bookdesk" className="mx-2 text-decoration-none" style={{fontWeight:"500",color:"#5162F6"}}>
//               <img src="deskchair.png" alt="Book a Desk" />
//               Book a Desk &rarr;
//             </Link>
//           </section>
//           </td>
//           <td className="col-md-5">
//           <section className="events-card  ">
//             <h3>Events happening at Chennai today</h3>
//             <p style={{color:"grey"}}><b>July 13</b> Family Day in Chennai Faculty<br />10am-6pm</p>
//             <button style={{backgroundColor:"white" ,color:"#5162f6"}}>view Details</button>
//             <hr />
//             <p style={{color:"grey"}}><b>July 13</b>  Family Day in Chennai Faculty<br />10am-6pm</p>
//             <button style={{backgroundColor:"white" ,color:"#5162f6"}}>view Details</button>
//           </section>
//           <section className="events-card1  ">
//             <h3>Notifications</h3>
//             <p style={{color:"grey"}}><img src="Ellipse.png"></img> Added capacity in Kanini, Pune office<br />Hr Admin</p>
//             <button style={{backgroundColor:"white" ,color:"#5162f6"}}>view Details</button>
//             <hr />
//           </section>
//           </td>
//           </tr>
//           </div>
          
          
//       </main>
//     </>
//   );
// };

// export default HomePage;

import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { NavDropdown } from 'react-bootstrap';

const HomePage = () => {
  return (
    <>
      <header className="banner-container">
        <img src="banner.png" alt="Banner" className="banner-image" />
        <div className="welcome-card">
          <p>Hello Tamilselvan, Welcome to</p>
          <NavDropdown title="Rattha Tek Meadows,Chennai" id="basic-nav-dropdown" className="location-dropdown">
            <NavDropdown.Item>kanini-bangalore</NavDropdown.Item>
            <NavDropdown.Item>kanini-coimbatore</NavDropdown.Item>
          </NavDropdown>
        </div>
      </header>
      <main className="container">
        <div className="row">
          <div className="col-md-7">
            <section className="upcoming-card">
              <h2>
                <img className="tick-image" src="tick-mark 1.png" alt="Tick Mark" />
                Nothing Upcoming!
              </h2>
              <p style={{color:"grey"}}>Any upcoming bookings and guests will appear here</p>
              <Link to="/bookroom" className="mx-2 text-decoration-none " style={{fontWeight:"500" , color:"#5162F6"}}>
                <img src="door.png" alt="Book a Room" />
                Book a Room  &rarr;
              </Link>
              <Link to="/bookdesk" className="mx-2 text-decoration-none" style={{fontWeight:"500",color:"#5162F6"}}>
                <img src="deskchair.png" alt="Book a Desk" />
                Book a Desk &rarr;
              </Link>
            </section>
            <section className="meeting-rooms-section">
              <h2>Meeting rooms available now</h2>
              <div className="meeting-rooms-cards">
                <div className="meeting-room-card">
                  <img src="Img.png" alt="Meeting Room 1" />
                  <p>Conference Room-1</p>
                </div>
                <div className="meeting-room-card">
                  <img src="Img (1).png" alt="Meeting Room 2" />
                  <p>Conference Room-2</p>
                </div>
                <div className="meeting-room-card">
                  <img src="img4.jpg" alt="Meeting Room 3" />  
                  <p>Conference Room-3</p>
                </div>
                <div className="meeting-room-card">
                  <img src="image.jpg" alt="Meeting Room 4" />
                  <p>Meeting Room 4</p>
                </div>
              </div>
            </section>
            <section className="meeting-rooms-section">
              <h2>Meeting rooms available now</h2>
              <div className="meeting-rooms-cards">
                <div className="meeting-room-card">
                  <img src="Img.png" alt="Meeting Room 1" />
                  <p>Meeting Room 1</p>
                </div>
                <div className="meeting-room-card">
                  <img src="Img (1).png" alt="Meeting Room 2" />
                  <p>Meeting Room 2</p>
                </div>
                <div className="meeting-room-card">
                  <img src="img4.jpg" alt="Meeting Room 3" />  
                  <p>Meeting Room 3</p>
                </div>
                <div className="meeting-room-card">
                  <img src="image.jpg" alt="Meeting Room 4" />
                  <p>Meeting Room 4</p>
                </div>
              </div>
            </section>
          </div>
          <div className="col-md-5">
            <section className="events-card">
              <h3>Events happening at Chennai today</h3>
              <p style={{color:"grey"}}><b>July 13</b> Family Day in Chennai Faculty<br />10am-6pm</p>
              <button style={{backgroundColor:"white" ,color:"#5162f6"}}>view Details</button>
              <hr />
              <p style={{color:"grey"}}><b>July 13</b>  Family Day in Chennai Faculty<br />10am-6pm</p>
              <button style={{backgroundColor:"white" ,color:"#5162f6"}}>view Details</button>
            </section>
            <section className="events-card1">
              <h3>Notifications</h3>
              <p style={{color:"grey"}}><img src="Ellipse.png" alt="Notification Icon"></img> Added capacity in Kanini, Pune office<br />Hr Admin</p>
              <button style={{backgroundColor:"white" ,color:"#5162f6"}}>view Details</button>
              <hr />
            </section>
          </div>
        </div>
      </main>
      
    </>
  );
};

export default HomePage;
