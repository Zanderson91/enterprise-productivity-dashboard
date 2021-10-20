import React from "react";
import { Card } from "@material-ui/core";


<Card className="mdc-card demo-card">
    <CardPrimaryContent className="demo-card__primary-action">
        <CardMedia wide imageUrl={image} className="demo-card__media" />
        <div className="demo-card__primary">
            <Headline6 className="demo-card__title">
                Our Changing Planet
            </Headline6>
            <Subtitle2 className="demo-card__subtitle">by Kurt Wagner</Subtitle2>
        </div>
        <Body2 className="demo-card__secondary">
            Visit ten places on our planet that are undergoing the biggest changes
            today.
        </Body2>
    </CardPrimaryContent>
    <CardActions>
        <CardActionButtons>
            <Button>Read</Button>
            <Button>Bookmark</Button>
        </CardActionButtons>
        <CardActionIcons>
            <IconButton>
                <MaterialIcon icon="favorite_border" />
            </IconButton>
            <IconButton>
                <MaterialIcon icon="share" />
            </IconButton>
            <IconButton>
                <MaterialIcon icon="more_vert" />
            </IconButton>
        </CardActionIcons>
    </CardActions>
</Card>;
