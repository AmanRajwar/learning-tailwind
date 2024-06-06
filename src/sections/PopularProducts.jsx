import PopularProductCard from '../components/PopularProductCard';
import { products } from '../constants';

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flext flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Popular</span> Products</h2>
        <p className='"lg:max-w-lg mt-2 font-montserrat'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gid-cols-1'>
        {products.map((product) => (
          <PopularProductCard key={products.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts