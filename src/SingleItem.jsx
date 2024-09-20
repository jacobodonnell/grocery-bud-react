const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
        id={item.name}
      />
      <label
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
        htmlFor={item.name}
      >
        {item.name}
      </label>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItem(item.id, item.name)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
