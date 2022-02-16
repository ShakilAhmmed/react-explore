function Badge(props) {
    let color = "badge ";
    switch (props.type) {
        case "success":
            color += "text-success";
            break;
        case "error":
            color += "text-danger";
            break;
        default:
            color += "text-default";
    }
    return (
        <>
            <span className={color}>{props.value}</span>
        </>
    );
}

export default Badge;