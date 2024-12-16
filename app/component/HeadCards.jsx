import Image from "next/image";

const ProductCards = () => {
  const products = [
    {
      id: 1,
      image: "/productHead1.png", 
      description: "Modern Wooden Chair",
      price: "$179.00",
      title:"Erenhome deco",
      objective:"Creative home deco ideal",
 
    },
    {
      id: 2,
      image: "/productHead2.png",
      description: "Elegant Pendant Lamp",
      price: "$149.99",
      title:"mega sale ",
      objective:"Lamps & Lighting",
    },
    {
      id: 3,
      image: "/productHead3.png",
      description: "Luxury Leather Sofa",
      price: "$499.99",
      title:"creative design",
      objective:"Creative home deco ideal",
    },
  ];

  return (
    <div className="p-10  mt-10" >
      <h1 className="text-2xl font-semibold text-center mb-200 ">Featured Products</h1>
      <br />
      <p className="text-sm  text-center mb-100 ">Claritas est etiam processus dynamicus, qui sequitur. </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 " style={{paddingTop:"50px"}}>
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group overflow-hidden rounded-lg shadow-lg  cardHeadProduct"
          >
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.description}
              width={500}
              height={500}
              className="w-2/5 h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />

     
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80  transition-opacity duration-300"></div>
            {/* Content */}
            <div className="absolute bottom-1/4 right-4 mr-auto " >
            <h2 className="uppercase text-2xl" style={{fontWeight:"900",}}>{product.title}</h2>
            <h5>{product.objective}</h5>
           
              <h4 className=" text-sm">{product.description}</h4>
              <p className="text-xl font-semibold text-blue-300">From : {" "}{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
