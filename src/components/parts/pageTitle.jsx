import styles from '../../styles/modules/layout.module.scss';

const PageTitle = (props) => {
  
    //component
    return (
        <div className={styles.pageTitle}>
            <h2>{props.pageTitle}</h2>
            <div className="border"></div>
        </div>
    )
}

export default PageTitle;