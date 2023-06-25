import { useEffect, useState } from 'react';
import { ButtonAccept, ButtonDecline, CardInvitedStyle, CircleName, ContentFour, ContentOne, ContentTree, ContentTwo, Line, NameDate } from './styles';
import { BiMap } from 'react-icons/bi';
import { RiSuitcaseLine } from 'react-icons/ri';
import { LeadDTO } from '../../interfaces/LeadDTO';
import { useApi } from '../../hooks/useApi';
import Notiflix from 'notiflix';
import { formatDate } from '../../helpers/formatDate';
import { startRandomLeadTimer } from '../../helpers/postLead';

const CardInvited = () => {
  const [leads, setLeads] = useState<LeadDTO[]>([]);

  const api = useApi();

  useEffect(() => {
    Notiflix.Loading.circle();
    getData();
    Notiflix.Loading.remove();

    setTimeout(() => {
      startRandomLeadTimer(getData);
    }, 5000);

  }, []);

  const getData = async () => {
    const response = await api.listLeads(2);
    setLeads(response);
  };

  const handleAcceptSubmit = async (id: number) => {
    Notiflix.Loading.circle();
    try {
      
      await api.putLeads(id, 1);
      
      Notiflix.Notify.success('Status atualizado com sucesso!');
      getData();

    } catch (error) {
      console.error('Erro ao enviar os leads:', error);
    }
    Notiflix.Loading.remove();
  };

  const handleDeclineSubmit = async (id: number) => {
    Notiflix.Loading.circle();
    try {
      
      await api.putLeads(id, 0);
      
      Notiflix.Notify.success('Status atualizado com sucesso!');
      getData();

    } catch (error) {
      console.error('Erro ao enviar os leads:', error);
    }
    Notiflix.Loading.remove();
  };

  return (
    <>
      {leads.map((lead) => (
        <CardInvitedStyle key={lead.id}>
          <ContentOne>
            <CircleName>
              <p>{lead.firstName.charAt(0)}</p>
            </CircleName>
            <NameDate>
              <p className="Name">{lead.firstName}</p>
              <p className="Date">{formatDate(lead.dateCreated)}</p>
            </NameDate>
          </ContentOne>
          <Line></Line>
          <ContentTwo>
            <BiMap />
            <p>{lead.suburb}</p>
            <RiSuitcaseLine />
            <p>{lead.category.name}</p>
            <p className="JobId">Job ID: {lead.id}</p>
          </ContentTwo>
          <Line></Line>
          <ContentTree>
            <p>{lead.description}</p>
          </ContentTree>
          <Line></Line>
          <ContentFour>
            <ButtonAccept onClick={() => handleAcceptSubmit(lead.id)}>Accept</ButtonAccept>
            <ButtonDecline onClick={() => handleDeclineSubmit(lead.id)}>Decline</ButtonDecline>
            <p>
              <span>${lead.price.toFixed(2)}</span> Lead Invitation
            </p>
          </ContentFour>
        </CardInvitedStyle>
      ))}
    </>
  );
};

export default CardInvited;
