import { makeStyles } from '@material-ui/core/styles';
import '../../assets/fonts/DejaVuSansMono.ttf'

export default makeStyles((theme) => ({

  root: {
    //borderBottom : '10px solid #a9abb3',
    backgroundColor: '#25282c',
    color: '#dde0e3',
    borderRadius: '15px'
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
  cardContent: {
    paddingTop: 0,
   
  },
  divider: {
    margin: '20px 0',
  },
}));