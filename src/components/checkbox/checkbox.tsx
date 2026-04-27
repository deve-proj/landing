import styles from './checkbox.module.scss'

export function Checkbox({isSelected, onClick})
{
    return(

        <div onClick={onClick} className={`${styles.main} ${isSelected && styles.onSelected}`}>
            {isSelected && <img src="/icons/check.svg"/>}
        </div>

    )
}