import styles from "./Card.module.scss";

const Card = ({ imageUrl, name, price }) => {
  const onClickBtn = () => {
    alert(name);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-default.svg" alt="btn-plus" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="" />
      <h5>{name}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottom_text}>
          <span>Цена: </span>
          <b>{price} тг.</b>
        </div>
        <button className={styles.button} onClick={onClickBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#5C5C5C"
              d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8"
            />
            <path
              fill="#5C5C5C"
              d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
