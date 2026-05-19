export default function Prikaz({ jelo }) {
  return (
    <div className="prikaz">
      <table border={1}>
        <thead>
          <tr>
            <th>Naziv</th>
            <th>Tip</th>
            <th>Cijena</th>
            <th>Dostupnost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{jelo.naziv}</td>
            <td>{jelo.tip}</td>
            <td>{jelo.cijena} €</td>
            <td>{jelo.dostupnost}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
