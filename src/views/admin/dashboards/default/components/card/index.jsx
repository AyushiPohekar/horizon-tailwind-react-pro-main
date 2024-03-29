function Card(props){
  const { variant, extra,backgroundcolor, children, ...rest } = props;
  console.log(
    getComputedStyle(document.documentElement).getPropertyValue(
      "var(--color-background-100)"
    )
  );
  return (
    <div
      className={`!z-5 relative flex flex-col rounded-[20px] bg-clip-border shadow-3xl ${
        props.default
          ? "shadow-shadow-500 dark:shadow-none"
          : "shadow-shadow-100 dark:shadow-none"
      }  dark:!bg-navy-800 dark:text-white  ${extra} ${backgroundcolor}` }
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
