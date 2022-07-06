import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    root : {
        margin : 'auto',
        maxWidth : 350,
        maxHeight : 500,
        padding : 15,
        marginBottom : 20,
    }
})
const MovieDisplay = ({ data }) => {
    const classes = useStyles()
    const navigate = useNavigate()
    const viewHandler = () => {
        navigate(`/movies/${data._id}`)
    }
    return (
        <>
            <Card className={classes.root}>
                <CardMedia height={250}
                    component="img"
                    alt="No image found"
                    image={data.movieImageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.movieName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="p">
                       {data.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={viewHandler} color="primary" style={{marginRight:180}}>View</Button>
                    <Button size="small" color="warning">Book</Button>
                </CardActions>
            </Card>
       
        </>
    )
}

export default MovieDisplay