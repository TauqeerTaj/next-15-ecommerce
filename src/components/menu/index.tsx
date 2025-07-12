"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
//Redux
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectMenu } from "@/reduxToolkit/selectedMenuSlice";
import { wishListProductHandler } from "@/reduxToolkit/wishListSlice";
//Axios
import axios from "axios";
//Toast
import { ToastContainer, toast } from "react-toastify";
//Components
import LoadingComponent from "@/components/LoadingBar";
//Images
import OrderImg from "@/assests/order.png";
import UserImg from "@/assests/user.png";
import ReviewsImg from "@/assests/Icon-Reviews.png";
import CancelImg from "@/assests/icon-cancel.png";
import LogoutImg from "@/assests/Icon-logout.png";
import Heart from "@/assests/heart.png";
import Cart from "@/assests/cart.png";
import Search from "@/assests/search.png";
import User from "@/assests/user-1.png";
//Icons
import { IoMdMenu } from "react-icons/io";
//Styles
import Styles from "@/styles/menu.module.css";

const pages = [
  {
    page: "Home",
    path: "/home",
  },
  {
    page: "Contact",
    path: "/contact",
  },
  {
    page: "About",
    path: "/about",
  },
  {
    page: "Signup",
    path: "/signup",
  },
];
const handleLogout = async () => {
  await signOut({
    callbackUrl: "/login",
    redirect: true,
  });
  localStorage.clear();
  sessionStorage.clear();
};

const settings = [
  {
    icon: <Image src={UserImg} width={25} height={25} alt="user-icon" />,
    text: "Manage My Account",
    path: "/profile",
  },
  {
    icon: <Image src={OrderImg} width={25} height={25} alt="order-icon" />,
    text: "My Order",
    path: "/profile",
  },
  {
    icon: <Image src={CancelImg} width={25} height={25} alt="cancel-icon" />,
    text: "My Cancellations",
    path: "/profile",
  },
  {
    icon: <Image src={ReviewsImg} width={25} height={25} alt="reviews-icon" />,
    text: "My Reviews",
    path: "/profile",
  },

  {
    icon: <Image src={LogoutImg} width={25} height={25} alt="logout-icon" />,
    text: "Logout",
    path: "/login",
    action: handleLogout,
  },
];

function AccountMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const activeMenu = useAppSelector((state) => state?.headerMenu.menuItem);
  const wishListProducts = useAppSelector(
    (state) => state?.wishList?.wishListProducts
  );
  console.log("session:", session);
  React.useEffect(() => {
    const fetchWishList = async () => {
      const data = await getWishList();
      dispatch(wishListProductHandler(data?.data.products));
    };
    fetchWishList();
  }, [session]);

  const handleClick = () => {
    console.log("clicked the clear icon...");
  };

  const getWishList = async () => {
    try {
      const result = await axios.get(
        `/api/wishList?userId=${(session?.user as { id: string })?.id}`
      );
      setLoading(false);
      return result;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errResp = error?.response?.data.message;
        setLoading(false);
        toast.error(errResp);
      }
    }
  };

  const handleOpenNavMenu = (
    event: React.SyntheticEvent<EventTarget>
  ): void => {
    setAnchorElNav(event.currentTarget as never);
  };
  const handleOpenUserMenu = (event: React.SyntheticEvent<EventTarget>) => {
    setAnchorElUser(event.currentTarget as never);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const selectedMenu = (menu: string) => {
    dispatch(selectMenu(menu));
  };

  return (
    <AppBar position="static" sx={{ background: "#fff" }}>
      {loading && <LoadingComponent />}
      <ToastContainer />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Inter, sans-serif",
              fontWeight: "bold",
              fontSize: "24px",
              letterSpacing: ".3rem",
              color: "#000",
              textDecoration: "none",
            }}
          >
            Exclusive
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex" },
              justifyContent: "flex-start",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menuAppbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                display: { xs: "flex", md: "none", lg: "none", xl: "none" },
              }}
            >
              <IoMdMenu />
            </IconButton>
            <Menu
              id={Styles.menuAppbar}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.page}
                  onClick={() => handleLogout()}
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <Link href={page.path}>{page.page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link href={page.path} key={page.page}>
                <Button
                  onClick={() => selectedMenu(page.page)}
                  sx={{
                    my: 2,
                    mx: 3,
                    pb: 0,
                    color: "#000",
                    display: "block",
                    fontFamily: "Poppins, sans-serif",
                    textTransform: "capitalize",
                    borderBottom: "1px solid #ccc",
                    borderColor: activeMenu === page.page ? "#ccc" : "#fff",
                    "&:hover": {
                      borderColor: "#ccc",
                    },
                  }}
                >
                  {page.page}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <FormControl>
              <TextField
                size="small"
                variant="outlined"
                placeholder="What are you looking for?"
                className="searchInput"
                // onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" onClick={handleClick}>
                      <Image
                        src={Search}
                        alt="search-icon"
                        width={20}
                        height={20}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            {session && (
              <>
                <div className={Styles.notifiImages}>
                  <Box sx={{ position: "relative" }}>
                    <Link href="/wishList">
                      <Image
                        src={Heart}
                        alt="favourite-icon"
                        width={18}
                        height={18}
                      />
                      {wishListProducts.length > 0 && (
                        <Typography className={Styles.wishListNotifi}>
                          {wishListProducts.length}
                        </Typography>
                      )}
                    </Link>
                  </Box>
                  <Box>
                    <Image src={Cart} alt="cart" width={20} height={20} />
                  </Box>
                </div>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Image src={User} alt="cart" width={20} height={20} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id={Styles.menuAppbar}
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting, i) => (
                    <MenuItem
                      key={i}
                      onClick={setting.action || handleCloseUserMenu}
                    >
                      <Typography style={{ marginRight: 10 }}>
                        {setting.icon}
                      </Typography>
                      <Link href={setting?.path}>
                        <Typography sx={{ textAlign: "center" }}>
                          {setting.text}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
      <Divider orientation="horizontal" flexItem />
    </AppBar>
  );
}
export default AccountMenu;
