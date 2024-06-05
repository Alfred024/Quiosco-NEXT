"use client";
import { useState, useEffect } from "react";
import { formatCurrency, getImagePath } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [loading, setLoading] = useState(true);
  const imagePath = getImagePath(product.image);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simula 2 segundos de carga

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="border bg-white rounded-md overflow-hidden">
        <div className="animate-pulse">
          <div className="bg-gray-300 h-64 w-full"></div>
          <div className="p-5">
            <div className="h-8 bg-gray-300 rounded-md mb-4"></div>
            <div className="h-8 bg-gray-300 rounded-md w-1/2"></div>
            <div className="mt-5 h-12 bg-gray-300 rounded-md w-1/3"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border bg-white rounded-md overflow-hidden">
      <Image
        width={400}
        height={500}
        src={imagePath}
        alt={`Imagen platillo ${product.name}`}
      />

      <div className="p-5 flex flex-col justify-center">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className="mt-5 font-black text-4xl">{formatCurrency(product.price)}</p>
        <AddProductButton product={product} />
      </div>
    </div>
  );
}
