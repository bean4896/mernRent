import HouseItem from "./HouseItem";
import Masonry from 'react-masonry-css'

const HouseList = (props) => {    
    const breakpointColumnsObj = {
        default: 2,
        1100: 2,
        700: 2,
        500: 1
      };    
    return (
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
            {props.houses.map((house) => (
                // houseItem is a component that takes in a house object as a prop
                <HouseItem
                    key={house.id}
                    image={house.image}
                    title={house.title}
                    date={house.date}
                    description={house.description}
               />
            ))}
       </Masonry>
    );
    }
   
    export default HouseList;