import { ShoppingListComponent } from "./ShoppingListComponent";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  activeItemsFetchAction,
  activeItemCreateAction,
} from "../redux/activeItemsSlice";
import { completedItemsFetchAction } from "../redux/completedItemsSlice";
import moment from "moment";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const AuditPageComponent = () => {
  const activeItems = useSelector((state) => state.activeItems.data);
  const completedItems = useSelector((state) => state.completedItems.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activeItemsFetchAction());
    dispatch(completedItemsFetchAction());
  }, []);

  const addNewItem = (event) => {
    const name = event.target[0].value;
    const price = Number(event.target[1].value);
    dispatch(activeItemCreateAction({ name, price }));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Audit</h1>
      <Form className="sticky-top" onSubmit={addNewItem}>
        <h2>New Item</h2>
        <Form.Control type="text" placeholder="Product Name" />
        <Form.Control type="text" placeholder="Price" />
        <Button variant="link" type="submit">
          ➕
        </Button>
      </Form>

      <div>
        <div className="my-5">
          <h2>Active Items</h2>
          <ShoppingListComponent
            data={activeItems}
            isCompleteAction={false}
          ></ShoppingListComponent>
        </div>

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
                    {moment(purchaseTimestamp).format(
                      "dddd, MMMM Do YYYY, HH:mm"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
