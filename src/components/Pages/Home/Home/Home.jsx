import Banner from "../Banner/Banner";
import CardService from "../CardService/CardService";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopulerMenu/PopulerMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <CardService></CardService>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;