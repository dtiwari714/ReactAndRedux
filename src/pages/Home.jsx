import { useEffect } from "react";
import { add } from "../Redux/Cartslice";
import { useDispatch , useSelector } from "react-redux";
import {STATUS, fetchproducts } from "../Redux/ProductSlice";

const Home = () => {
  //const [products, setPoroduct] = useState([]);
  const dispatch =useDispatch();
  const {data:products,status}= useSelector((state)=>state.product);
//   useEffect(() => {
//     // const fetchproduct = async () => {
//     //   const res = await fetch("https://fakestoreapi.com/products");
//     //   const data = await res.json();
//     //   setPoroduct(data);
//     // };
//     // fetchproduct();
//   }, []);

useEffect(()=>{
    dispatch(fetchproducts());  
 },[])

  const handleadd = (product) => {
    dispatch (add({product}))
  };
  if(status === STATUS.Loading){
    return <h2 style={{fontWeight:"bolder"}}>Loading...</h2>
}

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => handleadd(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
