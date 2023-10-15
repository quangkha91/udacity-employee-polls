import { getCompletedQuestions, getNewQuestions, calculatePercentage } from "./utilities";

const questions = [
  {
    id: "xj352vofupe1dqz9emx13r",
    author: "mtsamis",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["mtsamis", "zoshikanlu"],
      text: "deploy to production once every two weeks",
    },
    optionTwo: {
      votes: ["tylermcginnis"],
      text: "deploy to production once every month",
    },
  },
  {
    id: "vthrdm985a262al8qx3do",
    author: "tylermcginnis",
    timestamp: 1489579767190,
    optionOne: { votes: ["tylermcginnis"], text: "take a course on ReactJS" },
    optionTwo: {
      votes: ["mtsamis"],
      text: "take a course on unit testing with Jest",
    },
  },
  {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "sarahedo",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "conduct a release retrospective 1 week after a release",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "conduct release retrospectives quarterly",
    },
  },
  {
    id: "loxhs1bqm25b708cmbf3g",
    author: "tylermcginnis",
    timestamp: 1482579767190,
    optionOne: { votes: [], text: "have code reviews conducted by peers" },
    optionTwo: {
      votes: ["sarahedo"],
      text: "have code reviews conducted by managers",
    },
  },
  {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "mtsamis",
    timestamp: 1468479767190,
    optionOne: { votes: [], text: "hire more frontend developers" },
    optionTwo: {
      votes: ["mtsamis", "sarahedo"],
      text: "hire more backend developers",
    },
  },
  {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "sarahedo",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["sarahedo"],
      text: "Build our new application with Javascript",
    },
    optionTwo: { votes: [], text: "Build our new application with Typescript" },
  },
];
describe("getNewQuestions", () => {
  it("should return exact questions that hasn't been answered", () => {
    let userId = "sarahedo";
    const result = getNewQuestions(questions, userId);
    expect(Object.keys(result).length).toEqual(2);
  });

  it("should throw an error if quests is not an array", () => {
    expect(() => getNewQuestions("not_an_array", "user123")).toThrowError(
      "quests must be an array"
    );
  });
});

describe("getCompletedQuestions", () => {
  it("should return exact questions that has been answered", () => {
    let userId = "sarahedo";
    const result = getCompletedQuestions(questions, userId);
    expect(Object.keys(result).length).toEqual(4);
  });

  it("should throw an error if quests is not an array", () => {
    expect(() => getCompletedQuestions("not_an_array", "user123")).toThrowError(
      "quests must be an array"
    );
  });
});

describe("calculatePercentage", () => {
  it("should return the exact percentage of choices and answers", () => {
    let question = {
      id: "vthrdm985a262al8qx3do",
      author: "tylermcginnis",
      timestamp: 1489579767190,
      optionOne: { votes: ["tylermcginnis"], text: "take a course on ReactJS" },
      optionTwo: {
        votes: ["mtsamis"],
        text: "take a course on unit testing with Jest",
      },
    };
    const result = calculatePercentage('opOne', question);
    expect(result).toEqual('50 %');
  });
});
