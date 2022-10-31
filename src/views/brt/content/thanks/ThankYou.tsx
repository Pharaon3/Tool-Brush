import { Link as RouterLink } from 'react-router-dom';

// Material-UI
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Box, Typography, Button } from '@mui/material';

// Third Party
import { FormattedMessage } from 'react-intl';

// Project Imports
// import Logo from 'components/Logo';

// Assets
import CheckIcon from 'assets/images/icons/check_large.png';

// =============================|| THANK YOU ||============================= //

const ThankYou = () => (
  <Container>
    <Grid container justifyContent="space-between">
      {/* ********************************************************************* */}
      {/* LEFT GRID */}
      <Grid item xs={12} md={3} className="tha-left-grid">
        {/* <Logo /> */}
      </Grid>
      {/* ********************************************************************* */}
      {/* MIDDLE GRID */}
      <Grid item xs={12} md={6} className="tha-middle-grid content-grid">
        <Box className="header">
          <Grid container item xs={12}>
            <img src={CheckIcon} alt="Done" />
            <Typography variant="h1">
              <FormattedMessage id="done" />
            </Typography>
          </Grid>
        </Box>
        <Box className="content">
          <Grid item xs={12}>
            <Typography variant="h2">
              Your recommendation was sent to:
            </Typography>
          </Grid>
        </Box>
        <Box className="content">
          <Grid item xs={12}>
            <Typography variant="h3">oscar.olin@kan.se</Typography>
          </Grid>
        </Box>
        <Box className="content">
          <Button
            component={RouterLink}
            to="/"
            fullWidth
            variant="contained"
            className="back-button"
          >
            Back to startpage
          </Button>
        </Box>
      </Grid>
      {/* ********************************************************************* */}
      {/* RIGHT GRID */}
      <Grid item xs={12} md={3} className="tha-right-grid">
        {/* LEAVE EMPTY */}
      </Grid>
    </Grid>
  </Container>
);

export default ThankYou;
