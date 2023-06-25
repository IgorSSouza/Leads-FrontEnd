import { useState } from 'react';
import { Button, Content } from './styles';
import CardInvited from '../CardInvited/CardInvited';
import CardAccepted from '../CardAccepted/CardAccepted';


interface TabProps {
  tabs: string[];
}

const Tab = ({ tabs } : TabProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabContents = [
    <CardInvited></CardInvited>
    ,
    <CardAccepted></CardAccepted>,
  ];

  return (
    <Content>
      {tabs.map((tab, index) => (
        <Button
          key={index}
          onClick={() => handleTabClick(index)}
          className={index === activeTab ? 'active' : ''}
        >
          {tab}
        </Button>
      ))}
      <div>{tabContents[activeTab]}</div>
    </Content>
    
  );
};

export default Tab;
