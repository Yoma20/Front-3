import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GraduationCap, Search, Globe, ChevronDown, User, Settings, LogOut } from "lucide-react";
import newRequest from "../../utils/newRequest";
import "./navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [current_user, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Handle scroll to change navbar appearance
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle logout functionality
  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
    } catch (err) {
      console.error("Logout failed:", err);
    }
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/");
  };

  // Handle search submission
  const handlesubmit = () => {
    if (input.trim()) {
      navigate(`gigs?search=${input}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handlesubmit();
    }
  };

  return (
    <div className={`navbar ${active || pathname !== "/" ? "active" : ""}`}>
      {/* Top White Bar - Contains Logo and User Links */}
      <div className="top-bar">
        <div className="container">
          <div className="logo">
            <Link to="/" className="logo-link">
              <GraduationCap className="logo-icon" />
              <span className="logo-text">
                TopMark <span className="academic-text">Academic</span>
              </span>
            </Link>
          </div>

          <div className="nav-links">
            <button 
              className="nav-link business-link" 
              onClick={() => navigate("/becomeseller")}
            >
              TopMark Business
            </button>
            
            <div className="nav-link explore-link">
              <span>Explore</span>
            </div>
            
            <div className="nav-link language-selector">
              <Globe className="language-icon" />
              <span>English</span>
              <ChevronDown className="dropdown-icon" />
            </div>

            {/* Authentication Links */}
            {!current_user && (
              <div className="auth-links">
                <Link to="/login" className="sign-in-link">
                  Sign in
                </Link>
                <button 
                  className="join-button" 
                  onClick={() => navigate("/register")}
                >
                  Join
                </button>
              </div>
            )}

            {current_user && (
              <div className="user-menu">
                <div className="user-trigger" onClick={() => setOpen(!open)}>
                  <img 
                    src={current_user.img || "https://placehold.co/36x36/e5e7eb/6b7280?text=" + (current_user?.username?.charAt(0)?.toUpperCase() || "U")} 
                    alt="User avatar"
                    className="user-avatar"
                  />
                  <span className="username">{current_user?.username}</span>
                  <ChevronDown className="dropdown-icon" />
                </div>
                
                {open && (
                  <div className="user-dropdown">
                    <div className="dropdown-header">
                      <img 
                        src={current_user.img || "https://placehold.co/40x40/e5e7eb/6b7280?text=" + (current_user?.username?.charAt(0)?.toUpperCase() || "U")} 
                        alt="User avatar"
                        className="dropdown-avatar"
                      />
                      <div>
                        <div className="dropdown-username">{current_user?.username}</div>
                        <div className="dropdown-email">{current_user?.email}</div>
                      </div>
                    </div>
                    
                    <div className="dropdown-divider"></div>
                    
                    {current_user.isSeller && (
                      <>
                        <Link to="/mygigs" className="dropdown-item">
                          <Settings className="dropdown-item-icon" />
                          My Gigs
                        </Link>
                        <Link to="/add" className="dropdown-item">
                          <Settings className="dropdown-item-icon" />
                          Add New Gig
                        </Link>
                      </>
                    )}
                    
                    <Link to="/dashboard" className="dropdown-item">
                      <User className="dropdown-item-icon" />
                      Dashboard
                    </Link>
                    <Link to="/orders" className="dropdown-item">
                      <Settings className="dropdown-item-icon" />
                      Orders
                    </Link>
                    <Link to="/messages" className="dropdown-item">
                      <Settings className="dropdown-item-icon" />
                      Messages
                    </Link>
                    
                    <div className="dropdown-divider"></div>
                    
                    <button onClick={handleLogout} className="dropdown-item logout-item">
                      <LogOut className="dropdown-item-icon" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className={`search-section ${active ? 'compact' : 'expanded'}`}>
        <div className="container">
          <div className="search-wrapper">
            <div className="search-input-container">
              <input
                type="text"
                placeholder={active ? 
                  "What service are you looking for today?" : 
                  "Search for academic help, projects, or tutors"
                }
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="search-input"
              />
              <button 
                className="search-button" 
                onClick={handlesubmit}
                disabled={!input.trim()}
              >
                <Search className="search-icon" />
                {!active && <span className="search-text">Search</span>}
              </button>
            </div>
            
            {!active && (
              <div className="search-suggestions">
                <span className="suggestion-label">Popular:</span>
                <button className="suggestion-tag">Essay Writing</button>
                <button className="suggestion-tag">Data Analysis</button>
                <button className="suggestion-tag">Programming</button>
                <button className="suggestion-tag">Research</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Categories Menu Bar */}
      {(active1 || pathname !== "/") && (
        <div className="menu-bar">
          <div className="container">
            <nav className="categories-nav">
              <Link className="category-link" to="/category/graphics-design">
                Graphics & Design
              </Link>
              <Link className="category-link" to="/category/video-animation">
                Video & Animation
              </Link>
              <Link className="category-link" to="/category/writing-translation">
                Writing & Translation
              </Link>
              <Link className="category-link" to="/category/ai-services">
                AI Services
              </Link>
              <Link className="category-link" to="/category/digital-marketing">
                Digital Marketing
              </Link>
              <Link className="category-link" to="/category/music-audio">
                Music & Audio
              </Link>
              <Link className="category-link" to="/category/programming-tech">
                Programming & Tech
              </Link>
              <Link className="category-link" to="/category/business">
                Business
              </Link>
              <Link className="category-link" to="/category/lifestyle">
                Lifestyle
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;