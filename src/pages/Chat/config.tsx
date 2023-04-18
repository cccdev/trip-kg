import ky from 'ky';
import {useEffect, useState} from 'react';
import {createChatBotMessage, createCustomMessage, Chatbot} from 'react-chatbot-kit';

export const getAnswer = async (message: string) => {
  return await ky.get('/api/ask/' + message).json<{
    data: {
      answer: string[];
    };
  }>();
};

type IChatConfig = Pick<Parameters<typeof Chatbot>[0], 'config'>['config'];

const config: IChatConfig = {
  initialMessages: [createChatBotMessage(`你好，你可以问问我关于上海的旅游信息`, {})],
  widgets: [
    {
      widgetName: 'picMessage',
      widgetFunc: props => <PicMessage {...props} />,
      props: {
        message: '东方明珠图片',
      },
      mapStateToProps: [''],
    },
  ],
};

const PicMessage = (props: any) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    getAnswer(props.message).then(res => {
      setImageUrl(res.data.answer[0]);
    });
  }, []);

  return (
    <div>
      <img src={imageUrl} alt="图片" />
    </div>
  );
};

export default config;
