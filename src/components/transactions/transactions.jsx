export const TransactionHistory = (props) => {
    return (
        <table class="transaction-history">
            <thead>
            <tr>
                <th class="table-title">Type</th>
                <th class="table-title">Amount</th>
                <th class="table-title">Currency</th>
            </tr>
            </thead>
                <tbody class="table-body">
            {
            props.items.map(transition => (
            <tr class={"table-item "+(transition.type.toString())} key={transition.id}>
              <td>{transition.type}</td>
              <td>{transition.amount}</td>
              <td>{transition.currency}</td>
            </tr>
            ))
            }
                </tbody>
        </table>        
    );
}
