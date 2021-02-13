import styled from 'styled-components';
import { Link} from 'react-router-dom'

//estilos de componentes

const Card = styled.div`
  box-sizing: border-box;
  max-width: 410px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F0F0F0;
  margin: 10vh auto;
  background: rgba( 255, 255, 255, 0.35 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 6.0px );
  -webkit-backdrop-filter: blur( 6.0px );
  border-radius: 10px;
`;

const Title = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 2rem;
  background-color: white;
  display: flex;
  flex-direction: column; 
  align-items: center;
`;

const HP = styled.div`
  background-image: url('https://i.pinimg.com/originals/46/6b/6d/466b6d5e575a9d8eabbc97ce34d07993.png');
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
const HPLogin = styled.div`
  background-image: url('https://wallpaper.dog/large/5862.jpg');
  height: 100vh;
  width: 100%;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TextExtra = styled.h2`
    position: relative;
    left: 120px;
    font-size: 30px;
`;

const Name = styled.h1`
    position: relative;
    left: 150px;
    top: 130px;
    font-size: 30px;
`;

const Input = styled.input`
  padding: 1rem;
  border: none;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;


const Button = styled(Link)`
  text-align: center;
  background: linear-gradient(to bottom, #6371c7, #5563c1);
  border: none;
  border-radius: 3px;
  padding: 1rem;
  color: white;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  &:hover {
    background: #6A5BC7;
    color: white;
   }
`;
const ButtonHarry = styled(Link)`
  margin-right: 40px;
  border: none;
  width: 100px;
  height: 100px;
  background-image: url('https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/unbtcdjirvsj8nzlzkk9.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0 8px 32px 0 rgba( 128,128,128, 0.47 );
  border-radius: 50%;
  &:hover {
    background-image: url('https://i.pinimg.com/originals/93/04/92/930492582b793746cafcecf4b0216dac.jpg');
    background-size: 280%;
    background-position: 50% 10%;

   }
`;
const ButtonSnape = styled(Link)`
  margin-left: 40px;
  border: none;
  width: 100px;
  height: 100px;
  background-image: url('https://lh3.googleusercontent.com/-YxW_sbBC1co/TWlQVHUltJI/AAAAAAAAABQ/lDs_enlptzA/s1600/snape6.jpg');
  background-repeat: no-repeat;
  background-position: 100%;
  background-size: cover;
  box-shadow: 0 8px 32px 0 rgba( 128,128,128, 0.47 );
  border-radius: 50%;
  &:hover {
    background-image: url('http://images5.fanpop.com/image/photos/29400000/Snape-snapes-family-and-friends-29400302-355-500.jpg');
    background-position: 50% 1%;
    background-size: 170%;
   }
`;

const ButtonHome = styled(Link)`
  background: #FFD300;
  border: none;
  text-decoration: none;
  border-radius: 3px;
  padding: 20px 60px;
  color: black;
  font-weight: 700;
  position:relative;
  top: 75vh;
  left: 44%;
  width: 200px;
  height: 100px;
  font-size: 0.8rem;
`;

const Logo = styled.img`
  width: 50%;
  margin-bottom: 1rem;
`;

const Status = styled.img`
  width: 100px;
  margin-bottom: 20px; 
`;

const Error = styled.div`
  background-color: #E65843;
  padding: 10px;
  font-size: 14px;
  color: white;
`;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  margin: 30px
`;

const CardChar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
`;
const CardInfo= styled.div`
  border-radius: 20px;
  background-color: white;
  box-shadow: 4px 8px 89px -12px rgba(118,118,118,0.22);
  width: 420px;
  height: 250px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CardProfile= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;


const CardProfileNameSearch= styled.div`
  border-radius: 20px;
  background-color: white;
  padding: 3%;
  max-height: 70vh;
  box-shadow: 4px 8px 89px -12px rgba(118,118,118,0.22);
  margin: 5% 10% 10% 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoColumn= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

const ExtraInfos= styled.div`
  left: 20px;
  display: flex;
  position:relative;
  left: 130px;
  bottom: 130px;
  flex-direction: row;
  align-items: center;
`;

const InfoRow= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: black;
  flex-wrap: wrap;
`;

const DivSpace= styled.div`
  margin: 40px;
`;

const ImgHouse = styled.img` 
    width: 80px;
`;
const ImgChar = styled.img` 
    width: 170px;
    height: 200px;
    border-radius: 10px;
    margin: 30px;
`;
const ImgCharProfile = styled.img` 
    width: 300px;
    height: 400px;
    border-radius: 10px;
    margin:30px;
`;

const LinkChar = styled(Link)` 
    text-decoration: none;

`;


export {HP, ImgCharProfile, ButtonHarry, ButtonSnape, TextExtra, Title, HPLogin, ButtonHome, CardProfileNameSearch, Form, Input, Button, Logo, 
  ExtraInfos, Card, Error, Wrap, CardChar, CardInfo, InfoColumn, ImgHouse, ImgChar, LinkChar, 
  CardProfile,InfoRow, DivSpace, Status, Name };