import React from 'react'

type Props = {
    info:string,
    data:string,
}

const OrderInfo = ({info,data}: Props) => {
  return (
         <div className="flex justify-between px-4 py-2">
                <p>{info}</p>
                <p>{data}</p>
            </div>
  )
}

export default OrderInfo