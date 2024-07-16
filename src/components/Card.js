const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-default.svg" alt="btn-plus" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="cardBottom">
        <div className="cardBottom-text">
          <span>Цена: </span>
          <b>12 999 тг.</b>
        </div>
        <button className="button">
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
