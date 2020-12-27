import Link from 'next/link'
import { useSelector } from 'react-redux';

const PostCard = (props) => {

    //redux
    const screenMode = useSelector(state => state.screenMode)
    const postDate = props.date ? props.date.substring(0,props.date.indexOf("T")) : "Date"
  
    //component
    return (
        <article className={props.archiveStyles.postCard}>
            <Link href={props.slug}>
                <a>
                {props.thumbnail ? 
                <img src={props.thumbnail} alt={props.title} width="540" height="306" />:
                <img src="/images/default-image.jpg" alt="default-image" width="540" height="306" />}
                <div className={props.archiveStyles.postStatus}>
                    <span className={props.archiveStyles.postDate}>{postDate}</span>
                    <div className={props.archiveStyles.separator}></div>
                    <span className={props.archiveStyles.postTags}>{props.tags ? props.tags : "tag"}</span>
                </div>
                <h1>{props.title}</h1>
                </a>
            </Link>
        </article>
    )
}

export default PostCard;