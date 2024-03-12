import { createContext, useState } from "react";
import salat from "../img/dlia_salata.png";
import italianskoe from "../img/italianskoe.png";
import forMeat from "../img/dlia_myasa.png";
import Eastern from "../img/vostochnoe.png";
import Potato from "../img/image_12.png";
import lagmon from "../img/image_16.png";
import meat from "../img/image_14.png";
import plov from "../img/image_15.png";

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
    currency: "115 000"
  },
  {
    id:2,
    oilImg: italianskoe,
    fruit: lagmon,
    productTitle: "Наши продукты",
    title: `Масло “Итальянское”`,
    text: "Идеальное решение для легкого и быстрого маринада мяса, можно добавить капельку масла и после приготовления. ",
    compound: "Состав: оливковое масло холодного отжима, розмарин, тимьян, базилик, орегано, чеснок, смесь из 5 перцев.",
    liter: "250 мл",  
    currency: "115 000"
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
    currency: "115 000"
  },
  {
    id:4,
    oilImg: Eastern,
    fruit: plov,
    productTitle: "Наши продукты",
    title: `Масло “Восточное”`,
    text: "Идеальное решение для легкого и быстрого маринада мяса, можно добавить капельку масла и после приготовления. ",
    compound: "Состав: оливковое масло холодного отжима, розмарин, тимьян, базилик, орегано, чеснок, смесь из 5 перцев.",
    liter: "250 мл",  
    currency: "115 000"
  }
]

function ContextProvider({children}) {    
    const [basket,setBasket] = useState(0)
    const updateBasket = (operation) => {
      if (operation === "+") {
        setBasket(basket + 1);
      } else if (operation === "-") {
        if (basket > 0) {
          setBasket(basket - 1);
        }
      }
    };
  

  return (
    <Context.Provider value={{basket,setBasket,data,updateBasket}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider