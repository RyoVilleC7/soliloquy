import Link from 'next/link'
import PostStyles from '../../styles/modules/post.module.scss'

const BreadCrumb = (props) => {
    return (
        <ul className={PostStyles.breadcrumb}>
            <li><Link href="#">Archive</Link></li>
            <li>{props.title}</li>
        </ul>
    )
}

export default BreadCrumb;