function Row({name, category, price, inStock}) {
  return (
    <>
      <tr>
        <th scope="row" >
            {inStock ? <p>{name}</p> : <p className=" text-danger">{name}</p>}
            </th>
        <td>{category}</td>
        <td>{price}</td>
      </tr>
    </>
  );
}

export default Row;
