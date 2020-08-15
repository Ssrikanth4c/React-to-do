import React from "react";

class ShowItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }
  handleToggelEdit = () => {
    this.setState({
      edit: !this.state.edit,
      updateTodoItem: this.props.item.Additem
    });
  };
  componentDidUpdate() {
    console.log(this.props.item.status);
  }
  handleUpdate = () => {
    const { updateHandler, item } = this.props;
    updateHandler(item.id, this.state.updateTodoItem);
    this.handleToggelEdit();
  };
  render() {
    let { item, handleRemove, handleClick } = this.props;
    //destructring the edit fron state
    let { edit, updateTodoItem } = this.state;

    if (!edit)
      return (
        <div>
          <div className="row my-1">
            <div className="col-8">
              <div
                className="h2 border-bottom border-info"
                onClick={() => handleClick(item.id)}
              >
                {item.Additem}
              </div>
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-block btn-dark"
                onClick={this.handleToggelEdit}
              >
                Edit
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn  btn-danger"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      );
    else
      return (
        <div>
          <div className="row my-1">
            <div className="col-6">
              <input
                type="text"
                value={updateTodoItem}
                onChange={e => {
                  this.setState({
                    updateTodoItem: e.target.value
                  });
                }}
              />
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-block btn-dark"
                onClick={this.handleUpdate}
              >
                Update
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn  btn-danger"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-block btn-warning"
                onClick={this.handleToggelEdit}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      );
  }
}

export default ShowItems;
