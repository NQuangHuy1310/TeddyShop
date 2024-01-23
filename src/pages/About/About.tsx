import className from 'classnames/bind'
import { MdDoubleArrow } from 'react-icons/md'

import styles from './About.module.scss'
import Heading from '~/components/Heading'
import Button from '~/components/Button'
import UserItem from '~/components/UserItem'
import images from '~/assets'
import { DATA } from '~/constants'

const cx = className.bind(styles)

const About = () => {
  return (
    <div className={cx('about-wrapper')}>
      <section className={cx('smooth-typing')}>
        <Heading
          heading="Nâng cao trải nghiệm khi sử dụng bàn phím với chúng tôi"
          desc="Chúng tôi cố gắng cung cấp bàn phím hàng đầu để nâng cao trải nghiệm gõ của bạn lên một tầm cao mới."
        />
        <div className={cx('smooth-typing-action')}>
          <Button background small to="">
            Tìm hiểu ngay
          </Button>
          <Button outline small to="">
            Đăng nhập
          </Button>
        </div>
      </section>

      <section className={cx('company-history')}>
        <h2 className={cx('company-history-heading')}>
          Chúng tôi đã cống hiến hết mình để thiết kế và sản xuất bàn phím chất lượng cao
        </h2>
        <p className={cx('company-history-desc')}>
          Trong nhiều năm, chúng tôi đã cống hiến hết mình để thiết kế và sản xuất bàn phím chất lượng cao đáp ứng nhu
          cầu của cả những người chuyên nghiệp cũng như những người đam mê. Cam kết của chúng tôi về sự đổi mới, trình
          độ thủ công và trải nghiệm người dùng đặc biệt đã đưa chúng tôi lên vị trí dẫn đầu trong ngành.
        </p>
      </section>

      <section className={cx('team-section')}>
        <Heading
          heading="Thành viên của chúng tôi"
          desc="Hãy cùng phám phá các cá nhân tài năng đằng sau công ty của chúng tôi."
        />
        <div className={cx('team-list')}>
          {DATA.TEAM_LIST.map((item, index) => {
            return <UserItem key={index} {...item} />
          })}
        </div>

        <div className={cx('join-us')}>
          <h4>Tham gia với chúng tôi!</h4>
          <p>Chúng tôi đang tìm kiếm những cá nhân tài năng để gia nhập đội ngũ của chúng tôi.</p>
          <Button outline small to="">
            Đăng ký ngay
          </Button>
        </div>
      </section>

      <section className={cx('awards-section')}>
        <div className={cx('awards-content')}>
          <Heading
            heading="Những sự công nhận thể hiện sự xuất sắc của chúng tôi"
            desc="Chúng tôi tự hào đã nhận được nhiều giải thưởng và sự công nhận uy tín."
          />
          <div className={cx('awards-action')}>
            <Button outline small to="">
              Xem thêm
            </Button>
            <Button small rightIcon={<MdDoubleArrow />}>
              Đăng nhập
            </Button>
          </div>
        </div>
        <div className={cx('awards-list')}>
          {DATA.AWARDS_LIST.map((item, index) => {
            return (
              <div className={cx('awards-item')} key={index}>
                <img src={item.image} alt="Logo" />
                <h4>{item.name}</h4>
              </div>
            )
          })}
        </div>
      </section>

      <section className={cx('feature-section')}>
        <div className={cx('feature-content')}>
          <Heading
            heading="Giải phóng tiềm năng của công nghệ bàn phím"
            desc="Tại công ty, chúng tôi đam mê tạo ra những thiết kế bàn phím tiên tiến giúp nâng cao trải nghiệm gõ phím. Đội ngũ chuyên gia của chúng tôi làm việc không mệt mỏi để phát triển các nguyên mẫu và thiết kế sáng tạo, vượt qua các ranh giới của công nghệ bàn phím để mang đến cho khách hàng trải nghiệm gõ phím tốt nhất có thể."
          />
          <div className={cx('feature-action')}>
            <Button outline small to="">
              Khám phá ngay
            </Button>
            <Button small rightIcon={<MdDoubleArrow />}>
              Đăng nhập
            </Button>
          </div>
        </div>
        <div className={cx('feature-img')}>
          <img src={images.findKeyboard} alt="Keyboard Feature" />
        </div>
      </section>
    </div>
  )
}

export default About
