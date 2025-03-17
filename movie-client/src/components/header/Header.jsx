import './Header.css'
import {useState} from "react";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="home-header">

            <div className="logo">Movies</div>
            <p>Discover and stream your favorite content</p>

            <div className="avatar-container">
                <img
                    src="https://dwg31ai31okv0.cloudfront.net/images/Article_Images/ImageForArticle_549_17288689857007544.jpg" // Замени на реальный URL
                    alt="User Avatar"
                    className="avatar"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                {menuOpen && (
                    <div className="menu">
                        <button className="menu-item">My Account</button>
                        <button
                            className="menu-item"
                            onClick={() => {
                                localStorage.removeItem("token");
                                window.location.href = "/login";
                            }}>
                            Log Out
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;