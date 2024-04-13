import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, Typography } from "@mui/material";
import { ShoppingBagOutlined, SearchOutlined } from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import logo from "../../assets/comp_logo.jpeg"; // Make sure the path is correct
import Search from "../../Search/Search";

function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const [menuOpen, setMenuOpen] = useState(false);
    const[searchModal,setSearchModal] = useState(false);

    return (
        <Box
            display="flex"
            alignItems="center"
            width="100%"
            height="80px" // Increased navbar height
            backgroundColor="#C41E3A"
            color="black"
            position="fixed"
            top="0"
            left="0"
            zIndex="1"
        >
            <Box
                width="80%"
                height="100%" // Added to ensure child components align correctly
                margin="auto"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                {/* Brand Name and Image */}
                {/*<Box*/}
                {/*    display="flex"*/}
                {/*    alignItems="center"*/}
                {/*    onClick={() => navigate("/")}*/}
                {/*    sx={{ "&:hover": { cursor: "pointer" } }}*/}
                {/*    color={shades.off_white[100]}*/}
                {/*    fontFamily='Lobster'*/}

                {/*>*/}
                {/*    <img src={logo} alt="Brand Logo" style={{ marginRight: '10px', height: '60px' }} /> /!* Adjusted logo size *!/*/}
                {/*    Herbal Harmony*/}
                {/*</Box>*/}

                <Box
                    display="flex"
                    alignItems="center"
                    onClick={() => navigate("/")}
                    sx={{ "&:hover": { cursor: "pointer" } }}
                >
                    <img src={logo} alt="Brand Logo" style={{ marginRight: '10px', height: '60px' }} />
                    <Typography
                        variant="h4" // Adjust the variant for size
                        color={shades.off_white[100]}
                        fontWeight="bold" // Makes the text thicker
                        sx={{
                            fontSize: '1.2rem',
                            letterSpacing: '0.05em', // Adjust letter spacing to make it appear wider
                            // You can also use `textTransform: 'uppercase'` if you want the text to be all uppercase
                        }}
                    >
                        Herbal Harmony
                    </Typography>
                </Box>

                {/* Central Navigation */}
                <Box display={["none", "none", "flex"]} alignItems="center" gap="20px">
                    <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link>
                    <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link>
                    {/* ... other links */}
                </Box>

                {/* Responsive Menu */}
                <Box display={["flex", "flex", "none"]} onClick={() => setMenuOpen(!menuOpen)}>
                    {/* Menu icon components */}
                </Box>

                {/* Icons on the right */}
                <Box display="flex" gap="20px">
                    <IconButton sx={{ color: "white" }} onClick={() => setSearchModal(true)} >
                        <SearchOutlined />
                    </IconButton>
                    <Badge
                        badgeContent={cart.length}
                        color="secondary"
                        invisible={cart.length === 0}
                        sx={{
                            "& .MuiBadge-badge": {
                                right: 5,
                                top: 5,
                                padding: "0 4px",
                                height: "14px",
                                minWidth: "13px",
                            },
                        }}
                    >
                        <IconButton
                            onClick={() => dispatch(setIsCartOpen({}))}
                            sx={{ color: "white" }}
                        >
                            <ShoppingBagOutlined />
                        </IconButton>
                    </Badge>
                </Box>
            </Box>
            {/* Responsive Navigation */}
            <Box display={menuOpen ? "flex" : "none"} flexDirection="column">
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                {/* ... other responsive links */}
            </Box>
            {searchModal && <Search setSearchModal={setSearchModal} />}
        </Box>
    );
}

export default Navbar;



