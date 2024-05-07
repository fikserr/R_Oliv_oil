import { useContext, useState } from "react"
import { Context } from "../context/Context"



function Card({data}) {
    const {totalCount,setActive,active} = useContext(Context)
    const [color,setColor] = useState(0)
    if (color === 1) {
        document.documentElement.dataset.theme = "idone"
      }else if (color === 2) {
        document.documentElement.dataset.theme = "idtwo"
      }else if (color === 3) {
        document.documentElement.dataset.theme = "idthree"
      }else if (color === 4) {
        document.documentElement.dataset.theme = "idfour"
      }

  return (
    <div className={` card ${active ? "active" : ""}`} onChange={()=>setColor(data.id)}  >
            <div className="card__img-box">
                <img src={data.littleImg} alt="image" />
            </div>
            <h5 className="card__title">{data.title}</h5>
            <p className="card__text-one">{data.text}</p>
            <p className="card__text">{data.compound}</p>


            <div className="card__info">
                                        <div className="card__info-num">
                                            <button className="minus" onClick={() => totalCount("-", data.id)}>-</button>
                                              <div className="num">{data.count}</div>
                                            <button className="plus" onClick={() => totalCount("+", data.id)}>+</button>
                                          </div>

                                          <div className="card__liter-price">
                                            <p className="card__liter">{data.liter}</p>
                                            <p className="card__price">{data.currency} so`m</p>
                                          </div>


            </div>

            <div className="card__button">
                <button onClick={()=>setActive(true)}>В КОРЗИНУ</button>
                <button>ЗАКАЗАТЬ В ТГ</button>
            </div>

    </div>
  )
}

export default Card