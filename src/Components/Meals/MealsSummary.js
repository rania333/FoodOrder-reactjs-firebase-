import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function MealsSummary() {
    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: '45rem',
            textAlign: 'center',
            width: '90%',
            margin: 'auto',
            marginTop: '-10rem',
            position: 'relative',
            backgroundColor: '#383838',
            color: 'white',
            borderRadius: '14px',
            padding: '1rem',
            boxShadow: '0 1px 18px 10px rgb(0 0 0 / 25%)',
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }));
    const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);
        const handleExpandClick = () => {
            setExpanded(!expanded);
        };
    return ( 
        <React.Fragment>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="body2" color="white" component="p">
                        <h2>Delicious Food, Delivered To You</h2>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing  color="white">
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon  />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>
                        
                            Choose your favorite meal from our broad selection of available meals
                            and enjoy a delicious lunch or dinner at home.
                        
                    </Typography>
                    <Typography paragraph>
                        
                        All our meals are cooked with high-quality ingredients, just-in-time and
                        of course by experienced chefs!
                        
                    </Typography>
                    </CardContent>
                </Collapse>
    </Card>
        </React.Fragment>
    );
}

export default MealsSummary;