import {Button, Container, Grid} from "@material-ui/core";

const Main = () => {
  return (
    <Container maxWidth="xl" fixed className='mt-2'>
      <Grid container spacing={3}>
        <Grid item xs>
          <Button variant='contained' color='primary'>
            Hello world
          </Button>
        </Grid>
        <Grid item xs>
          <Button variant='contained' color='primary'>
            Hello world
          </Button>
        </Grid>
        <Grid item xs>
          <Button variant='contained' color='primary'>
            Hello world
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
