import { useContext } from "react";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext(ProductContext);
  let imageToShow: string;

  if (img) {
    imageToShow = img;
  } else if (product.img) {
    imageToShow = product.img;
  } else {
    imageToShow = noImage;
  }

  return (
    <img className={styles.productImg} src={imageToShow} alt="Product Image" />
  );
};