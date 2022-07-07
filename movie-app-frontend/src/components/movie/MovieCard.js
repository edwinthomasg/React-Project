import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie } from "../redux/movieActions";

const useStyles = makeStyles({
    root : {
        margin : 'auto',
        maxWidth : 350,
        maxHeight : 500,
        padding : 15,
        marginBottom : 20,
    }
})
const MovieCard = ({ data }) => {
    const classes = useStyles()
    const admin = useSelector( state => state.adminTokener )
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const viewHandler = () => {
        navigate(`/admin/movies/${data._id}`)
    }
    const deleteHandler = () => {
        if(admin._adminId === '')
        return navigate('/admin/login',{replace:true})
        dispatch(deleteMovie(data._id))
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
                    <Button onClick={viewHandler} size="small" color="primary" style={{marginRight:180}}>View</Button>
                    <Button onClick={deleteHandler} size="small" color="secondary">Delete</Button>
                </CardActions>
            </Card>
       
        </>
    )
}

export default MovieCard