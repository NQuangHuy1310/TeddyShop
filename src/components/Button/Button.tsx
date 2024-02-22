import classNames from 'classnames/bind'

import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

interface buttonProps {
  to?: string
  href?: string
  type?: string
  outline?: boolean
  background?: boolean
  primary?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  children?: string | React.ReactNode
  className?: string
  category?: boolean
  small?: boolean
  large?: boolean
}

const Button: React.FC<buttonProps> = ({
  to,
  href,
  type,
  outline = false,
  disabled = false,
  background = false,
  primary = false,
  small = false,
  large = false,
  category = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick
}) => {
  let Comp: React.ElementType = 'button'
  const props: any = { onClick }

  // remove even listener when button is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key]
      }
    })
  }

  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }

  // Thêm type vào object props
  if (type) {
    props.type = type
  }

  const classes = cx('wrapper', {
    [className!]: className,
    to,
    href,
    type,
    outline,
    background,
    primary,
    leftIcon,
    rightIcon,
    onClick,
    disabled,
    small,
    large,
    category
  })

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  )
}

export default Button
