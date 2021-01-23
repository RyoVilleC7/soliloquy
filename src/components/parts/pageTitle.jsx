import styles from '../../styles/modules/layout.module.scss';

const PageTitle = (props) => {
  
    //component
    return (
        <div className={props.sp ? styles.pageTitle_nav : styles.pageTitle}>
            <h2>{props.pageTitle}</h2>
            <div className="border"></div>
        </div>
    )
}

export default PageTitle;