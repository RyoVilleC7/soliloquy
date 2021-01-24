import Link from 'next/link'

const TagCard = (props) => {
  
    //component
    return (
        <li className="global_ui_mode">
            <Link href={props.title + '-1'}>
                <a>
                    <h2> - {props.title}</h2>
                    <span>{props.tagsCount}件の記事</span>
                </a>
            </Link>
        </li>
    )
}

export default TagCard;