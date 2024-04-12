import { Context } from '../context/Context'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext } from 'react'

function Basket() {
    const {totalCount,basket,active,setActive,clearNumber} = useContext(Context)
    
  return (
    <div>
                <div className={`basket__hover ${active == true ? "active" : ""}`} >
                    <div className="basket container">
                        <div className="basket__top">
                          <h3 className='basket__title'>КОРЗИНА</h3>
                          <button className='basket__close' onClick={()=> setActive(false)}><IoIosCloseCircleOutline /></button>
                        </div>

                        
                          {basket.map( item => (
                            <div className="basket__products" key={item.id}>
                              <div className={`products__name-liter ${item.count > 0 ? "active" : ""}`}>
                                <h5 className="products__name">{item.title}</h5>
                                <p className="products__liter">{item.liter}</p>
                              </div>
                              <div className={`product container ${item.count > 0 ? "active" : ""}`}>
                                  <img src={item.oilImg} alt="" className="product__img "/>
                                  <div className="header__num">
                                                  <button className="minus" onClick={() => totalCount("-", item.id)}>-</button>
                                                    <div className="num">{item.count}</div>
                                                  <button className="plus" onClick={() => totalCount("+", item.id)}>+</button>
                                  </div>

                                  <div className="product__price">
                                    <h4 className="product__price-total"> {item.totalCurrency = item.count * item.currency}</h4>
                                    <button className='product__close' onClick={()=> clearNumber(item.id)}><IoIosCloseCircleOutline /></button>

                                  </div>

                              </div>

                            </div>
                          ))}


                          




                        



                    </div>
        </div>
    </div>
  )
}

export default Basket