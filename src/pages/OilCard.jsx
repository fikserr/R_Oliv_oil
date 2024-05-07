import { useContext, useState } from "react"
import { Context } from "../context/Context"
import Card from "../components/Card"


function OilCard() {
  const {basket,active} = useContext(Context)


  return (
    <div className={` oil ${active ? "active" : ""}`}>
        <div className="container">
          <h1 className="oil__title">Масло</h1>
          <div className="oil__cards">
            {
              basket.map(item=>(
                <Card key={item.id} data={item} />
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default OilCard