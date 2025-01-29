import Button from "./Button";

export default function Form() {
  return (
    <>
      <form>
        <label htmlFor="name">Name: </label> <br />
        <input type="text" name="name" id="name" style={{ padding: '10px', width: "30%" }} /> <br />
        <div style={{ marginTop: "10px" }}></div>
        <Button />
      </form>
      <br />
      <form>
        <label htmlFor="intitute">Intitute Name: </label> <br />
        <input type="text" name="institute" id="institute" style={{ padding: '10px', width: "30%" }} /> <br />
        <div style={{ marginTop: "10px" }}></div>
        <Button />
      </form>
    </>
  );
}