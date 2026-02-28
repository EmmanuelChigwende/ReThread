import React from "react";

const ProductCard = ({ listings }) => {
  return (
    <div className="h-[210px] shadow-lg rounded-[10px] p-2">
      <p>
        <img src={listings.images} alt="" className="aspect-square rounded-[10px]" />
      </p>
      <p className="text-[0.8rem] truncate">{listings.title}</p>
      <div className="flex justify-between">
        <p className="font-bold text-[1rem]">${listings.price}</p>
        <p className="text-[0.8rem]">{listings.condition}</p>
      </div>
      <p className="text-[0.8rem] flex gap-1 w-full mt-[5px]">
        {["S", "M", "L", "XL", "XXL"].map((s) => (
          <span
            key={s}
            className={`${listings.size === s ? "font-bold text-black" : "text-gray-500"}`}
          >
            {s}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ProductCard;
