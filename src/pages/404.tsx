import { MyPage } from '@/components/layouts/types';

const Custom404: MyPage = () => {
  return (
    <>
      <section className='section pt-20 pb-5'>

        <h1 className='text-[40px] font-bold text-center'>Page 404 Not Found</h1>
      </section>
    </>
  )
}
export default Custom404;
Custom404.Layout = "Default";