import {
  CalendarWrapper,
  CompletedMissionList,
  Container,
  LetterIcon,
  MessageBox,
  MessageBoxText,
  MissionContent,
  MissionDate,
  SenderToReceiver,
  SenderToReceiverWrapper,
} from './style';
import CompletedMission from '../../components/CompletedMission/CompletedMission';
import Layout from '../../components/Layout/Layout';

interface PageProps {
  sender: string;
  receiver: string;
}

const Page: React.FC<PageProps> = ({ sender, receiver }) => {
  return (
    <Layout headerTitle="미션방" showBackButton={true}>
      <Container>
        <MessageBox>
          <SenderToReceiver>
            <LetterIcon>💌</LetterIcon>
            <SenderToReceiverWrapper>{`${sender}(나) -> ${receiver}`}</SenderToReceiverWrapper>
          </SenderToReceiver>
          <MessageBoxText>마음을 녹이는 커피를 사세요.</MessageBoxText>
        </MessageBox>

        <MissionContent>
          <CalendarWrapper>
            <img src="/public/icons/icon-arrow-triangle-left.svg" />
            <MissionDate>12/24</MissionDate>
            <img src="/public/icons/icon-arrow-triangle-right.svg" />
          </CalendarWrapper>

          <CompletedMissionList>
            <CompletedMission nickname={sender} />
            <CompletedMission nickname={sender} />
          </CompletedMissionList>
        </MissionContent>
      </Container>
    </Layout>
  );
};

export default Page;
