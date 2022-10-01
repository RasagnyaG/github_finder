import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function User({ user }) {
  const { id, login, avatar_url, html_url } = user;
  return (
    <div>
      <Card border="light" className="card">
        <Card.Img variant="top" src={avatar_url} className="image" />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title className="title">{login}</Card.Title>
          <Button
            variant="dark"
            href={html_url}
            target="_blank"
            style={{ margin: "3%" }}
          >
            visit profile
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default User;
