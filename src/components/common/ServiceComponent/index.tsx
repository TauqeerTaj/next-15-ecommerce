import Image from "next/image";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
//Interface
import { ServiceData } from "@/constant/servicesInterface";
//Styles
import Styles from "@/styles/serviceSection.module.css";

interface ServiceProps {
  services: Array<ServiceData>;
  border?: boolean;
}

const ServiceComponent: React.FC<ServiceProps> = ({ services, border }) => {
  const columns = 12 / services.length;
  return (
    <Box className={Styles.serviceSection}>
      <Grid container spacing={2}>
        {services?.map((service) => (
          <Grid
            size={{ xs: 12, sm: 12, md: columns, lg: columns, xl: columns }}
            textAlign="center"
            key={service.heading}
          >
            <Box
              key={service.heading}
              className={border ? Styles.serviceBox : ""}
            >
              <Image
                src={service.image}
                alt="deliver-icon"
                width={50}
                height={50}
              />
              <Typography variant="h6" className={Styles.heading}>
                {service.heading}
              </Typography>
              <Typography>{service.details}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceComponent;
