import React, { useContext, useState } from "react";
import { MoneyContext } from "../contexts/MoneyContext";


const Header = () => {
    const context = useContext(MoneyContext)

    // const moneyFormat = (money) =>{
    //     return context.state.money.toLocaleString()
    // }
    return (
        <div>
         {context.totalPrice >0 && (
             <h2>
                {/* Harcayacak {moneyFormat(context.state.money-context.totalPrice)} TL paranız var */}
            Harcayacak {context.state.money-context.totalPrice} TL paranız var

             </h2>
         ) || (
            <h2>
                {/* Harcamak için {moneyFormat(context.state.money)} Tl paranız var */}
                Harcamak için {context.state.money} TL paranız var

            </h2>
         )}

        </div>
    )
}

export default Header
