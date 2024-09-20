const ChildComponent = ({ data }) => {
    console.log('Child rendered');
    return <div>{data}</div>;
  };
  
  export default React.memo(ChildComponent, (prevProps, nextProps) => {
    return prevProps.data === nextProps.data;
  });
  