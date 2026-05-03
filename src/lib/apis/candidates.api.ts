import candidatesData from "../../data/candidates.json";

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const getCandidates = async (): Promise<Candidate[]> => {
  await delay(600);
  return candidatesData as Candidate[];
};

export const getCandidateById = async (
  id: string,
): Promise<Candidate | undefined> => {
  await delay(600);
  return (candidatesData as Candidate[]).find((c) => c.id === id);
};
