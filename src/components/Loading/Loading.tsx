import React from 'react'
import { Flex, Spin } from 'antd'

interface loadingProps {
  tip: string
}

const Loading: React.FC<loadingProps> = ({ tip }) => (
  <Flex gap="small" vertical>
    <Flex gap="small">
      <Spin tip={`Đang tải ${tip} ...`} size="large">
        <div className="content" />
      </Spin>
    </Flex>
  </Flex>
)

export default Loading
