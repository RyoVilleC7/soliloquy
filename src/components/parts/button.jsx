import Link from 'next/link'
import { useSelector } from 'react-redux';
import Styles from '../../styles/modules/button.module.scss'
import screenModeStyles from '../../styles/modules/screenMode.module.scss'

const Button = (props) => {

    //redux
    const screenMode = useSelector(state => state.screenMode)
  
    //component
    return (
        <button className={"transition" + " " + Styles.common_btn + " " + (screenMode ? screenModeStyles.ui_bc_light : screenModeStyles.ui_bc_dark)}>
            <Link href={props.link}>
                {props.text}
            </Link>
        </button>
    )
}

export default Button;