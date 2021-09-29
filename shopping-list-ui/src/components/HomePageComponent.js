import { ShoppingListComponent } from "./ShoppingListComponent";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { activeItemsFetchAction } from "../redux/activeItemsSlice";

export const HomePageComponent = () => {
  const isLoading = useSelector((state) => state.activeItems.isLoading);
  const data = useSelector((state) => state.activeItems.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activeItemsFetchAction());
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Shopping List</h2>
      {isLoading && <p>Loading</p>}
      {!isLoading && (
        <ShoppingListComponent
          data={data}
          isCompleteAction={true}
        ></ShoppingListComponent>
      )}
    </div>
  );
};
