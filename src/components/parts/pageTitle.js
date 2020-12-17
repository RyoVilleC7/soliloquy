const PageTitle = (props) => {
    return (
        <div className={props.Styles.pageTitle}>
            <h2>{props.pageTitle}</h2>
            <div className="border"></div>
        </div>
    )
}

export default PageTitle;