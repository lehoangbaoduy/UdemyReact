import './ExpenseItem.css'

function ExpenseItem() {
  // this is JSX code
  return (
    // this is a desired target state
    // we cannot have something like this <div>Date</div><h2>Title</h2><div>Amount</div>
    // Simply because we must only have 1 root element per return statement
    // if we want to we must have the brackets
    <div className='expense-item'>
      <div>October 2nd 2022</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>$294.67</div>
      </div>
    </div>

  );
}

export default ExpenseItem;
