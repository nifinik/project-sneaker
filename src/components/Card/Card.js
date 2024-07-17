import React from "react";
import styles from "./Card.module.scss";

const Card = ({ imageUrl, name, price, onClickFavorite, onPlus }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    onPlus({ name, imageUrl, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src="/img/heart-default.svg" alt="btn-plus" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="" />
      <h5>{name}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottom_text}>
          <span>Цена: </span>
          <b>{price} тг.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-success.svg" : "/img/btn-plus.svg"}
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
