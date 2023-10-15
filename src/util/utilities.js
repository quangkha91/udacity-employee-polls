export const getNewQuestions = (quests, userId) => {
  if (!Array.isArray(quests)) {
    throw new Error("quests must be an array");
  }
  return quests.filter(
    (q) =>
      !q.optionOne.votes.includes(userId) && !q.optionTwo.votes.includes(userId)
  );
};

export const getCompletedQuestions = (quests, userId) => {
  if (!Array.isArray(quests)) {
    throw new Error("quests must be an array");
  }
  return quests.filter(
    (q) =>
      q.optionOne.votes.includes(userId) || q.optionTwo.votes.includes(userId)
  );
};

export const calculatePercentage = (option, question) => {
  const total =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  switch (option) {
    case "opOne":
      return (question.optionOne.votes.length / total) * 100 + " %";
    case "opTwo":
      return (question.optionTwo.votes.length / total) * 100 + " %";
    default:
      return "";
  }
};
