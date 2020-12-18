
import Image from 'next/image'
import Link from 'next/link'

const PostCard = (props) => {
  
    //component
    return (
        <article className={props.archiveStyles.postCard}>
            <Link href='#'>
                <a>
                <Image src="/images/default-image.jpg" alt="default-image" width={540} height={306} />
                <div className={props.archiveStyles.postStatus}>
                    <span className={props.archiveStyles.postDate}>2020-12-15</span>
                    <div className={props.archiveStyles.separator}></div>
                    <span className={props.archiveStyles.postTags}>JavaScript</span>
                </div>
                <h1>{props.title}</h1>
                </a>
            </Link>
        </article>
    )
}

export default PostCard;