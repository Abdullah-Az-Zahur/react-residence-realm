
import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    const estate = useLoaderData();
    return (
        <div>
            <Banner 
            estate={estate}
            ></Banner>
            <h2>this is home</h2>
            <div>

            </div>
        </div>
        
    );
};

export default Home;