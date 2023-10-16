import Card from "./card";

const ListQuestions = ({ title, questions, users }) => {
  return (
    <div>
      <h1 className="title">{title}:</h1>
      <hr className="title-line" />
      <div className="card-group">
        {questions?.map((q) => (
          <Card question={q} author={users[q.author]} key={q.id} />
        ))}
      </div>
    </div>
  );
};

export default ListQuestions;
