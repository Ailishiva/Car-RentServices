import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = (props) => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +1-202-555-0149
                </span>
              </div>
            </Col>
            
            <Col lg="6" md="6" sm="6">
            <span>{props.name ?  `Welcome - ${props.name}` : 
              (<div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="/login" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Login
                </Link>

                <Link to="/register" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Register
                </Link>
                {/* <span>{props.name ? `Welcome - ${props.name}` : ""}</span> */}
              </div>)  }
              </span>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i class="ri-car-line"></i>
                    <span>
                      Rent Car <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>India</h4>
                  <h6>Hyderabad City, Telangana</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;






// import React, { useRef, useState } from "react";
// import carData from "../../assets/data/carData";
// import { Container, Row, Col } from "reactstrap";
// import { Link, NavLink } from "react-router-dom";
// // import Suggestions from "../Suggestions/Suggestions";
// import "../../styles/header.css";

// const navLinks = [
//   {
//     path: "/",
//     display: "Home",
//   },
//   {
//     path: "/about",
//     display: "About",
//   },
//   {
//     path: "/cars",
//     display: "Cars",
//   },

//   {
//     path: "/blogs",
//     display: "Blog",
//   },
//   {
//     path: "/contact",
//     display: "Contact",
//   },
// ];

// const Header = (props) => {
//   const menuRef = useRef(null);

//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchSuggestions, setSearchSuggestions] = useState([]);

//   // const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
//   // const handleSearchQueryChange = (event) => {
//   //   const query = event.target.value;
//   //   setSearchQuery(query);
//   //   performSearch(query);
//   // };

//   // const performSearch = (query) => {
//   //   const filteredItems = carData.filter((item) =>
//   //     item.carName.toLowerCase().includes(query.toLowerCase())
//   //   );
//   //   setSearchResults(filteredItems);
//   //   updateSearchSuggestions(query);
//   // };

//   // const updateSearchSuggestions = (query) => {
//   //   const suggestions = carData.filter((item) => item.carName.toLowerCase().includes(query.toLowerCase()))
//   //     .map((item) => item.carName);
//   //   setSearchSuggestions(suggestions);
//   // };
//   // const handleSuggestionClick = (suggestion) => {
//   //   setSearchQuery(suggestion);
//   //   performSearch(suggestion);
//   // };
//   return (
//     <header className="header">
//       {/* ============ header top ============ */}
//       <div className="header__top">
//         <Container>
//           <Row>
//             <Col lg="6" md="6" sm="6">
//               <div className="header__top__left">
//                 <span>Need Help?</span>
//                 <span className="header__top__help">
//                   <i class="ri-phone-fill"></i> +1-202-555-0149
//                 </span>
//               </div>
//             </Col>
            
//             <Col lg="6" md="6" sm="6">
//             <span>{props.name ?  `Welcome - ${props.name}` : 
//               (<div className="header__top__right d-flex align-items-center justify-content-end gap-3">
//                 <Link to="/login" className=" d-flex align-items-center gap-1">
//                   <i class="ri-login-circle-line"></i> Login
//                 </Link>

//                 <Link to="/register" className=" d-flex align-items-center gap-1">
//                   <i class="ri-user-line"></i> Register
//                 </Link>
//                 {/* <span>{props.name ? `Welcome - ${props.name}` : ""}</span> */}
//               </div>)  }
//               </span>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* =============== header middle =========== */}
//       <div className="header__middle">
//         <Container>
//           <Row>
//             <Col lg="4" md="3" sm="4">
//               <div className="logo">
//                 <h1>
//                   <Link to="/" className=" d-flex align-items-center gap-2">
//                     <i class="ri-car-line"></i>
//                     <span>
//                       Rent Car <br /> Service
//                     </span>
//                   </Link>
//                 </h1>
//               </div>
//             </Col>

//             <Col lg="3" md="3" sm="4">
//               <div className="header__location d-flex align-items-center gap-2">
//                 <span>
//                   <i class="ri-earth-line"></i>
//                 </span>
//                 <div className="header__location-content">
//                   <h4>India</h4>
//                   <h6>Hyderabad City, Telangana</h6>
//                 </div>
//               </div>
//             </Col>

//             <Col lg="3" md="3" sm="4">
//               <div className="header__location d-flex align-items-center gap-2">
//                 <span>
//                   <i class="ri-time-line"></i>
//                 </span>
//                 <div className="header__location-content">
//                   <h4>Sunday to Friday</h4>
//                   <h6>10am - 7pm</h6>
//                 </div>
//               </div>
//             </Col>

//             <Col
//               lg="2"
//               md="3"
//               sm="0"
//               className=" d-flex align-items-center justify-content-end "
//             >
//               <button className="header__btn btn ">
//                 <Link to="/contact">
//                   <i class="ri-phone-line"></i> Request a call
//                 </Link>
//               </button>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* ========== main navigation =========== */}

//       <div className="main__navbar">
//         <Container>
//           <div className="navigation__wrapper d-flex align-items-center justify-content-between">
//             <span className="mobile__menu">
//               <i class="ri-menu-line" onClick={toggleMenu}></i>
//             </span>

//             <div className="navigation" ref={menuRef} onClick={toggleMenu}>
//               <div className="menu">
//                 {navLinks.map((item, index) => (
//                   <NavLink
//                     to={item.path}
//                     className={(navClass) =>
//                       navClass.isActive ? "nav__active nav__item" : "nav__item"
//                     }
//                     key={index}
//                   >
//                     {item.display}
//                   </NavLink>
//                 ))}
//               </div>
//             </div>

//             <div className="nav__right">
//               <div className="search__box">
//                 <input type="text" 
//                 value={searchQuery}
//                 onChange={handleSearchQueryChange}
//                 placeholder="Search..."
//                 />
//                 <span>
//                   <i class="ri-search-line"></i>
//                 </span>
//               </div>
             
//             </div>
           
//           </div>
        
//         </Container>
//         {/* {searchSuggestions.length > 0 && (
//         <ul className="suggestions__list" style={{color: "white"}}>
//           {searchSuggestions.map((suggestion) => (
//             <li
//             className="suggestion__item"
//               key={suggestion}
//               onClick={() => handleSuggestionClick(suggestion)}
//             >
//               {suggestion}
//             </li>
//           ))}
//         </ul>
//       )} */}
//       </div>
//     </header>
//   );
// };

// export default Header;
