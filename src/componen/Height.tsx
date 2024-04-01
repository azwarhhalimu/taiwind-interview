interface itH {
    height: number
}

const Height: React.FC<itH> = ({ height }) => {
    return (<div style={{ height: height }}></div>);
}

export default Height;