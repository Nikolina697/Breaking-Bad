import Character from './character';
import {Box, Grid} from '@material-ui/core';

const Characters=({data})=> {
   return(
    <Box style={{margin: 20}}>
       <Grid container spacing={4}>
          {
              data.map(item=>(
                  <Grid item xs={3}>
                       <Character key={item.char_id} item={item}/>
                  </Grid>
                ))
            }
        </Grid>  
    </Box>
)
}
      

export default Characters;