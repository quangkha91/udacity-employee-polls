import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("_saveQuestion", () => {
  it("should return an object if save question successfully", async () => {
    let data = {
      optionOneText: "cakes",
      optionTwoText: "water",
      author: "user1",
    };
    let result = await _saveQuestion(data);
    expect(typeof result).toEqual("object");
  });

  it("Should return a string 'Please provide optionOneText, optionTwoText, and author' if has any empty parameter", async () => {
    let data = {
      optionOneText: "",
      optionTwoText: "water",
      author: "user1",
    };
    await expect(_saveQuestion(data)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("should return true if save question answer successfully", async () => {
    let result = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    });
    expect(result).toEqual(true);
  });

  it("Should return a string 'Please provide authedUser, qid, and answer' if has any empty parameter", async () => {
    let data = {
        authedUser: "sarahedo",
        qid: "",
        answer: "optionOne",
      };
    await expect(_saveQuestionAnswer(data)).rejects.toEqual(
      'Please provide authedUser, qid, and answer'
    );
  });
});
