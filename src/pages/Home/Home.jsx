
import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import EstateCard from '../../components/EstateCard/EstateCard';
import { Helmet } from 'react-helmet';

const Home = () => {
    const estate = useLoaderData();
    console.log(estate);
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner 
            estate={estate}
            ></Banner>
            <div className='my-8'>
                <h2 className='text-center font-bold text-2xl'>Discover Our Best Deals</h2>
                <p className='text-center my-4 w-3/4 items-center mx-auto'>Welcome to our real estate website, where you can explore a myriad of incredible deals waiting to be discovered! Dive into a world of prime properties, whether you're seeking your dream home, an investment opportunity, or a commercial space.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 container justify-center items-center mx-auto'>
                {
                    estate.map(aEstate => <EstateCard
                    key={aEstate.id}
                    estate={aEstate}
                    ></EstateCard>)
                }
            </div>
        </div>
        
    );
};

export default Home;