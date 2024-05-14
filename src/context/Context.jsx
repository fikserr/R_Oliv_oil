import { createContext, useState } from "react";
import salat from "../img/dlia_salata.png";
import italianskoe from "../img/italianskoe.png";
import forMeat from "../img/dlia_myasa.png";
import Eastern from "../img/vostochnoe.png";
import Potato from "../img/image_12.png";
import lagmon from "../img/image_16.png";
import meat from "../img/image_14.png";
import plov from "../img/image_15.png";
import oneSalat from "../img/dlia.png"
import italian from "../img/italian.png"
import myasa from "../img/myasa.png"
import vostoch from "../img/vostoch.png"


export const Context = createContext()

export const data = [
  {
    id:1,
    oilImg: salat,
    fruit: Potato,
    productTitle: "Наши продукты",
    title: `Масло “Для салата”`,
    text: "Название говорит само за себя. Это идеальная заправка, которая даже скучной и привычной капусте придаст неповторимый вкус и аромат. ",
    compound: "Состав: оливковое масло холодного отжима, розмарин, тимьян, базилик, орегано, чеснок, смесь из 5 перцев.",
    liter: "250 мл",  
    currency: 115 ,
    count: 0,
    totalCurrency: 0,
    littleImg: oneSalat,
  },
  {
    id:2,
    oilImg: italianskoe,
    fruit: lagmon,
    productTitle: "Наши продукты",
    title: `Масло “Итальянское”`,
    text: "Добавит ноток Италии в любое ваше блюдо. Паста, ризотто, пицца, салаты - его везде можно использовать. ",
    compound: "Состав: оливковое масло холодного отжима, розмарин, тимьян, базилик, орегано, чеснок, смесь из 5 перцев.",
    liter: "250 мл",  
    currency: 115 ,
    count: 0,
    totalCurrency: 0,
    littleImg: italian,
  },
  {
    id:3,
    oilImg: forMeat,
    fruit: meat,
    productTitle: "Наши продукты",
    title: `Масло “Для мяса”`,
    text: "Идеальное решение для легкого и быстрого маринада мяса, можно добавить капельку масла и после приготовления. ",
    compound: "Состав: оливковое масло холодного отжима, розмарин, тимьян, базилик, орегано, чеснок, смесь из 5 перцев.",
    liter: "250 мл",  
    currency: 115 ,
    count: 0,
    totalCurrency: 0,
    littleImg: myasa ,
  },
  {
    id:4,
    oilImg: Eastern,
    fruit: plov,
    productTitle: "Наши продукты",
    title: `Масло “Восточное”`,
    text: "Oтлично подойдёт для приготовления блюд среднеазиатской кухни: шурпа, плов, лагман, манты с этим маслом приобретут традиционные нотки Средней Азии.",
    compound: "Состав: оливковое масло холодного отжима, розмарин, тимьян, базилик, орегано, чеснок, смесь из 5 перцев.",
    liter: "250 мл",  
    currency: 115,
    count: 0,
    totalCurrency: 0,
    littleImg: vostoch,
  }
]

function ContextProvider({children}) {    
  let arrayJSON = JSON.stringify(data);
  localStorage.setItem('myArray', arrayJSON);
  const [basket, setBasket] = useState(data);
  const [sonlar,setSonlar] = useState(0)
  const [color,SetColor] = useState(1)
  const [active,setActive] = useState(false)


  
  function totalCount(operation, itemId) {
    let updatedArray = basket.map(item => {
      if (operation === "+") {
        
        if (item.id === itemId) {
          return { ...item, count: item.count + 1 };
          
        }
      } else if (operation === "-") {
        if (item.id === itemId && item.count > 0) {
          return { ...item, count: item.count - 1 };
        }
      }
      console.log(active);
      return item;
    });

   

      
    
  
    


    setBasket(updatedArray);
    let updatedArrayJSON = JSON.stringify(updatedArray);
    localStorage.setItem('myArray', updatedArrayJSON);
    let total = updatedArray.reduce((acc, item) => acc + item.count, 0)
     setSonlar(total)
    
     
    
  }
  console.log(basket);




  function clearNumber(itemId) {
    basket.map(item => {
        if (item.id === itemId) {
            return { ...item, count: item.count = 0 };
          }
    }
        )
        totalCount()
    } 
    


  return (
    <Context.Provider value={{clearNumber,active,setActive,sonlar,basket,setBasket,data,totalCount,color,SetColor}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider