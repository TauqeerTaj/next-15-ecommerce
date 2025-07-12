import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AccountMenu from "@/components/menu";

const Header: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={12}>
          <AccountMenu />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
