

import SectionTitle from "../../../SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../../hooks/useMenu";



const PopularMenu = () => {
    const [menu]=useMenu();
    const popular = menu.filter(item => item.category === 'popular');
 
    return (
        <section className="mb-12 w-4/5 mx-auto">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className="flex items-center justify-center"><button className="btn btn-outline text-center border-0 border-b-4 mt-4">View Full Menu</button></div>
        </section>
    );
};

export default PopularMenu;
