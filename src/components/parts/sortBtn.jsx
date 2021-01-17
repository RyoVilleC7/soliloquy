import { useEffect, useRef } from 'react';
import Link from 'next/link'
import { useDispatch,useSelector } from 'react-redux';
import { sortBtn_cat_Change, sortBtn_falseOnly_Change } from '../../store/actions/action';
import styles from '../../styles/modules/sortbtn.module.scss';
import {store} from '../../store/store';

const SortBtn = () => {

    const sortBtnRef = useRef(null);
    const documentClickHandler = useRef(null)

    useEffect(() => {
        console.log(store.getState().sortBtn_cat)
        documentClickHandler.current = e => {
            if(sortBtnRef.current.contains(e.target) !== false){
                dispatch(sortBtn_cat_Change());
            }else {
                dispatch(sortBtn_falseOnly_Change());
                removeDocumentClickHandler();
            }
        }
    },[]);

    const removeDocumentClickHandler = () => {
      document.removeEventListener('click', documentClickHandler.current)
    }
  
    const handleToggleButtonClick = () => {
      document.addEventListener('click', documentClickHandler.current)
    }

    //redux
    const dispatch = useDispatch();
    const sortBtnCatState = useSelector(state => state.sortBtn_cat)
  
    //component
    return (
        <div className={styles.sortbtn} onClick={handleToggleButtonClick}>

            <div className={styles.sortbtn_view} ref={sortBtnRef}>
                <span>Category</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="9.184" height="4.592" viewBox="0 0 9.184 4.592">
                    <path id="パス_7" data-name="パス 7" d="M7,10l4.592,4.592L16.184,10Z" transform="translate(-7 -10)" fill="#fff"/>
                </svg>
            </div>

            <div className={styles.sortbtn_lists} style={sortBtnCatState ? {display: "block"} : {display: "none"}}>
                <ul>
                    <li><Link href="/">category</Link></li>
                    <li><Link href="/">category</Link></li>
                    <li><Link href="/">category</Link></li>
                    <li><Link href="/">category</Link></li>
                    <li><Link href="/">category</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default SortBtn;