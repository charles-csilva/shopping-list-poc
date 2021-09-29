import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import {
  activeItemDeleteAction,
  activeItemMarkAsCompleteAction,
} from "../redux/activeItemsSlice";

export const ShoppingListComponent = ({ data, isCompleteAction }) => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-center">
      <table className="table table-bordered">
        <tbody>
          {data.length === 0 && <p>(No Items)</p>}
          {data.map(({ id, name, price }) => (
            <tr>
              <td>
                {`${name} - $${price}`}
                <Button
                  variant="link"
                  onClick={() =>
                    isCompleteAction
                      ? dispatch(activeItemMarkAsCompleteAction(id))
                      : dispatch(activeItemDeleteAction(id))
                  }
                >
                  {isCompleteAction && <span>✅</span>}
                  {!isCompleteAction && <span>❌</span>}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
