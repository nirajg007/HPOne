import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import VpnKeySharpIcon from '@mui/icons-material/VpnKeySharp';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const useStyles = makeStyles(() => ({
  paper: {
    marginTop: useTheme().spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: useTheme().spacing(1),
    backgroundColor: useTheme().palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: useTheme().spacing(3),
  },
  submit: {
    margin: useTheme().spacing(3, 0, 2),
  },
}));

export default function SignInComponent(props) {
  const classes = useStyles();
  const { action } = props;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <VpnKeySharpIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} action={action} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="current"
                autoComplete="password"
              />
            </Grid>

          
          </Grid>
          <Button
            type="swubmit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
               Not Account? Create an account
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
