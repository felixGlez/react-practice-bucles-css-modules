import Button from '../button/Button'
import Icon from '../icon/Icon'
import Text from '../text/Text'
import Title from '../title/Title'
import style from './card.module.css'

const Card = props => {
    console.log(props)
    // EJEMPLO CON CHILDREN
    // return <div className={style.card}>{props.children}</div>
    
    return(
        <div className={`${style.card} ${style[props.bgColor]}`} >
            <Icon icon = {props.icon} />
            <Title title = {props.title} />
            <Text />
            <Button color = {props.bgColor} />
        </div>
    )
}

export default Card