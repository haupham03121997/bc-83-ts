
type ProductProps = {
  name: string,
  description: string,
  price: number
  discount?: number
}

export default function Product(props: ProductProps) {
  const { name , price, description, discount } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <span>{discount ? price - (price * discount / 100) : price}</span>
      <span>{discount ? `${discount}%` : ""}</span>
    </div>
  )
}
