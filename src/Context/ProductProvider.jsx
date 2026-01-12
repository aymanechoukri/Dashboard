import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";

export default function ProductProvider({children}) {
    const [product, setProduct] = useState(() => {
        const saveProduct = localStorage.getItem("product");
        return saveProduct ? JSON.parse(saveProduct) : []
    });

    useEffect(() => {
        if(product !== null) {
            localStorage.setItem("product", JSON.stringify(product))
        }else {
            localStorage.removeItem("product")
        }
    }, [product])
    return(
        <ProductContext.Provider value={{product, setProduct}} >{children}</ProductContext.Provider>
    )
}