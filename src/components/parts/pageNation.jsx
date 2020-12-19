import Link from 'next/link';
import { useSelector } from 'react-redux';
import screenModeStyles from '../../styles/modules/screenMode.module.scss'

const PageNation = (props) => {

    //redux
    const screenMode = useSelector(state => state.screenMode)
  
    //component
    return (
        <div className={"transition" + " " +props.Styles.pageNation + " " + (screenMode ? screenModeStyles.ui_bc_light : screenModeStyles.ui_bc_dark)}>
            <div><Link href={props.data.leftMenuLink}>{props.data.leftMenu}</Link></div>
            {props.data.centerMenuState ? <div><Link href={props.data.centerMenuLink}>{props.data.centerMenu}</Link></div> : <div>{props.data.centerMenu}</div>}
            <div><Link href={props.data.rightMenuLink}>{props.data.rightMenu}</Link></div>
        </div>
    )
}

export default PageNation;