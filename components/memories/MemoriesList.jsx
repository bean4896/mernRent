import MemoryItem from "./MemoryItem";



const MemoriesList = (props) => {    
    return (
        <div className=" masonry-2-col ">
            {props.memories.map((memory) => (
                // MemoryItem is a component that takes in a memory object as a prop
                <MemoryItem
                    key={memory.id}
                    image={memory.image}
                    title={memory.title}
                    date={memory.date}
                    description={memory.description}
               />
            ))}
        </div>
    );
    }
   
    export default MemoriesList;