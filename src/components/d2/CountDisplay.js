import { Typography } from "@material-ui/core";


const CountDisplay = ({num}) => {
    return ( 
        <Typography component="h3" variant="h3">Count: {num}</Typography>
    );
}
 
export default CountDisplay;