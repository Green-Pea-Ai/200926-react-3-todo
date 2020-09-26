import React, { useState } from 'react';

const Todo = () => {
    const [todo, setTodo] = useState('')

    return (
        <div className="row mb-1">
                    <div className="col-sm-2">
                        <input
                            type="checkbox"
                        />
                    </div>
                    <div className="col-sm-8">
                        <span></span>
                    </div>
                    <div className="col-sm-2">
                        <button
                            className="btn btn-danger"
                        >
                            X
                        </button>
                    </div>
                </div>
    );
}
export default Todo