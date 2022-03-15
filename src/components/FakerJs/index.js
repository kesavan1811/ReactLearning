import { Button, Card, makeStyles,CardActions, TextField,CardContent, Typography, CardActionArea, CardMedia } from "@material-ui/core";
import React from "react";
import { faker } from "@faker-js/faker";

const useStyle = makeStyles({
    root:{
        maxWidth:345,
    },
    media:{
        height:240
    },
});

function Faker() {
    const classes = useStyle()
  return (
      <>
    {/* <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "40vh"
      }}
    >
      <form>
        <TextField
          label="First name"
          variant="outlined"
          placeholder={faker.name.firstName()}
        />
        <TextField
          label="Last name"
          variant="outlined"
          placeholder={faker.name.lastName()}
        />
        <TextField
          label="Job title"
          variant="outlined"
          placeholder={faker.name.jobTitle()}
        />
        <TextField
          label="Street address"
          variant="outlined"
          placeholder={faker.address.streetAddress()}
        />
        <TextField
          label="Coutnry"
          variant="outlined"
          placeholder={faker.address.country()}
        />
        <br />
        <br />
        <TextField
          label="Phone number"
          variant="outlined"
          placeholder={faker.phone.phoneNumber("+91 ### ### ####")}
        />
        <TextField
          label="Email"
          variant="outlined"
          placeholder={faker.internet.email()}
        />
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={() => {}}>
          Submit
        </Button>
      </form>
    </div> */}


    <div>
        
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          height="140"
          image={faker.image.image()}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {faker.finance.accountName()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {faker.finance.currencySymbol()}{faker.finance.amount()}
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    </>
  );
}

export default Faker;
