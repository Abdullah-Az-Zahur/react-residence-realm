
import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import EstateCard from '../../components/EstateCard/EstateCard';

const Home = () => {
    const estate = useLoaderData();
    console.log(estate);
    return (
        <div>
            <Banner 
            estate={estate}
            ></Banner>
            <h2>this is home</h2>
            <div className='grid grid-cols-1 md:grid-cols-3'>
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