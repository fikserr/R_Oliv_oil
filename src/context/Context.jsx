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
    currency: "115 000",
    count: 0
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
    currency: "115 000",
    count: 0
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
    currency: "115 000",
    count: 0
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
    currency: "115 000",
    count: 0
  }
]

function ContextProvider({children}) {    
  let arrayJSON = JSON.stringify(data);
  localStorage.setItem('myArray', arrayJSON);
  const [basket, setBasket] = useState(data);
  const [sonlar,setSonlar] = useState(0)
  const [color,SetColor] = useState(1)

  
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
      
      return item;
    });


    setBasket(updatedArray);
    let updatedArrayJSON = JSON.stringify(updatedArray);
    localStorage.setItem('myArray', updatedArrayJSON);
    let total = updatedArray.reduce((acc, item) => acc + item.count, 0)
     setSonlar(total)
    
  }


  if (itemId == 1) {
    document.documentElement.dataset.theme = "idone"
  }else if (color == 2) {
    document.documentElement.dataset.theme = "idtwo"
  }else if (color == 3) {
    document.documentElement.dataset.theme = "idthree"
  }else if (color == 4) {
    document.documentElement.dataset.theme = "idfour"
  }else{
    return console.log(color);
  }

    
  
    
  

  return (
    <Context.Provider value={{sonlar,basket,setBasket,data,totalCount,color,SetColor}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider