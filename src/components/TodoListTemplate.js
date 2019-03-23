import React from 'react';
import './TodoListTemplate.css';

// 비구조화 할당 컴포넌트
const TodoListTemplate = ({ form, children }) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;