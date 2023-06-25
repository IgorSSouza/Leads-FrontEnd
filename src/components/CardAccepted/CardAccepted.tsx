import { CardAcceptedStyle, CircleName, ContentFour, ContentOne, ContentTree, ContentTwo, Line, NameDate } from './styles';
import { BiMap } from 'react-icons/bi';
import { RiSuitcaseLine } from 'react-icons/ri';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { LeadDTO } from '../../interfaces/LeadDTO';
import { useApi } from '../../hooks/useApi';
import Notiflix from 'notiflix';
import { formatDate } from '../../helpers/formatDate';

const CardAccepted = () => {
  const [leads, setLeads] = useState<LeadDTO[]>([]);

  const api = useApi();

  useEffect(() => {
    Notiflix.Loading.circle();
    getData();
    Notiflix.Loading.remove();
  }, []);

  const getData = async () => {
    const response = await api.listLeads(1);
    setLeads(response);
  };

  return (
    <>
      {leads.map((lead) => (
        <CardAcceptedStyle key={lead.id}>
          <ContentOne>
            <CircleName>
              <p>{lead.fullName.charAt(0)}</p>
            </CircleName>
            <NameDate>
              <p className="Name">{lead.fullName}</p>
              <p className="Date">{formatDate(lead.dateCreated)}</p>
            </NameDate>
          </ContentOne>
          <Line />
          <ContentTwo>
            <BiMap />
            <p>{lead.suburb}</p>
            <RiSuitcaseLine />
            <p>{lead.category.name}</p>
            <p className="JobId">Job ID: {lead.id}</p>
            <p className="Price">${lead.price.toFixed(2)} Lead Invitation</p>
          </ContentTwo>
          <Line />
          <ContentTree>
            <BsTelephone />
            <p>{lead.phoneNumber}</p>
            <HiOutlineMail className="Mail" />
            <p>{lead.email}</p>
          </ContentTree>
          <ContentFour>
            <p>{lead.description}</p>
          </ContentFour>
        </CardAcceptedStyle>
      ))}
    </>
  );
};

export default CardAccepted;
