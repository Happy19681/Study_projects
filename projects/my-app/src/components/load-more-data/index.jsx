import {  useEffect, useState } from "react"
import "./style.css"


export default function LoadMoreData() {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)

    async function fetchProducts(params) {
        try {
            setLoading(true)
            const responce = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)

            const result = await responce.json()
            if (result && result.products && result.products.length) {

                setProducts((prevData) => [...prevData, ...result.products])
                setLoading(false)
            }
            console.log(result)

        } catch (e) {
            console.log(e)
            setLoading(false)

        }
    }

    useEffect(() => {
        fetchProducts()
    }, [ ])

    if (loading) {
        return <div>Loading data .....</div>
    }


    return (
        <div className="load-more-container">
            <div className="product-container">
                {
                    products && products.length ?
                        products.map((item =>
                            <div className="product" key={item.id}>
                                <img
                                    src={item.thumbnail}
                                    alt={item.title} />
                                <p>{item.title}</p>
                            </div>))

                        : null
                }
            </div>
            <div className="button-container">
                <button onClick={() => setCount(count + 1)}>Load More Products</button>
            </div>
        </div>
    )

}