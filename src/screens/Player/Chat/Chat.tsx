import { Typing } from '../../../components';
import { ChatContainer } from './Chat.parts';

export const Chat = () => (
  <ChatContainer>
    <Typing delay={50} />
  </ChatContainer>
);
