import {ShippingFormContainer} from './shipping-form.styles.jsx';
import {Form, Input, Button, InputNumber, Radio} from 'antd';
const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
      md: { span: 4},
      lg: { span: 4},
      xl: { span: 4},
      xxl: { span: 4},
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
      md: { span: 16},
      lg: { span: 18},
      xl: { span: 20},
      xxl: { span: 22},
    },
    
  };
const ShippingForm = () => {
const [form ] = Form.useForm();
const variant = Form.useWatch('variant', form);
    return(
        <ShippingFormContainer>
           <Form
                {...formItemLayout}
                form={form}
                variant={variant || 'underlined'}
                style={{ maxWidth: 800 }}
                initialValues={{ variant: 'underlined' }}
                >
                <Form.Item label="Name" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Address" name="address">
                    <Input />
                </Form.Item>
                <Form.Item label="City" name="city">
                    <Input />
                </Form.Item>
                <Form.Item label="State" name="state">
                    <Input />
                </Form.Item>
                <Form.Item label="Zip Code" name="zipCode">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Phone Number" name="phoneNumber">
                    <InputNumber />
                </Form.Item>
                <Form.Item Label="Email" name="email">
                    <Input />
                </Form.Item>
                <Form.Item label="Country" name="country">
                    <Input />
                </Form.Item>
                <Form.Item label="Payment Method" name="paymentMethod">
                  <Radio.Group>
                    <Radio value="creditCard">Credit Card</Radio>
                    <Radio value="paypal">PayPal</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Save</Button>
                </Form.Item>
            </Form>
        </ShippingFormContainer>
    )
}

export default ShippingForm;