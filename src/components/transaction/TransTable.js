import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deletTranAction,
  getTransAction,
} from "../../pages/dashboard/transactionAction";

export const TransTable = () => {
  const dispatch = useDispatch();
  const { trans } = useSelector((state) => state.transaction);
  const { user } = useSelector((state) => state.user);


  useEffect(() => {
    // !trans.length && 
    user.uid && dispatch(getTransAction(user.uid));
  }, [dispatch, user.uid]);

  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      dispatch(deletTranAction(id, user.uid));
    }
  };

  const total = trans.reduce((acc, item) => {
    return item.type === "income" ? acc + +item.amount : acc - +item.amount;
  }, 0);

  return (
    <div className="">
      {trans.map((item, i) => (
        <div className="shadow-lg bg-body-tertiary rounded p-3 pt-1 pb-1 mb-2 d-flex justify-content-between fs-5 align-items-center">
        <div className="d-flex justify-content-between gap-3 align-items-center">
          <div>
          {item.type === "income" ? (
          <i class="fa-solid fa-coins fs-4 text-success"></i>
          ):(
            <i class="fa-solid fa-comments-dollar fs-4 text-danger"></i>

          )}
            
            </div>
          <div>
            <p className="lh-1">{item.name}
              <br/>
              <span className="form-text fs-6">{item.date}</span>
              </p>
            
            </div>
          </div>

          <div className="">
          <p className="d-flex justify-content-between align-items-center gap-1  ">${item.amount}
              <br/>
              <span className=""><Button
                  variant="transparent"
                  onClick={() => handleOnDelete(item)}
                >
                  <i class="fa-regular fa-trash-can fa-lg text-danger fw-bold"></i>
                </Button></span>
              </p>
          </div>


      </div>

      ))}
    
    </div>
  );
};
