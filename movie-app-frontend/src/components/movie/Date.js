import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";

const Date = ({data}) => {
    const useStyles = makeStyles({
        root : {
            margin : 'auto',
            width : 180,
            height : 80,
            padding : 10,
            marginBottom : 10,
        }
    })
    const classes = useStyles()
    const navigate = useNavigate()
    const displaySeat = () => {
        console.log("Seat")
    }
    return(<>
                    <Card className={classes.root}>
                    <CardContent>
                        <Typography style={{cursor : 'pointer',textAlign:'center'}} gutterBottom variant="h5" component="h2" onClick={displaySeat}>
                           {data.showDate.substring(0,10)}
                        </Typography>
                    </CardContent>
                </Card>
    </>)
}

export default Date