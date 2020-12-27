import Link from 'next/link';
import { useSelector } from 'react-redux';
import screenModeStyles from '../../styles/modules/screenMode.module.scss'
import Styles from '../../styles/modules/layout.module.scss'

const PageNation = (props) => {

    //redux
    const screenMode = useSelector(state => state.screenMode)

    const pn = {
        leftMenu: "Prev",
        leftMenuLink: props.data.prev ? `/archive/${props.data.page - 1}` : null,
        rightMenu: "Next",
        rightMenuLink: props.data.next ? `/archive/${props.data.page + 1}` : null,
        centerMenu: `${props.data.page}/${props.data.pages}`,
        centerMenuState: false
    }
  
    //component
    return (
        <div className={"transition" + " " + Styles.pageNation + " " + (screenMode ? screenModeStyles.ui_bc_light : screenModeStyles.ui_bc_dark)}>
            
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