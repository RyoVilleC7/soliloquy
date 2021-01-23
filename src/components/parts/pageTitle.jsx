import styles from '../../styles/modules/layout.module.scss';

const PageTitle = (props) => {
  
    //component
    return (
        <div className={props.left ? styles.pageTitle_left : styles.pageTitle}>
            <h2>{props.pageTitle}</h2>
            <div className="border"></div>
        </div>
    )
}

export default PageTitle;