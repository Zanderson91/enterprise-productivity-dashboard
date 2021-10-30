import React from "react";
import Color from "color";
import { makeStyles } from "@material-ui/core/styles";
import NoSsr from "@material-ui/core/NoSsr";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import "../../components/GamingCard/gamingCard.css"

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: ({ color }) => ({
    minWidth: 300,
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "2rem",
    };
  },
  title: {
    fontFamily: "Keania One",
    fontSize: "22px",
    color: "#fff",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "2rem",
    fontWeight: 500,
    fontSize: 14,
  },
}));

const CustomCard = ({ classes, image, title, subtitle }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={"h2"}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const SolidGameCardDemo = React.memo(function SolidGameCard() {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: "#203f52" });
  const styles2 = useStyles({ color: "#4d137f" });
  const styles3 = useStyles({ color: "#ff9900" });
  const styles4 = useStyles({ color: "#34241e" });
  return (
    <>
      <Grid classes={gridStyles} container spacing={3} wrap={"nowrap"}>
        <Grid item>
          <a target="_blank" href={"https://www.cinemark.com/movies/dune"}>
            <CustomCard
              classes={styles}
              title={"Dune"}
              subtitle={
                "A mythic and emotionally charged hero's journey, Dune tells the story of Paul Atreides..."
              }
              image={
                "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
              }
            />
          </a>
        </Grid>
        <Grid item>
          <a
            target="_blank"
            href={"https://www.cinemark.com/movies/venom-let-there-be-carnage"}
          >
            <CustomCard
              classes={styles2}
              title={"Venom 2"}
              subtitle={
                "In the film, Brock struggles to adjust to life as the host of the alien symbiote Venom"
              }
              image={
                "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/223021/FND_poster_VenomLetThereBeCarnage_InTheaters.jpg"
              }
            />
          </a>
        </Grid>
        <Grid item>
          <a target="_blank" href={"https://www.cinemark.com/movies/eternals"}>
            <CustomCard
              classes={styles3}
              title={"Eternals"}
              subtitle={
                "Marvel Studios Eternals features an exciting new team of Super Heroes in the Marvel Cinematic Universe..."
              }
              image={
                "https://amc-theatres-res.cloudinary.com/image/upload/v1565033409/amc-cdn/general/0dcb2ef0-ff5c-4fb1-9d86-7f75498d11e2/AMCPromo_your-guide-to-marvels-eternals.jpg"
              }
            />
          </a>
        </Grid>
        <Grid item>
          <a
            target="_blank"
            href={"https://www.cinemark.com/movies/no-time-to-die"}
          >
            <CustomCard
              classes={styles4}
              title={"No Time to Die"}
              subtitle={
                "In No Time To Die, Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when.."
              }
              image={
                "https://www.007.com/wp-content/uploads/2020/10/NTTD_DIGITAL_1S_BW_FULL_CHARACTER_DC_OV.jpg"
              }
            />
          </a>
        </Grid>
      </Grid>
    </>
  );
});
export default SolidGameCardDemo;
