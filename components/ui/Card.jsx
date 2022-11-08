function Card(props) {
  return (
    <div className="p-3 break-inside bg-white dark:bg-[#1e1e1e] dark:border-[#383838] rounded-md border-[#e9ecef] border-[1px] mb-6">
      {props.children}
    </div>
  );
}

export default Card;
