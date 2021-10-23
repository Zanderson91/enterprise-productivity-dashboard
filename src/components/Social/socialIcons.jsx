import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Apps from "@material-ui/icons/Apps";
import { Row, Item } from "@mui-treasury/components/flex";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useGrowIconButtonStyles } from "@mui-treasury/styles/iconButton/grow";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";

export const GrowIconButtonStyle = React.memo(function GrowIconButton() {
  const largeStyles = useSizedIconButtonStyles({ childSize: 64, padding: 12 });
  const defaultGrowStyles = useGrowIconButtonStyles();
  const customGrowStyles = useGrowIconButtonStyles({
    color: "#ABCFF8",
    thickness: 6,
  });
  return (
    <Row>
      <Item>
        <Link to={ "https://instagram.com" }>
          <IconButton
            classes={largeStyles}
            className={customGrowStyles.root}
            disableTouchRipple
          >
            <img
              alt={""}
              src={
                "https://toppng.com/uploads/preview/ew-instagram-logo-transparent-related-keywords-logo-instagram-vector-2017-115629178687gobkrzwak.png"
              }
              a
              href="instagram.com"
            />
          </IconButton>
        </Link>
      </Item>
      <Item>
        <Link to={{ pathname: "https://facebook.com" }}>
          <IconButton
            classes={largeStyles}
            className={customGrowStyles.root}
            disableTouchRipple
          >
            <img
              alt={""}
              src={
                "https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
              }
            />
          </IconButton>
        </Link>
      </Item>
      <Item>
        <Link to={{ pathname: "https://twitter.com" }}>
          <IconButton
            classes={largeStyles}
            className={customGrowStyles.root}
            disableTouchRipple
          >
            <img
              alt={""}
              src={
                "http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
              }
            />
          </IconButton>
        </Link>
      </Item>
    </Row>
  );
});


