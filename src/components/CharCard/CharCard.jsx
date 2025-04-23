import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '350px', 
  maxWidth: '600px', 
  height: '450px', 
  backgroundColor: '#3C3E44', // Color de fondo beige
  transition: 'transform 0.3s ease',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    transform: 'scale(1.08)',
    backgroundColor: '#FF9F00',
  },
  [theme.breakpoints.down('md')]: {
    width: '90%', 
    maxWidth: '500px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%', 
    maxWidth: '100%',
    padding: '12px',
  },
}));

const StyledCardMedia = styled(CardMedia)({
  backgroundImage: 'url("https://sm.ign.com/t/ign_latam/screenshot/default/677262_bce8.1920.png")',
  height: '250px', 
  objectFit: 'contain', 
});

const CharCard = ({ img = "https://images2.alphacoders.com/100/thumb-1920-1003880.png", nombre = "_____", especie = "____" }) => {
  return (
    <StyledCard>
      <CardActionArea>
        <StyledCardMedia
          component="img"
          image={img}
          alt="Character Image"
        />
        <CardContent>
        <Typography
    gutterBottom
    variant="h5"
    component="div"
    sx={{
      color: '#FFFFFF', // Blanco para el nombre
      fontWeight: 'bold', // Negrita
    }}
  >
    {nombre}
  </Typography>
  <Typography
    variant="body2"
    sx={{
      color: '#FFD700', // Dorado para la especie
      fontWeight: 'bold', // Negrita
    }}
  >
    {especie}
  </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default CharCard;
