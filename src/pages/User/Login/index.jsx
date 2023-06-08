import { Form, Input } from 'antd';
const Index = () => {
  return (
    <div
      style={{
        width: '300px',
        height: '300px',
        margin: 'auto',
      }}>
      <Form layout="vertical">
        <Form.Item label="用户名" name="username">
          <Input></Input>
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input></Input>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Index;
