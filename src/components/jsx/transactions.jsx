export const TransactionHistory = (props) => {
    return (
        props.items.map(transition => (
            <tr class={"table-item "+(transition.type.toString())} key={transition.id}>
              <td>{transition.type}</td>
              <td>{transition.amount}</td>
              <td>{transition.currency}</td>
            </tr>
        ))
    )
}
