import React, { useState } from 'react';

export default function ColorAndSize({ vData, setColor, setSize }) {
  const [isCheck, setIsCheck] = useState(false);
  const [sizeDatas, setSizeDatas] = useState(vData)
  console.log(sizeDatas);
  console.log(vData)

  function toggleCheck(e) {
    setIsCheck(!isCheck);
    alert(e.target.value);
  }

  return (
    <div className="pro-details-size-color">
      <div className="pro-details-color-wrap">
        <span>Color</span>
        <div className="pro-details-color-content">
          {vData ? (
            vData.map((item, index) => (
              <label
                key={index}
                className={`pro-details-color-content--single ${item.color}`}
              >
                <input
                  type="radio"
                  name="product-color"
                  value={item.color}
                  checked={isCheck}
                  onClick={()=>setColor(item.color)}
                />
                <span className="checkmark"></span>
              </label>
            ))
          ) : (
            <p style={{ fontSize: '0.7rem' }}>no color</p>
          )}
        </div>
      </div>
      <div className="pro-details-size">
        <span>Size</span>
        <div className="pro-details-size-content">
          {/*
            sizeDatas.map((item,idx)=>(
            <label key={idx} className="pro-details-size-content--single">
            <input type="radio" value={item.size} checked="" />
            <span className="size-name">{item.size}</span>
          </label>

            ))*/
          }

          
        </div>
      </div>
    </div>
  );
}
