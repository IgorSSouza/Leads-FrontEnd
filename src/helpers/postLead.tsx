import Notiflix from "notiflix";
import { dataLeadList } from "../data/leads";
import { useApi } from "../hooks/useApi";
import { Lead } from "../interfaces/Lead";

const selectedLeads: Lead[] = [];

export const getRandomLead = (): Lead | undefined => {
  if (selectedLeads.length === dataLeadList.length) {
    return undefined;
  }

  const availableLeads = dataLeadList.filter((lead) => !selectedLeads.includes(lead));

  const randomIndex = Math.floor(Math.random() * availableLeads.length);
  const randomLead = availableLeads[randomIndex];

  selectedLeads.push(randomLead);

  return randomLead;
};

export const startRandomLeadTimer = async (getData: () => Promise<void>) => {
 
  const randomLead = getRandomLead();

  if (randomLead) {
    const api = useApi();
    await api.postLeads(randomLead);
    Notiflix.Notify.warning('Um novo Lead está aguardando a análise.');
    await getData();
  } 
};
