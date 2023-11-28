import styled from "styled-components";
import PrimaryButton from "../../../reusable-ui/PrimaryButton.jsx";
import { TextInput } from "../../../reusable-ui/TextInput.jsx";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
export default function AddProduct() {
  return (
    <AddProductStyled action="" method="get" className="form">
      <div className="image-preview">Image</div>
      <TextInput
        className="text-input nom"
        value={"Nom du produit (ex: Super Burger)"}
        Icon={<FaHamburger />}
      />
      <TextInput
        className="text-input lien"
        value={"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"}
        Icon={<BsFillCameraFill />}
      />
      <TextInput
        className="text-input prix"
        value={"Prix"}
        Icon={<MdOutlineEuro />}
      />
      <PrimaryButton
        className="submit-button"
        label={"Ajouter un nouveau produit au menu"}
      />
    </AddProductStyled>
  );
}
const AddProductStyled = styled.form`
  background: blue;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "image-preview   nom"
    "image-preview   lien"
    "image-preview   prix"
    ".               submit-button";

  height: 100%;
  width: 70%;

  .image-preview {
    grid-area: image-preview;
    background: red;
  }

  .nom {
    grid-area: nom;
  }
  .lien {
    grid-area: lien;
  }
  .prix {
    grid-area: prix;
  }

  .submit-button {
    grid-area: submit-button;
    background: #60bd4f;
    border: none;
  }
  input {
    margin-left: 13px;
  }
`;
