import Link from 'next/link';

const PageNation = (props) => {
    return (
        <div className={props.Styles.pageNation}>
            <div><Link href={props.data.leftMenuLink}>{props.data.leftMenu}</Link></div>
            {props.data.centerMenuState ? <div><Link href={props.data.centerMenuLink}>{props.data.centerMenu}</Link></div> : <div>{props.data.centerMenu}</div>}
            <div><Link href={props.data.rightMenuLink}>{props.data.rightMenu}</Link></div>
        </div>
    )
}

export default PageNation;