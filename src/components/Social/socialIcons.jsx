import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Apps from "@material-ui/icons/Apps";
import { Row, Item } from "@mui-treasury/components/flex";

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
          />
        </IconButton>
      </Item>
      <Item>
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
      </Item>
      <Item>
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
      </Item>
    </Row>
  );
});


