import React, { useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "90px",
    minHeight: "calc(100vh - 220px)",
    display: "flex",
    alignItems: "center",
  },
  card: {
    textAlign: "center",
    padding: "25px 25px 40px",
    margin: "0 auto",
    height: "350px",
    width: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  input: {
    display: "block",
    width: "100%",
    height: "50px",
    marginBottom: "15px",
    fontSize: "14px",
  },
  signup: {
    marginTop: "20px",
  },
}));

function Register() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title="Sign Up" />
        <CardContent>
          <form>
            <OutlinedInput
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.input}
            />
            <OutlinedInput
              name="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={classes.input}
            />

            <Button
              type="submit"
              onClick={register}
              fullWidth="true"
              color="primary"
              variant="outlined"
              className={classes.signup}
            >
              Sign up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;
