import * as React from 'react';
import { styled } from '@mui/material/styles';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 20,
    padding: '0 4px',
    'fontSize' : '8px'
  },
}));

export default function CustomizedBadges() {
  return (
    <IconButton aria-label="cart" color= '#FFF'>
      <StyledBadge badgeContent={1} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
