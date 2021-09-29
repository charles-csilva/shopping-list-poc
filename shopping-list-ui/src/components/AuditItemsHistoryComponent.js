import moment from 'moment';
import { useSelector } from 'react-redux';

export const AuditItemsHistoryComponent = () => {
	const completedItems = useSelector(state => state.completedItems.data);
	return (
		<div>
			<h2>Items Marked as Purchased</h2>

			<table className="table table-striped">
				<tr>
					<th>Product Name</th>
					<th>Price</th>
					<th>Purchase Date Time</th>
				</tr>
				<tbody>
					{completedItems.map(({ name, price, purchaseTimestamp }) => (
						<tr>
							<td>{name}</td>
							<td>{`$${price}`}</td>
							<td>
								{moment(purchaseTimestamp).format('dddd, MMMM Do YYYY, HH:mm')}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
