import { Form, Input, Button } from 'antd';
import './style.less';
const Index = (props) => {
  const { style, onFinish } = props;
  return (
    <div className="login" style={style}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="用户名" name="username">
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input placeholder="请输入密码" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Index;
