import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import { theme } from "../../theme";

export default function Card({image,titre,prix}) {
  return (
    <CardStyled>
      <img src={image} alt="" className='image'/>
      <div className="info-texte">
        <div className="title">{titre}</div>
        <div className="infos">
          <div className="prix">{prix}</div>
          <PrimaryButton className="boutonAjouter" label={"Ajouter"} />
        </div>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  width: 240px;
  height: 330px;
  background: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.extraRound};
  padding: 50px 20px 10px;
  box-shadow: -8px 8px 20px 0px #00000033;
  .image{
    width: 200px;
    height: 145px;
    object-fit: contain;
    margin-bottom: 15px;
  }
  .info-texte{
    .title{
      font-family: ${theme.family.Amatic};
      font-weight: ${theme.weights.bold};
      font-size: ${theme.fonts.P4};
      margin-bottom: 6.75px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .infos{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .prix{
        color: ${theme.colors.primary};
      }
      .boutonAjouter{
        height: 38px;
        width: 95px;
        padding: 12px 26.5px;
        font-size: 11px;
      }
    }
  }
`;