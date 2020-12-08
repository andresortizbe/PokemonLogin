import React, {useState} from 'react';

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import auth  from "../firebase/config";
import 'fontsource-roboto';
import './configSty.css';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  
  const handleEmail = (event) => {
    const text = event.target.value;
    setemail(text)
   
};
const handlePassword = (event) => {
  const text = event.target.value;
  setpassword(text)

};
  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(`${email}`,`${password}`)
      .then((response) => {console.log(response);
        props.setIsLogged(true);
      alert('iniciaste sesion')})
      .catch((error) =>{ console.log(error);
        alert(error.message)});
  };

  return (
    <div className="signIn"> 
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

          <LockOutlinedIcon style={{ fontSize: 80 }} />
       
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={login}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleEmail}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handlePassword}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <div className="login">
          <Button
            type="submit"
            variant="outlined"
            color="secondary"
            className={classes.submit}
            
          >
            Iniciar Sesion
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className='{classes.submit} buttons'
            onClick={props.signInGoogle}
          >
            Google
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.submit}
            onClick={props.signInFacebook}
          >
            Facebook
          </Button>
          </div>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/registro" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
    </div> 
  );
}
