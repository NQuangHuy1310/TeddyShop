import { Breadcrumb as BreadcrumbAnt } from 'antd'
import { Link } from 'react-router-dom'
import config from '~/config'

interface BreadcrumbItem {
  pageName: string
  pageLink?: string
}

interface BreadcrumbProps {
  breadcrumbData: BreadcrumbItem[]
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbData }) => {
  return (
    <BreadcrumbAnt style={{ fontSize: '1.6rem', padding: '10px 0' }}>
      <BreadcrumbAnt.Item key="home">
        <Link to={config.routes.home}>Trang chủ</Link>
      </BreadcrumbAnt.Item>
      {breadcrumbData.map((item, index) => {
        const isLastItem = index === breadcrumbData.length - 1
        return (
          <BreadcrumbAnt.Item key={index}>
            {isLastItem ? (
              item.pageName
            ) : item.pageLink ? (
              <Link to={item.pageLink}>{item.pageName}</Link>
            ) : (
              item.pageName
            )}
          </BreadcrumbAnt.Item>
        )
      })}
    </BreadcrumbAnt>
  )
}

export default Breadcrumb
