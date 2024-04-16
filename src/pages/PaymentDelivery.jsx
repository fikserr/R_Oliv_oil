import truck from '../img/truck.svg'
import shop from '../img/shop.svg'
import box from '../img/box.svg'
import leaf from '../img/leaf.png'
import brokly from '../img/brokly.png'
import cash from '../img/cash.svg'
import credit from '../img/credit.svg'
import coins from '../img/coins.svg'

function PaymentDelivery() {
  return (

    <div className="paymentdelivery">
        <div className="delivery__position">
                <div className="delivery">
                  <div className="container">
                      <img src={leaf} alt="" className='delivery__img'/>
                      <div className="delivery__box">
                          <div className="box">
                            <img src={truck} alt="" className='box__img'/>
                            <p className="box__text">Новая почта</p>
                          </div>
                          <div className="box">
                            <img src={box} alt="" className='box__img'/>
                            <p className="box__text">Укрпочта</p>
                          </div>
                          <div className="box">
                            <img src={shop} alt="" className='box__img'/>
                            <p className="box__text">Самовывоз</p>
                          </div>

                      </div>
                    
                    
                  </div>
                  
                </div>
                <h3 className="delivery__title">- Доставка</h3>
            
        </div>
        <div className="payment__position">
        <h3 className="payment__title">Оплата -</h3>
                <div className="payment">
                  <div className="container">
                      
                      <div className="payment__box">
                          <div className="box">
                            <img src={coins} alt="" className='box__img'/>
                            <p className="box__text">Наложенный платёж</p>
                          </div>
                          <div className="box">
                            <img src={credit} alt="" className='box__img'/>
                            <p className="box__text">Приват24</p>
                          </div>
                          <div className="box">
                            <img src={cash} alt="" className='box__img'/>
                            <p className="box__text">Самовывоз</p>
                          </div>

                      </div>
                      <img src={brokly} alt="" className='payment__img'/>
                    
                    
                  </div>
                  
                </div>
                
            
        </div>
    </div>
  )
}

export default PaymentDelivery