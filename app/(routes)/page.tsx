import getBillboard from '@/actions/get-billboards';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard('8549babd-7cfb-477c-ba2e-b7f63e9cec61');
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />

        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured' items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
