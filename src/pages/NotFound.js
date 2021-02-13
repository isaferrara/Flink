import { Result, Button } from 'antd';
import { Link} from 'react-router-dom'
import React from 'react'

export const NotFound = () => {
    return (
        <div>
            <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Link to={'/'}><Button type="primary">Home</Button></Link>}
  />,
        </div>
    )
}
export default NotFound