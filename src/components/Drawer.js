const Drawer = ({ onClose, items = [] }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина{" "}
          <img
            onClick={onClose}
            className="removeBtn"
            src={`${process.env.PUBLIC_URL}/img/btn-remove.svg`}
            alt=""
          />
        </h2>
        <div className="drawer-items">
          {items.map((obj) => (
            <div className="cartItem">
              <img
                width={70}
                height={70}
                src={`${obj.imageUrl}`}
                alt="sneakers1"
              />
              <div className="cartItem-text">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 тг</b>
              </div>
              <img
                className="removeBtn"
                src={`${process.env.PUBLIC_URL}/img/btn-remove.svg`}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li className="drawer-items-item">
              <span>Итого:</span>
              <div></div>
              <b>21 498 тг</b>
            </li>
            <li className="drawer-items-item">
              <span>Налог 5%:</span>
              <div></div>
              <b>10 574 тг</b>
            </li>
          </ul>
          <button className="greenBtn">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
