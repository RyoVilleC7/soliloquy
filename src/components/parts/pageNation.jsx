import Link from 'next/link';
import { useSelector } from 'react-redux';
import screenModeStyles from '../../styles/modules/screenMode.module.scss'
import Styles from '../../styles/modules/layout.module.scss'

const PageNation = (props) => {

    //redux
    const screenMode = useSelector(state => state.screenMode)

    //pagination
    const pn = {
        leftMenu: "Prev",
        leftMenuLink: props.data.prev ? `/${props.pageName}/${props.tagName ? props.tagName + '-' + (props.data.page - 1) : props.data.page - 1}` : null,
        rightMenu: "Next",
        rightMenuLink: props.data.next ? `/${props.pageName}/${props.tagName ? props.tagName + '-' + (props.data.page + 1) : props.data.page + 1}` : null,
        centerMenu: `${props.data.page}/${props.data.pages}`,
        centerMenuState: false
    }
  
    //component
    return (
        <div className={"transition" + " " + Styles.pageNation + " " + "global_ui_mode"}>
            
            <div>
                {pn.leftMenuLink ? 
                <Link href={pn.leftMenuLink}>
                    {pn.leftMenu}
                </Link> : 
                pn.leftMenu
                }
            </div>

            {pn.centerMenuState ? <div><Link href={pn.centerMenuLink}>{pn.centerMenu}</Link></div> : <div>{pn.centerMenu}</div>}
            
            <div>
                {pn.rightMenuLink ? 
                <Link href={pn.rightMenuLink}>
                    {pn.rightMenu}
                </Link> : 
                pn.rightMenu
                }
            </div>
        </div>
    )
}

export default PageNation;