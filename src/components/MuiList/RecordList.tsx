import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styled from '@emotion/styled';
import { StyledEngineProvider } from '@mui/styled-engine'; // 본문을 감싸줘야함

export const RecordList = () => {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const [clickedTab, setClickedTab] = React.useState(false);
  const handleOnClick = () => {
    setClickedTab(!clickedTab);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ListItemButton onClick={handleClick} sx={{ pl: 1 }}>
        {open ? (
          <ArrowDropDownIcon fontSize="large" />
        ) : (
          <ArrowRightIcon fontSize="large" />
        )}
        <DetailTitle>실적관리</DetailTitle>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemButton onClick={handleOnClick} sx={{ pl: 6 }}>
          {clickedTab ? (
            <ArrowDropDownIcon fontSize="large" />
          ) : (
            <ArrowRightIcon fontSize="large" />
          )}

          <DetailTitle>목표</DetailTitle>
        </ListItemButton>
        <Collapse in={clickedTab} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 11 }}>
            <DetailTitleMenu>판매대수</DetailTitleMenu>
          </ListItemButton>
          <ListItemButton sx={{ pl: 11 }}>
            <DetailTitleMenu>신차 트레드인</DetailTitleMenu>
          </ListItemButton>
          <ListItemButton sx={{ pl: 11 }}>
            <DetailTitleMenu>순수직매입</DetailTitleMenu>
          </ListItemButton>
          <ListItemButton sx={{ pl: 11 }}>
            <ListItemText>
              <DetailTitleMenu>B2B</DetailTitleMenu>
            </ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ pl: 11 }}>
            <DetailTitleMenu>KR신차타겟, 데모카</DetailTitleMenu>
          </ListItemButton>
          <ListItemButton sx={{ pl: 11 }}>
            <DetailTitleMenu>최종판매이익</DetailTitleMenu>
          </ListItemButton>
        </Collapse>
      </Collapse>
    </StyledEngineProvider>
  );
};

const DetailTitle = styled.span`
  color: black;
  font-size: 15px;
  ::active {
    color: #4d6aab;
  }
`;

const DetailTitleMenu = styled.span`
  color: black;
  font-size: 15px;
  ::active {
    color: #4d6aab;
    background-color: #dad9d9;
  }
`;
